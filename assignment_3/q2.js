function print()
{
  const p1 = new Promise((r,s) => {
  setTimeout(() => {const data = { id: 1, name: 'John Doe' };
  r(data);
    //const data = { id: 1, name: 'John Doe' };
  },1000);
  }) 
  return p1;
}

print().then(res=>console.log(res));