function swapKeyAndValues(obj) {
  // Your code here
  for(key in obj){
    obj[obj[key]] = key;
  //delete key;
    delete obj[key];
  }
}

const sampleObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

swapKeyAndValues(sampleObject);
console.log(sampleObject);