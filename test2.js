var countPrimes = function(val) {
let count=0;
let arr= new Array(val+1).fill(true);
for(let j=2;j<val;j++){
    if(arr[j]){
        count++;
      for(let i=j*2;i<val;i=j+i){
          arr[i]=false;
      }
    }
}
return count;
};
