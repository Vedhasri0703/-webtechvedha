/*
function add(a,b)
{
    let c = a+b;
    console.log("Sum:" + c);
}*/

//unanonymus function 

let a = function(a,b)
{
    let c = a+b;
    console.log("Sum:" + c);
}

a(5,5);
/*
let ad = (a,b) => {
    let c = a+b;
    console.log("Sum:"+c);
}
ad(9,7)
*/
let ad = (a,b) => (a+b);
console.log(ad(9,7));

