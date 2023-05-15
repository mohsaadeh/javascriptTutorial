let myNum=[1,2,3,4,5,6];

// let newNum=myNum.map(function (element,index,arr){
//     return element+element;
// },10)

// console.log(newNum);


// let newArr=myNum.map((Element) => Element+Element)
// console.log(newArr);


// function sumElement(Element){
//     return Element+Element;
// }

// let newArr=myNum.map(sumElement);

// console.log(newArr);



// let swappingCases="elZERo";
// console.log(swappingCases);
// let newSwapping=swappingCases.split("").map((Element)=> {
// return Element===Element.toUpperCase() ? Element.toLowerCase():Element.toUpperCase()}).join("");

// console.log(newSwapping);


// let swappingCases="elZERo";
// let newSwapping =swappingCases.split("").map(function (ele){
//     return ele===ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");


// console.log(newSwapping);


// let invertedNumbers=[100,-200,300,-400,500];

// let newInvertNumber=invertedNumbers.map(function (ele){
//     return -ele;
// })

// console.log(newInvertNumber);


let ignoreNumber="Elz123er4o";
// let strOutNum=ignoreNumber.split("").map(function(ele){
// return isNaN(parseInt(ele)) ? ele :"";
// }).join("");


let strOutNum=ignoreNumber.split("").map((ele) =>  isNaN(parseInt(ele)) ? ele :"" ).join("");
console.log(strOutNum);




