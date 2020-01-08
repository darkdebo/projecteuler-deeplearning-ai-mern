const primechecker=(n)=>{
    
    if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;                            //O(n)
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
        
    
}

const factorfinder=(num)=>{
    var store=new Array()
    var i=2

    for (let j = 0; j < num; j++) {
        if (num%i==0 && primechecker(i)) {          //O(n)
            store.push(i)
        }
        i++
    }
    console.log(store);
    
    return Math.max(...store)

}

const max_facttor=(num)=>{
    var i=2
    var max_ele=i
    for (let j = max_ele; j < Math.sqrt(num); j++) {
        if (num%i==0 && primechecker(i)) {
            if(max_ele<i){
                max_ele=i               //O(sqrt(n))
            }
        }
        i++
    }

    return max_ele

}

console.log(max_facttor(13195));//result is 29
