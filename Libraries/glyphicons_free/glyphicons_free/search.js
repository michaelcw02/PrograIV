const fs = require('fs');
var folder = './glyphicons/png';

var search = process.argv[2];
var type = process.argv[3];
if(type == 'social')
    folder = './glyphicons-social/png'


var format = /-\d+-/;

fs.readdir(folder, (error, files) => {
    if(!error) {
        let filtered = files.filter( (file) => {
            let fileArray = file.split(format);
            return (fileArray[1].indexOf(search) > -1);
        })
        showResults(filtered);
    }
    else
        console.error(error);
})

function showResults(array) {
    console.log('\nYou\'ve search for ' + search + ' and we\'ve found: \n');
    for(let i in array)
        console.log(i + '. ' + array[i]);
    console.log('\nDone!');
}

