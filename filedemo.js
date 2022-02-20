var fs=require('fs');

//take input from from user and store it in variable

const prompt=require("prompt-sync")({sigint:true});
const name=prompt("what is your name");
console.log("hey there "$name);



// fs.appendFile('mytext.txt','\n this is new line',function(err){
//     if(err) throw err;
//     console.log('saved!!!');

// });
// fs.readFile('mytext.txt',function(err,data){
//     console.log(data.toString());
// });

// x = fs.readFileSync( 'mytext.txt' );
// console.log(x.toString());