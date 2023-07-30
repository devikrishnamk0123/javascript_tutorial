function createSequentialIdGenerator(num){
  
  function f1(){
    num = num+1;
    return (num);
  }
  return f1
}

const generateUniqueId = createSequentialIdGenerator(999);

console.log(generateUniqueId()); // Expected output: 1000
console.log(generateUniqueId()); // Expected output: 1001
console.log(generateUniqueId()); // Expected output: 1002


