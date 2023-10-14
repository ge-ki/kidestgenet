/*for(i = 1; i=10; i++){
    console.log("Hello");
}*/
/*prints all studentGrade arrays(values*/
/*var studentGrades = [12,14,17,23,45,44];
var pass = 50;
for(i=0; i< studentGrades.length; i++){
    console.log(studentGrades[i]);
}

for(i =0; i<=6; i++){
    console.log(studentGrades[i]);
}*/
/*while loop works until the while condition false*/
/*var f=0;
while(f<3){
    console.log(f);
    f++;
}*/

/*create a function that takes a number as an argument. Add up all the numbers from 1 until the number you passed to the function
eg:-If the input is 4 then your function should return 10 because 1+2+3+4=10
pseudo code
skip the checking part to focus on the logic
-Declare a function that takes a single argument
-Check if the passed argument is  a number
     -if not, return"please pass a number*
     -Declare a variable to save the total sum.(initially 0)
     -Use for loop that starts from 1 and ends at the given number.*/
function takenum(num){
    if(typeof num !== "number"){
        return"Please enter a number value";
    }
    else if(num<0){
        return "Please enter number greater than 0";
    }
    else{
        var sum=0;
        for(i=1; i<=num; i++){
            var sum=sum+i;
             
    }
    return sum;
}
}

var add = takenum(4);
console.log(add);