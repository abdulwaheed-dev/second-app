// const subjectName = 'Web Engineering';
// module.exports.sub = subjectName;    //sub name san access thendo

//module.exports = 'some string';     //kehn b name san san access thendo //pr iyen na karan khape

//module.exports = subjectName1 = 'Web Engineering'; //subjectName name san access thendo

//exports.sum1 = (a,b)=>{return a+b}; //sum1 name san access thendo

const subjectName = 'Web Engineering';
const sum = (a,b)=>{return a+b};    //object destructing san access thenda
module.exports={
    sum,subjectName
};
