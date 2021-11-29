const person = {
    firstName : "teresa",
    lastName : "nancy",
    height : 5,
    weight:45,
    
};
let {height,weight,age=22}=person;
const{firstName:name}=person;
console.log(` ${name} ${height} ${weight}  ${age}`);

