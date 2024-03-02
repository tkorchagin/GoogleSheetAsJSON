# Google Sheets to JSON Converter

This project contains a Google Apps Script that converts data from a Google Sheet into JSON format, with special handling for "AnswerVariants" columns where texts in quotes separated by commas are converted into a list of texts. This script is designed to be used within the Google Sheets environment.

## How to Use

Follow these steps to implement and run the script in your Google Sheets:

### Step 1: Open Your Google Sheet

Open the Google Sheet you want to work with.

### Step 2: Access the Script Editor

- Go to **Extensions** > **Apps Script**.
- A new tab will open with the Google Apps Script editor.

### Step 3: Replace the Script

- In the Apps Script editor, erase any code in the editor (if it's a new script, it should just be a function stub).
- Copy the entire script from the `script.js` file in this GitHub repository.
- Paste the copied script into the Apps Script editor.

### Step 4: Save and Name Your Project

- Click on **File** > **Save**, or click the disk icon to save your script.
- Give your project a name when prompted.

### Step 5: Add the Custom Menu to Your Sheet

- Run the `onOpen` function once manually to create the custom menu in your Google Sheet:
  - Click on the function dropdown menu next to the bug icon and select `onOpen`.
  - Click the play icon (▶️) to run the function.
- You might be prompted to authorize the script to access your Google Sheets data. Follow the prompts to grant the necessary permissions.

### Step 6: Use the Script

- Return to your Google Sheet, and you should see a new menu item titled "Custom Menu" at the end of the standard menu.
- Click on "Custom Menu" and select "Show Sheet as JSON" to run the script.
- The script will process the sheet's data and display the JSON in an alert dialog or log it if the data is too large.

## Important Notes

- The script is designed with specific handling for the "AnswerVariants" column. If your sheet has different requirements or additional columns that need special processing, you may need to modify the script accordingly.
- Due to browser and platform security restrictions, the script cannot directly copy the JSON data to the clipboard. It will display the data in an alert for manual copying or log the data for larger datasets.

## Contributing

We welcome contributions and suggestions to improve this script! Please feel free to fork the repository, make your changes, and submit a pull request.

