
const client = require('smartsheet');
const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });

// Specify the directive
var moveRow = {
  "rowIds": [511423549007748, 5015023176378244], // giver sheet row 
  "to": {
    "sheetId": 7226103812122500  //destination sheetID 
  }
};

// Set options
var options = {
  sheetId: 8116057543075716, // sheet id of giver
  body: moveRow
};


// async function saveData(rowData, numSaves) {
//   for (let i = 1; i <= numSaves; i++) {
//     const filename = `data-${i}.txt`;
//     fs.writeFile(filename, rowData.join(','), (err) => {
//       if (err) throw err;
//       console.log(`${filename} saved!`);
//     });
//   }
// }




smartsheet.sheets.moveRowToAnotherSheet(options)
  .then(function (movedRow) {
    console.log(movedRow);
  })
  .catch(function (error) {
    console.log(error);
  });
  // }