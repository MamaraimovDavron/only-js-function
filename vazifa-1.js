let sum = 0;
let counter = function (a, b){
    for(let i = a; i <= b; i++){
        sum += i;
    }

    return sum;
}

console.log(counter(1,6));