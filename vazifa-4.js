let getMax = function (a, b){
    if(a > b) return a;
    else return b;
}

let getMax1 = function (a, b, c){
    if(getMax(a, b) > c) return getMax(a, b);
    else return c;
}

let getMax2 = function(a, b, c, d){
    if(getMax1(a, b, c) > d) return getMax2(a, b , c);
    else return d;
}

let getMax3 = function(a, b, c, d, e){
    if(getMax2(a, b, c, d) > e) return getMax2(a, b, c, d);
    else return e
}
console.log(getMax3(5,10,11,12,50));