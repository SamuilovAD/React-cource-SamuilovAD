function restParams(...params) {
    console.log(params);
}
restParams(1,3,4,5,7);
restParams();
function restParams2(a , b, ...params) {
    console.log(params);
}
restParams2(1,2,5,7);