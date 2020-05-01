const x = 10;
const y = 10;
const obectXYOld = {
    x:x,
    y:y,
    draw: function (){}
};
const objectXYnew = {
    x,
    y,
    draw(ctx){}
};
const defaults = {
    firstname: 'Sam',
    lastname: 'Samuilov',
    role: 'Software Engineer'
};

const employee = {
    firstname: 'Alex'
};
const newObj = Object.assign({},defaults, employee);
const newObjWithSpread = { ...defaults, ...employee};
console.log(newObj, newObjWithSpread);