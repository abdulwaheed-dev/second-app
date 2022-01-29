//console.log('abc')
// const subject = require('./lib');   //own created module so relative path
// console.log(subject.subjectName)

//using bulit-in modules.. fs
// const fs = require('fs');  //using bulit-in 'fs' module that is used for file system
// fs.readFile('abc.txt',function(err,data){
//     console.log(data.toString());
// })

const path = require('path');

console.log(path.normalize('catrgories/////products/////productsDetails////5///?searchq=3//'));

console.log(path.join('products','categories','cat1','id','1')); 

console.log(path.extname('abc.txt')); //extension printing

console.log(path.resolve(__dirname)); 
//solves path according to os i.e windows, mac etc, 
//so windows will use forward selash and mac uses backward selash, 
//therefore resolve will solve according to that
//and __dirname will give path from root to destinantion folder
