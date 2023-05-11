let theName="Mohammad";

console.log(theName);
console.log(theName[1]); // o
console.log(theName[9]);  // Empty

console.log(theName.charAt(0)); // M
console.log(theName.charAt(7)); // d
console.log(theName.charAt(10)); // Empty

console.log(theName.length);

theName= "    Sami  ";
console.log(theName.trim()); // the value out white Space


console.log(theName.toUpperCase());
console.log(theName.toLocaleLowerCase());
theName= "Sami";

console.log(theName.trim().charAt(2).toUpperCase());


theName="Mohammad hassan saadeh";


console.log(theName.indexOf("hassan")); // 9
console.log(theName.indexOf("hassan",10)); //-1
console.log(theName.indexOf("s")); //11
console.log(theName.lastIndexOf("s")); //16

console.log(theName.slice(2,6)); // hamm
console.log(theName.slice(-5,-1)); // add

console.log(theName.repeat(6));


console.log(theName.split(""));



