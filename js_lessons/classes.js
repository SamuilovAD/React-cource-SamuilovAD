class Animal{
    constructor(name,voice) {
        this.name = name;
        this.voice = voice;
    }

    say(){
        console.log(this.name, this.voice);
    }
}
class Bird extends Animal{
    constructor(name,voice, canFly) {
        super(name, voice);
        this.canFly = canFly;
    }
    say(){
        console.log('Birds don\'t like to talk');
    }
}
const duck = new Bird('duck','quack', true);
duck.say();