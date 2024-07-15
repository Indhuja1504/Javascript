let a="mod";

function myfunction(a){
    let c=a.split('').reverse().join('');
if(a==c)
{
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}
}

myfunction(a);
