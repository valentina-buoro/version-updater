

var readlineSync = require ('readline-sync');
var file = readlineSync.questionPath(' what is the file name? ')
var update = readlineSync.question('new version? ')
var updatedFile = file

const { readFileSync, promises: fsPromises } = require('fs');

// ✅ read file SYNCHRONOUSLY

const syncReadFile = function (filename, input) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split('\n').map((el) => {
        if(el.includes('ChartboostHelium')){
            return  [...el.split(" ").splice(1,3),input]

        }

        return  el.split(' ')

    });
    
    return arr;
    
}
//console.log(syncReadFile(file,update))
require("fs").writeFile(
    'output.txt',
    syncReadFile(file,update).map(function(v){
       
        return v.join(' ') }).join('\n'),
    function (err) { console.log(err ? 'Error :'+err : 'ok') }
);




//console.log(syncReadFile('./text.txt','400'))
