const smartsheetClient = require('smartsheet');
const smartsheet = smartsheetClient.createClient({ accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });

const sourceSheetId = 8116057543075716; // sheet id of giver
const destinationSheetId = 7226103812122500;

const rowIds = [4443647588689796]; // array of row ids to export

async function exportRows() {
  try {
 
    const sourceSheet = await smartsheet.sheets.getSheet({ sheetId: sourceSheetId });

    // Loop through the row ids and export the corresponding rows to the destination sheet...
    for (const rowId of rowIds) {
      // Find the row with the specified id in the source sheet...
      const sourceRow = sourceSheet && sourceSheet.rows && sourceSheet.rows.find(row => row.id === rowId);

      if (sourceRow) {
       
        const cells = sourceRow.cells.map(cell => ({
          columnId: cell.columnId,
          value: cell.value
        }));

        // Add the row to the destination sheet...
        const destinationRow = await smartsheet.sheets.addRows({
          sheetId: destinationSheetId,
          body: [{ cells }]
        });

        console.log(`Row ${rowId} exported to destination sheet with row id ${destinationRow.result[0].id}`);
      } else {
        console.warn(`Row ${rowId}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
exportRows();
