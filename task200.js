const client = require('smartsheet');
const smartsheet = client.createClient({ logLevel: 'info', accessToken: 'MmCGZ07K5a4LO0ZhqMnECHyO8waDinqT92n5u' });

// Specify updated cell values
var row = [
    {
      "id": "6572427401553796",
      "cells": [
        {
          "columnId": 7518312134403972,
          "value": "new value"
        },
        {
          "columnId": 1888812600190852,
          "value": "A"
        }
      ]
    },
    {
      "id": "2068827774183300",
      "cells": [
        {
          "columnId": 7518312134403972,
          "value": "desc_updated"
        },
        {
          "columnId": 1888812600190852,
          "value": "B"
        }
      ]
    }
  ];
  
  // Set options
  var options = {
    sheetId: 2068827774183300,
    body: row
    };
  
  // Update rows in sheet
  smartsheet.sheets.updateRow(options)
    .then(function(updatedRows) {
      console.log(updatedRows);
    })
    .catch(function(error) {
      console.log(error);
    });
  






