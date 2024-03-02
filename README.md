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

### Step 4: Add the Custom Menu to Your Sheet

To add the custom menu to your Google Sheet, simply save your script and then reload the page with your Google Sheet:

1. **Save the Script:**
   - After pasting the script into the Apps Script editor, click on **File** > **Save**, or click the disk icon to save your script.
   - Give your project a name when prompted.

2. **Reload Your Google Sheet:**
   - Close the Apps Script editor and go back to your Google Sheet tab.
   - Reload the page with your Google Sheet (you can press `Ctrl + R` on Windows or `Cmd + R` on Mac, or simply click the reload button in your browser).

3. **Access the Custom Menu:**
   - After the page reloads, you should see a new menu item titled "Custom Menu" at the end of the standard menu bar in your Google Sheet. This indicates that the script has been successfully added and is ready to use.

### Step 5: Use the Script

- To convert your sheet's data to JSON format, click on "Custom Menu" and select "Show Sheet as JSON".
- The script will process the sheet's data and display the JSON in an alert dialog or log it if the data is too large.

By following these revised instructions, you eliminate the need to manually run the `onOpen` function from the script editor, making the process more straightforward for users. The custom menu will automatically appear in the Google Sheets UI after the page is reloaded.

## Important Notes

- The script is designed with specific handling for the "AnswerVariants" column. If your sheet has different requirements or additional columns that need special processing, you may need to modify the script accordingly.
- Due to browser and platform security restrictions, the script cannot directly copy the JSON data to the clipboard. It will display the data in an alert for manual copying or log the data for larger datasets.

## Contributing

We welcome contributions and suggestions to improve this script! Please feel free to fork the repository, make your changes, and submit a pull request.

