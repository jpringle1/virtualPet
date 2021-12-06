class Pet{
    constructor(name, hunger, happiness, thirst){
        this._name = name 
        this._hunger = hunger 
        this._happiness = happiness
        this._thirst = thirst
    }

    eat() {
        this._hunger += 3;
        this._happiness -= 1;
        this._thirst -= 2;
        console.log(`you feed ${this._name}`)
        console.log(`hunger : ${this._hunger}`)
        console.log(`thirst : ${this._thirst}`)
        console.log(`happiness : ${this._happiness}`)
    }

    drink() {
        this._hunger -= 2;
        this._happiness -= 1;
        this._thirst += 3;
        console.log(`you give ${this._name} a drink`)
        console.log(`hunger : ${this._hunger}`)
        console.log(`thirst : ${this._thirst}`)
        console.log(`happiness : ${this._happiness}`)
    }

    play() {
        this._hunger -= 2;
        this._happiness += 3;
        this._thirst -= 2;
        console.log(`you play with ${this._name}`)
        console.log(`hunger : ${this._hunger}`)
        console.log(`thirst : ${this._thirst}`)
        console.log(`happiness : ${this._happiness}`)
    }

    get name(){
        return `${this._name} `
    }
};

let rabbit = new Pet("rabbit", 10, 10, 10)
let cat = new Pet( "cat", 10, 10, 10) 
let dog = new Pet("dog",10 ,10, 10)


rabbit.play() 
cat.play() 
dog.play()