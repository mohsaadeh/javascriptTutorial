let a="Elzero Web School".toString();
console.log(a.toString().slice(2,7));
console.log(a.toString().substring(2,7));
console.log(a.toString().substr(2,4));


console.log(a.charAt(2).toUpperCase()+a.slice(3,7));

console.log((a.charAt(13).toUpperCase().repeat(8)));

let arr=a.split(" ")
console.log(arr[0]);

console.log(a.substr(0,5)+a.substr(10));
let a1=a.slice(0,1).toLowerCase();
let a2=a.slice(1,a.length-1).toUpperCase();
let a3=a.slice(a.length-1,a.length).toLowerCase();

console.log(a1+a2+a3);