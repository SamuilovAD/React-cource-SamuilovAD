const sq = (x) => x*x;
console.log(sq(3));
const a = ['1','2','3','4'];
console.log(a);
const res = a
    .map((element) => parseInt(element))
    .filter((element) => element%2)
    .reduce((max, element) => Math.max(max, element), 0);
console.log(res);
