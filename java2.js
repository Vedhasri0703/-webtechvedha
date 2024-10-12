function add(a,b=0,c=0)
{
    let z = a+b+c;
    console.log("Sum: "+z);
}
add(5,4);

let a=[5,4,6,"Hi"];
console.log(a);

const x = [5,4,3];
console.log(x);
console.log("Length: "+ x.length);
//Array variable always hold the 1st element address and when pushing a new elemetn in an array it doesn't affect the other element and its address
x.push(10);
console.log("Length: "+ x.length);
console.log(x);
x.pop();
console.log(x);

//Object
const obj1={
    x: 10,  //Key value pair
    y: 25,
    z: [25,36,24],
    sobj:{
        x:35,
        y:85
    }
}

//This is Json format
console.log(obj1);
console.log(obj1.x);
console.log(obj1.y);
console.log(obj1.z);
console.log(obj1.z[1]);
console.log(obj1.sobj.x);
console.log(obj1.sobj.y);
console.log(obj1.sobj);

