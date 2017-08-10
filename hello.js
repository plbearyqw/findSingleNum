function generateNum(n,single){
          let nums = [];
          if(single >= n){
                    return;
          }
          for(let i = 1; i <= n; i++){
                    if(i !== single){
                              nums.push(i);
                              nums.push(i);
                    }else{
                              nums.push(i);
                    }
          }
          return nums;
}

function findNum(arr){
          let single = [];
          for(let i = 0; i < arr.length; i++){
                    if(!single.indexOf(arr[i]) > 0 || single.length === 0){
                              single.push(arr[i]);
                    }else{
                              single.splice(single.indexOf(arr[i]),1);
                    }
          }
          return single;
}
