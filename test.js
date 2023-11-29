var countPrimes = function(val) {
    function findPrime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
     return true;
}

let count=0;
for(let j=2;j<val;j++){
    if(findPrime(j)){
        count++;
    }
}
return count;
};
