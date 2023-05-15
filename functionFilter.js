// let friends=["ahmad","Ibrahem","amer","sami","hamza","asma"];
// let newFrindes=friends.filter(function(ele){
//     return ele.startsWith("A")||ele.startsWith("a") ;
// });

// console.log(newFrindes);


let num=[1,2,3,4,5,6,7,8,9,10];
let newNum=num.filter((ele) => ele%2==0);
console.log(newNum);


let friends=["ahmad","Ibrahem","amer","sami","hamza","asma"];
let newFrindes=friends.filter(function(ele){
    return ele.charAt(0)=="a" || ele.charAt(0)=="A";
});

console.log(newFrindes);



let sentence="I love Foood Code Too Playing Much";
let word=sentence.split(" ").filter((ele) => ele.length< 5 ? ele : "").join(" ");
console.log(word);


let mix="A13BS2ZX";
// let nums=mix.split("").filter(function(ele){
//     return !isNaN(parseInt(ele))
// }).map((ele) => ele*ele).join("");
// console.log(nums);

let nums=mix.split("").filter(function(ele){
    return !isNaN(parseInt(ele))
}).map(ele=>ele*ele).join("");
console.log(nums);