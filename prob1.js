const multiply_getter=(num,range)=>{
                var i=1
                var all_num=[]
                var multi=[]
                for (let i = 1 ;i < range; i++) {
                    all_num.push(i)
                    
                }
                for (let i = 0; i < all_num.length; i++) {
                    if (all_num[i] % num === 0) { // divide by the number
                     multi.push(all_num[i]); // add the current multiple found to the multiples array
                    }
                  }
                console.log(all_num);

                return multi

    }



const all_sum= (range)=>{
      var three_multi=multiply_getter(3,range)
      var five_multi=multiply_getter(5,range)
      
      var result=0

      three_multi.forEach(number => {
        result += number;
      })

      var result2=0

      five_multi.forEach(number => {
        result2 += number;
      })
      
      

      return result+result2
      

}
