const client = require('smartsheet');
const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });

// Specify the directive
var copyRow = {
    "rowIds": [4443647588689796],  // giver sheet row 
    "to": {
        "sheetId": 7226103812122500     //destination sheetID
    }
};

// Set options
var options = {
    sheetId: 8116057543075716,  // sheet id of giver
    body: copyRow
};

async function getUserDetails() {
    let index = 0;
    const options = {
      id: 8116057543075716
    };
    try {
      const sheetInfo = await smartsheet.sheets.getSheet(options);
      const rowsResult = await setRows(sheetInfo.rows, index);
      return rowsResult;
    } catch (error) {
      console.error(error);
    
    }
  }
  
  getUserDetails()
//   getUserDetails()
//   getUserDetails()
//   getUserDetails()

  // Copy rows
  smartsheet.sheets.copyRowToAnotherSheet(options)
    .then(function(results) {
      console.log(results);
    })
    .catch(function(error) {
      console.log(error);
    });
  


