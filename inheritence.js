class Person{
    constructor(name , age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
        return `Hello!, I'm ${this.name} of ${this.age}!`;
    }
}
class Employee extends Person{
    constructor(name , age , designation){
        super(name , age);
        this.designation=designation;
    }
    sayHello(){
        return `Hello!, I'm ${this.name}, a ${this.designation} of ${this.age} years! `;
    }
}
const emp=new Employee('Nishka' , 19 , 'Software Engineer');
console.log(emp.sayHello());