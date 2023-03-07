const client = require('smartsheet');
const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });

let numberOfRows;
// Set options
var options = {
    sheetId: 8116057543075716,
    rowId: 4443647588689796
};

// Get row
smartsheet.sheets.getRow(options)
    .then(function (row) {

        numberOfRows = row.cells[5].value;
        console.log(numberOfRows, "rowssssssss");
        addrows();
    })
    .catch(function (error) {
        console.log(error);
    });


// Specify the directive
var copyRow = {
    "rowIds": [4443647588689796],
    "to": {
        "sheetId": 7226103812122500
    }
};

// Set options
var options = {
    sheetId: 8116057543075716,
    body: copyRow
};

// Move rows
function addrows() {
    for (let index = 0; index < numberOfRows; index++) {
        console.log("hiiiii");
        smartsheet.sheets.copyRowToAnotherSheet(options)
            .then(function (movedRow) {
                console.log(movedRow);
            })
            .catch(function (error) {
                console.log(error);
        });
    }
}


