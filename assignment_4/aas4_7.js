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
    
function retry(task,num) {
const p = new Promise((resolve,reject)=>{
    const p2 = task();
    p2.then(resValue=>{
        //console.log(resValue);
        resolve(resValue);
    },error=>{
        //console.log(error);
        if (num <= 0){
            reject(error);
        }
        else{
            num -= 1;
            //console.log(num);

            retry(task,num).then(res=>resolve(res),err=>reject(err)); 
        }
        
    });
})
return p;
}

// Sample invocation
retry(simulateAsyncTask, 3)
  .then(result => console.log('Result:', result))
  .catch(error => console.log('Error:', error))
