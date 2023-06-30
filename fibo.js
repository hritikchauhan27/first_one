//****** fibonacci series using reduce function ********//

let myfun = (arr,x,i) => {
    arr.push((i <= 1) ? i : arr[i-2] + arr[i-1])
    return arr
}

function fibo(n){
    return new Array(n).fill(1).reduce(myfun,[]) ;
  }
  console.log(fibo(7))