const one={
    name:"tersa",
    age:42
};
const two={
    number:107,
    ...one
};
let  nan=[1,2,3];
let ter=[4,5,...nan,6];
console.log(ter);
console.log(two);
const{name,...rest} = one;
console.log(rest.age);