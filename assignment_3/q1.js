function print(){
  const promise = new Promise((r,s)=>{
  setTimeout(() => {r("done")},3000);  
  });
  return promise;
}

// const promise = new Promise((r,s)=>{
//   setTimeout(() => {resolve("done")},2);
//   })
    
print().then(res => console.log(res));