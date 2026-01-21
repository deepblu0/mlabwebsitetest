import json
import pandas as pd
import datetime

# Files
OLD_JS_PATH = r"c:\Users\berka\Antigravity\m-lab-landing\old_horizon_data.js"
CURRENT_JS_PATH = r"c:\Users\berka\Antigravity\m-lab-landing\horizon-data.js"
EXCEL_OUTPUT_PATH = r"c:\Users\berka\Antigravity\m-lab-landing\horizon-reports\horizon_rapor_latest.xlsx"
FINAL_JS_PATH = r"c:\Users\berka\Antigravity\m-lab-landing\horizon-data.js"

def load_js_data(path):
    content = ""
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
    except UnicodeDecodeError:
        with open(path, "r", encoding="utf-16") as f:
            content = f.read()
            
    # Strip "const horizonData = " and ";"
    json_str = content.replace("const horizonData = ", "").strip().rstrip(";")
    return json.loads(json_str)

def create_excel(data, output_path):
    with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
        # Sheet 1: New Calls
        df_new = pd.DataFrame(data['newCalls'])
        # Rename for excel headers
        df_new = df_new[['name', 'code', 'openDate', 'closeDate', 'budget']]
        df_new.columns = ['Çağrı Adı', 'Çağrı Kodu', 'Açılış Tarihi', 'Kapanış Tarihi', 'Bütçe']
        df_new.to_excel(writer, sheet_name='Yeni Açılan Çağrılar', index=False)
        
        # Sheet 2: Mission Calls
        df_miss = pd.DataFrame(data['missionCalls'])
        df_miss = df_miss[['name', 'code', 'openDate', 'closeDate', 'budget']]
        df_miss.columns = ['Çağrı Adı', 'Çağrı Kodu', 'Açılış Tarihi', 'Kapanış Tarihi', 'Bütçe']
        df_miss.to_excel(writer, sheet_name='Tüm Misyon Çağrıları', index=False)
        
        # Sheet 3: All Calls
        df_all = pd.DataFrame(data['allCalls'])
        df_all = df_all[['name', 'code', 'openDate', 'closeDate', 'budget']]
        df_all.columns = ['Çağrı Adı', 'Çağrı Kodu', 'Açılış Tarihi', 'Kapanış Tarihi', 'Bütçe']
        df_all.to_excel(writer, sheet_name='Tüm Açık Çağrılar', index=False)

def main():
    try:
        # Load Old Data (for New Calls)
        print("Loading old data...")
        old_data = load_js_data(OLD_JS_PATH)
        new_calls = old_data.get('newCalls', [])
        print(f"Recovered {len(new_calls)} new calls from history.")
        
        # Load Current Data (for All Calls and Mission Calls)
        print("Loading current data...")
        current_data = load_js_data(CURRENT_JS_PATH)
        all_calls = current_data.get('allCalls', [])
        mission_calls = current_data.get('missionCalls', [])
        
        # If current mission calls are 0/empty, maybe filter from all_calls?
        # But we saw 69 mission calls in the processing log, so it should be fine.
        print(f"Found {len(all_calls)} all calls and {len(mission_calls)} mission calls in current data.")
        
        # Construct Final Data
        final_data = {
            "lastUpdated": datetime.datetime.now().strftime("%d.%m.%Y"),
            "newCalls": new_calls,
            "missionCalls": mission_calls,
            "allCalls": all_calls
        }
        
        # 1. Regenerate JS File
        js_content = f"const horizonData = {json.dumps(final_data, indent=2, ensure_ascii=False)};"
        with open(FINAL_JS_PATH, "w", encoding="utf-8") as f:
            f.write(js_content)
        print("Updated horizon-data.js")
        
        # 2. Regenerate Excel File
        create_excel(final_data, EXCEL_OUTPUT_PATH)
        print(f"Updated {EXCEL_OUTPUT_PATH}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
