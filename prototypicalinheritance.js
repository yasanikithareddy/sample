class Animal{
    constructor(name){
        this.name=name;       
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class Dog extends Animal{
    constructor(name , breed){
        super(name);
        this.breed=breed;
    }
    bark(){
        return `${this.name} of breed ${this.breed} is barking!`;
    }
}
const d=new Dog('Louis' , 'Golden Retriever');
d.eat();
d.sleep();
console.log(d.bark());