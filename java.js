let x,n,sum;
n=parseInt(prompt("Enter even number for sum from 1:"));
sum=0;
if(n%2==0)
{
for(x=2;x<=n;x=x+2)
{
    sum=sum +x;
}
console.log(sum);
}
else{
    console.log("please Enter even number")
}