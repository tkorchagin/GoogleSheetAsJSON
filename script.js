/** @OnlyCurrentDoc */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Adds a custom menu to the Google Sheets UI
  ui.createMenu('Custom Menu')
      .addItem('Show Sheet as JSON', 'showSheetAsJson')
      .addToUi();
}

function showSheetAsJson() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var data = [];
  var headers = values[0];
  
  // Skip the headers row and start from row 1
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var rowData = {};
    for (var j = 0; j < headers.length; j++) {
      // Special handling for "AnswerVariants" column
      if (headers[j] === "AnswerVariants") {
        // Check if the cell is not empty
        if (row[j].trim() !== "") {
          // Convert the string to an array of strings
          rowData[headers[j]] = row[j].split(',').map(function(item) {
            // Trim spaces and remove surrounding quotes if present
            return item.trim().replace(/^"|"$/g, '');
          });
        } else {
          // Assign an empty array if the cell is empty
          rowData[headers[j]] = [];
        }
      } else {
        rowData[headers[j]] = row[j];
      }
    }
    data.push(rowData);
  }
  
  var jsonData = JSON.stringify(data, null, 2);
  
  // Attempt to display the JSON data directly to the user
  try {
    SpreadsheetApp.getUi().alert('JSON Data:', jsonData, SpreadsheetApp.getUi().ButtonSet.OK);
  } catch (e) {
    // If the data is too large for an alert, notify the user
    SpreadsheetApp.getUi().alert('The JSON data is too large to display in an alert. Please check the logs.');
    console.log(jsonData); // Fallback to logging
  }
}
