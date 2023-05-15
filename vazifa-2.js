let isPrime = function (a){
    if((a == 2) || (a == 3) || (a == 5) || (a == 7)){
        return "Ha tub";
    }

    else if((a % 2 == 0) || (a % 3 == 0) || (a % 5 == 0) || (a % 7 == 0)){
        return "Yo`q tub emas";
    }

    else if(a == 1){
        return "Tub ham, murakkab ham emas!"
    }
}

console.log(isPrime(1));