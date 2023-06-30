  function mul(a, b){
    return a*b;
  }
let x=3,y=4;
 let c = mul(x, y);
 console.log(c);

 // arrow function if don't want to use function keyword

 const sum = (x, y) => x + y;
 console.log(sum(11, 12));

 
 let swap =(x, y) => {
    var temp=x;
    x=y;
    y=temp;
    return [x, y];
};

console.log(swap(9, 99));