function simulateAsyncTask() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      console.log(randomNumber);
      setTimeout(() => {
        if (randomNumber < 0.08) {
          resolve('Success');
        } else {
          reject('Error: Task failed');
        }
      }, 500);})}
      
//   function retry(task,num) {
//   const p = new Promise((resolve,reject)=>{
//       const p2 = task();
//       p2.then(resValue=>{
//           //console.log(resValue);
//           resolve(resValue);
//       },error=>{
//           //console.log(error);
//           if (num <= 0){
//               reject(error);
//           }
//           else{
//               num -= 1;
//               //console.log(num);
  
//               retry(task,num).then(res=>resolve(res),err=>reject(err)); 
//           }
          
//       });
//   })
//   return p;
//   }
  
  async function retry(task,num){
    try{
        const res = await task();
        console.log(res);
        return res;
    }
    catch(e){
        if (num <= 0)
        {
            console.log(e);
            return(e);
        }
        else
        {
            num -= 1;
            try{
                const resV = await retry(task,num);
                return resV;
            }
            catch(e){
                return e;
            }
        }
    }
  }

  // Sample invocation

  async function doo(){
    try{
        const res = await retry(simulateAsyncTask,3);
        console.log(res);
    }
    catch(e){
        console.log(e);
    }
  }
//   retry(simulateAsyncTask, 3)
//     .then(result => console.log('Result:', result))
//     .catch(error => console.log('Error:', error))
  