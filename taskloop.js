// const client = require('smartsheet');
// const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });

// Specify the directive
// var copyRow = {
    //     "rowIds": [4443647588689796],  // giver sheet row 
    //     "to": {
//         "sheetId": 7226103812122500     //destination sheetID
//     }
// };

// // Set options
// var options = {
    //     sheetId: 8116057543075716,  // sheet id of giver
    //     body: copyRow
    // };

    // async function getUserDetails() {
//     let index = 0;
//     const options = {
    //     id: 6057543075716
//     };811
//     try {
    //       const sheetInfo = await smartsheet.sheets.getSheet(options);
    //       const rowsResult = await setRows(sheetInfo.rows, index);
    //       return rowsResult;
    //     } catch (error) {
//       console.error(error);

//     }
//   }

//   var options = {
    //     id: 7226103812122500 // Id of Sheet
    // };
    
    // var row_ids = '';
    
    // // Get sheet
    // smartsheet.sheets.getSheet(options)
    //     .then(function(sheetInfo) {
        //         for (var i=0; i < sheetInfo.rows.length; i++) {
            //             row_ids += sheetInfo.rows[i].id + ','; 
            //         }
            
            //         row_ids = row_ids.substring(0, row_ids.length-1);
            //         console.log(row_ids);
            //     })
            
            
            //   // Copy rows
            //   smartsheet.sheets.copyRowToAnotherSheet(options)
            //     .then(function(results) {
                //       console.log(results);
                //     })
                //     .catch(function(error) {
                    //       console.log(error);
                    //     });
  
                    



// const smartsheet = require('smartsheet');
// const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });


// const sourceSheetId = 8116057543075716;
// const destSheetId = 7226103812122500;


// const sourceSheet = await client.sheets.getSheet({ id: 8116057543075716 });


// for (const row of sourceSheet.rows) {
//     // TODO: Copy the row to the destination sheet
//   }

//   const newRow = {
//     toBottom: true,
//     cells: row.cells.map((cell) => ({
//       columnId: cell.columnId,
//       value: cell.value,
//     })),
//   };
  
//   await client.sheets.addRow({
//     sheetId: destSheetId,
//     body: newRow,
//   });

  
//   async function copyRows() {
//     const sourceSheetId = 8116057543075716;
//     const destSheetId = 7226103812122500;
  
//     const sourceSheet = await client.sheets.getSheet({ id: sourceSheetId });
  
//     for (const row of sourceSheet.rows) {
//       const newRow = {
//         toBottom: true,
//         cells: row.cells.map((cell) => ({
//           columnId: cell.columnId,
//           value: cell.value,
//         })),
//       };
  
//       await client.sheets.addRow({
//         sheetId: destSheetId,
//         body: newRow,
//       });
//     }
//   }
  
//   copyRows();
  
const client = require('smartsheet');
const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });


const sourceSheetId = 8116057543075716;
const destSheetId = 7226103812122500;
var copyRow = {
  "rowIds": [4443647588689796],  // giver sheet row 
  "to": {
      "sheetId": 7226103812122500     //destination sheetID
  }
};

async function copyRows() {
  const sourceSheet = await client.sheets.getSheet({id:sourceSheetId});

  for (const row of sourceSheet.rows) {
    const newRow = {
      toBottom: true,
      cells: row.cells.map((cell) => ({
        columnId: cell.columnId,
        value: cell.value,
      })),
    };

    await client.sheets.addRow({
      sheetId: destSheetId,
      body: newRow,
    });
  }
}

copyRows();
