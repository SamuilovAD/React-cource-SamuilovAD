const animal = {
    say() {
        console.log(this.name, this.sound);
    }
};
const dog = {
    name:'dog',
    sound: 'bark'
}
Object.setPrototypeOf(dog, animal);

dog.say();

function createAnimal(name, voice){
    const animalLocal = Object.create(animal);
    animalLocal.name = name;
    animalLocal.sound = voice;

    return animalLocal;
}
function Animal(name, voice){
    this.name = name;
    this.sound = voice;
}
Animal.prototype.say = function () {
    console.log(this.name, this.sound);
}
const wolf = createAnimal('Wolf','bark');
wolf.say();
const wolf2 =new Animal('Wolf2','bark2');
wolf2.say();