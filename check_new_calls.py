import pandas as pd

excel_path = r"c:\Users\berka\Antigravity\m-lab-landing\horizon-reports\horizon_rapor_latest.xlsx"

try:
    # Read first sheet (New Calls)
    df = pd.read_excel(excel_path, sheet_name=0) 
    print("Columns:", df.columns.tolist())
    print("Row count:", len(df))
    if len(df) > 0:
        print("First row:", df.iloc[0].to_dict())
        
except Exception as e:
    print(f"Error: {e}")
