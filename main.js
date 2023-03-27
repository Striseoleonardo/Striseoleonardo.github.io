const fs = require('fs');

// Apriamo il file in lettura
fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  var txt = data;

    console.log(data)
});
