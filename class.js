class Animal{
    constructor(name , species){
        this.name=name;
        this.species=species;
    }
    about(){
        return `${this.name} is of ${this.species}`;
    }
}
const animal= new Animal('Lion' , 'Wild-Cat');
console.log(animal.about());