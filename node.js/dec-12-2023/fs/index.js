const fs = require('fs');

fs.readFile('ashraf.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    };
    console.log(data);
});

// readFileSync
const data = fs.readFileSync('ashraf.txt', 'utf8');
console.log(data);

// writeFile
fs.writeFile('akash.txt', 'Admit Card chirefeleche', (err) => {
    if (err) {
        console.log(err.message);
        return;
    };
    console.log('File is created');
});

// writeFileSync
// fs.writeFileSync('tausif.txt', 'Tausif Canada giyechilo');

// appendFile
fs.appendFile('tausif.txt', 'Tausif Canada giyechilo\n', (err) => {
    if (err) {
        console.log(err.message);
        return;
    };
    console.log('File is created');
});

// appendFileSync
fs.appendFileSync('tausif.txt', 'Tausif Canada giyechilo\n');

// rename
/* fs.rename('akash.txt', 'akash2.txt', (err) => {
    if (err) {
        console.log(err.message);
        return;
    };
    console.log('File is renamed');
});

// renameSync
fs.renameSync('akash2.txt', 'akash.txt'); */

fs.writeFileSync('akash.pdf', 'Admit Card chirefeleche');

// unlink
fs.unlink('akash.pdf', (err) => {
    if (err) {
        console.log(err.message);
        return;
    };
    console.log('File is deleted');
});
