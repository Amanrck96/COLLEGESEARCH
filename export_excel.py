import pandas as pd
import json

# Paths
excel_path = r'C:\Users\amanr\Downloads\2025\College Data_AMAN .xlsm'
json_path = r'c:\Users\amanr\collegesearch\src\data\siteData.json'
output_path = r'C:\Users\amanr\Downloads\2025\College_Data_Updated_Images.xlsx'

print(f"Loading JSON from {json_path}...")
with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

colleges_json = data['colleges']

print(f"Loading Excel from {excel_path}...")
# Read the same sheet used previously
df = pd.read_excel(excel_path, sheet_name='Sheet2')

print("Updating images column...")
# Iterate and update the 'images' column
for i, col_data in enumerate(colleges_json):
    if i < len(df):
        # Join gallery images with commas
        images_str = ', '.join(col_data.get('gallery', [col_data.get('img', '')]))
        # if the script fell back to unsplash, leave it or put the link. The user wants the updated links.
        df.at[i, 'images'] = images_str

print(f"Saving updated Excel to {output_path}...")
# Use openpyxl engine to write to xlsx
df.to_excel(output_path, index=False, sheet_name='Sheet2')
print("Successfully generated updated Excel file.")
