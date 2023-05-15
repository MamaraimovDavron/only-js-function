let isPrime = function (a){
    for(let i = 2, s = Math.sqrt(a); i <= s; i++){
        if(a % 2 === 0) return false;
    }

    return a > 1;
}

console.log(isPrime(184981));