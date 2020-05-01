let name = 'Alex';
console.log(name);
const nameConst = 'Alex const';
console.log(nameConst);
const person = {
    person: 'Alice'
};
console.log(person);
person.person = 'Sam';
console.log(person);
for (let i=0;i<3;i++){
    setTimeout(
        function(){
            console.log(i);
        },i*100);
}
