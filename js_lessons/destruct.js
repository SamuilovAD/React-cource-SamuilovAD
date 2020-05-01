const Person = {
    name:{
        first:'Alex',
        last: 'Samuilov'
    },
};
const { name: { first: firstname, last: lastname }, role = 'default' } = Person;
console.log(firstname, lastname,role);

const People = ['Julia','Roberta','Gala'];
const [a, ...girls] = People;
console.log(a, girls);