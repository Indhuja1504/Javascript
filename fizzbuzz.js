function myfunction(n){
    if(n%3==0 && n%5==0){
        console.log("FizzBuzz");
    }
    else if(n%3==0){
        console.log("Fizz");
    }
    else if(n%5==0){
        console.log("Buzz");
    }
    else{
        console.log(n);
    }
}

for(let i=1;i<=100;i++){
    myfunction(i);
}
