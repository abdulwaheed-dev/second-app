//console.log('abc')

//==============================================================================
// const subject = require('./lib');   //own created module so relative path
// console.log(subject.subjectName)

//==============================================================================
//using bulit-in modules.. fs
// const fs = require('fs');  //using bulit-in 'fs' module that is used for file system
// fs.readFile('abc.txt',function(err,data){
//     console.log(data.toString());
// })
//==============================================================================

// const path = require('path');

// console.log(path.normalize('catrgories/////products/////productsDetails////5///?searchq=3//'));
// //normalize in better path

// console.log(path.join('products','categories','cat1','id','1')); //joins and creates path

// console.log(path.extname('abc.txt')); //extension printing

// console.log(path.resolve(__dirname)); 
// //solves path according to os i.e windows, mac etc, 
// //so windows will use forward selash and mac uses backward selash, 
// //therefore resolve will solve according to that
// //and __dirname will give path from root to destinantion folder
//==============================================================================

// //http module
// const http = require('http');
// const { resolve } = require('path');
// const server = http.createServer(function(request,response){
//     //response.write('Hello Node')  //response from server to client
//     // console.log(request.url);
//     if(request.url === '/getPerson' && request.method == 'GET'){
//         const person = {fullname:'Waheed',age:21,gender:'male',city:'Khairpur'};
//         response.write(JSON.stringify(person))  //response from server to client
//     }
//     response.end()
// });
// server.listen(3000,function(){
//     console.log('server is listening at port no.3000')
// })
//==============================================================================

//express installation and using, it is third party module
const person = {fullname:'Waheed',age:21,gender:'male',city:'Khairpur'};
const express = require('express');
const app = express();
const path = require('path');

app.get('/home',function(req,res){
    const homePage = path.resolve(__dirname,'index.html');
    res.sendFile(homePage);
})

app.get('/about',function(req,res){
    const about = path.resolve(__dirname,'about.html');
    res.sendFile(about);
})

app.get('/getPerson',function(request,response){
    response.send(person);
})
app.listen(3000,function(){
    console.log('Server is listening at port 3000')
})
//==============================================================================