import pandas as pd
import json
import datetime
import os

# Paths
EXCEL_PATH = r"c:\Users\berka\Antigravity\m-lab-landing\horizon-reports\horizon_rapor_latest.xlsx"
JS_OUTPUT_PATH = r"c:\Users\berka\Antigravity\m-lab-landing\horizon-data.js"

def clean_str(val):
    if pd.isna(val):
        return ""
    return str(val).strip()

def format_date(val):
    if pd.isna(val):
        return ""
    if isinstance(val, datetime.datetime):
        return val.strftime("%Y-%m-%d")
    return str(val).split(' ')[0]  # Handle string dates if any

def format_full_date(val):
    if pd.isna(val):
        return ""
    if isinstance(val, datetime.datetime):
        return val.strftime("%Y-%m-%d 00:00:00")
    # If it's already a string, try to ensure it has time or leave as is if complex
    s = str(val)
    if " " not in s:
        return s + " 00:00:00"
    return s

def get_link(code):
    c = clean_str(code)
    if not c:
        return "#"
    return f"https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/{c.lower()}"

def process_sheet(df):
    calls = []
    # Expected columns based on previous inspection: 
    # 'Çağrı Adı', 'Çağrı Kodu', 'Açılış Tarihi', 'Kapanış Tarihi', 'Bütçe'
    
    # Normalize column names just in case
    df.columns = [str(col).strip() for col in df.columns]
    
    for _, row in df.iterrows():
        # Skip empty rows if any
        if pd.isna(row.get('Çağrı Adı')):
            continue
            
        code = clean_str(row.get('Çağrı Kodu'))
        name = clean_str(row.get('Çağrı Adı'))
        
        # If no code, can't link, but still might be valid? usually code is key.
        if not code and not name:
            continue

        item = {
            "name": name,
            "code": code,
            "openDate": format_date(row.get('Açılış Tarihi')),
            "closeDate": format_full_date(row.get('Kapanış Tarihi')),
            "budget": clean_str(row.get('Bütçe')),
            "link": get_link(code)
        }
        calls.append(item)
    return calls

def main():
    print(f"Reading Excel from: {EXCEL_PATH}")
    
    try:
        xl = pd.ExcelFile(EXCEL_PATH)
        print(f"Sheets found: {xl.sheet_names}")
        
        # We expect specific sheet names or order. 
        # Typically: sheet 0 -> New, sheet 1 -> Mission, sheet 2 -> All
        # Let's try to map by name if possible, else index
        
        sheet_map = {
            'new': None,
            'mission': None,
            'all': None
        }
        
        for name in xl.sheet_names:
            lower_name = name.lower()
            if "yeni" in lower_name:
                sheet_map['new'] = name
            elif "misyon" in lower_name:
                sheet_map['mission'] = name
            elif "tüm" in lower_name or "tum" in lower_name: # Covers "Tüm Açık Çağrılar"
                sheet_map['all'] = name
                
        # Fallback to indices if names don't match exactly
        if not sheet_map['new'] and len(xl.sheet_names) > 0: sheet_map['new'] = xl.sheet_names[0]
        if not sheet_map['mission'] and len(xl.sheet_names) > 1: sheet_map['mission'] = xl.sheet_names[1]
        if not sheet_map['all'] and len(xl.sheet_names) > 2: sheet_map['all'] = xl.sheet_names[2]
        
        new_calls = []
        mission_calls = []
        all_calls = []
        
        if sheet_map['new']:
            print(f"Processing 'New' from sheet: {sheet_map['new']}")
            new_calls = process_sheet(pd.read_excel(EXCEL_PATH, sheet_name=sheet_map['new']))
            
        if sheet_map['mission']:
            print(f"Processing 'Mission' from sheet: {sheet_map['mission']}")
            mission_calls = process_sheet(pd.read_excel(EXCEL_PATH, sheet_name=sheet_map['mission']))
            
        if sheet_map['all']:
            print(f"Processing 'All' from sheet: {sheet_map['all']}")
            all_calls = process_sheet(pd.read_excel(EXCEL_PATH, sheet_name=sheet_map['all']))
            
        print(f"Counts: New={len(new_calls)}, Mission={len(mission_calls)}, All={len(all_calls)}")
        
        data = {
            "lastUpdated": datetime.datetime.now().strftime("%d.%m.%Y"), # Format as DD.MM.YYYY for UI
            "newCalls": new_calls,
            "missionCalls": mission_calls,
            "allCalls": all_calls
        }
        
        js_content = f"const horizonData = {json.dumps(data, indent=2, ensure_ascii=False)};"
        
        with open(JS_OUTPUT_PATH, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print(f"Successfully updated {JS_OUTPUT_PATH}")
        
    except Exception as e:
        print(f"Error processing excel: {e}")
        raise e

if __name__ == "__main__":
    main()
