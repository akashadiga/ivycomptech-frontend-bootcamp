// var myName= "Akash Adiga";
// console.log(myName);
// let rollNumber=123;
// console.log(rollNumber
//     + "akash adiga");
// const officeName= "ivy";
// console.log(officeName);
// console.log(`my name is ${myName} 
// my roll number is ${rollNumber}`);

// Tech Academy  role-based access to course content
// 	Master – view/add/delete/create/update content
// 	Admin – view/create
// 	User – view/edit
// let master="delete";
// if(master=="view")
//     console.log("we are in view");
// else if(master=="add")
//     console.log("we are in add");
// else if(master=="delete")
//     console.log("we are in delete");
// else if(master=="create")
//     console.log("we are in delete");
// else if(master=="update")
//     console.log("we are in update");

// let Admin="create"
// switch(Admin){
//     case 'view':
//         console.log("we are in admin");
//         break;
//     case 'create':
//         console.log("we are in create");
// }

// Tech Academy
// Before a user makes a purchase check,
// o	Logged-in
// o	Email is verified
// o	Card Info is valid
// o	If any of these are missing, Stop purchasing

//     let loggedin: true;
//     let isEmailVerified: true;
//     let isCardValid: true;
// (loggedin==true &&isEmailVerified==true && isCardValid==true)?console.log("purchase processed"):console.log("purchase processed");


//Allow the user to access the course if he is logged in through Google/GitHub
// let loginThrough="google";
// if(loginThrough=="google"|| loginThrough=="github")
//     console.log("Allowing the user to access the course");
// else
// console.log("Not allowing the user to access the course");



//Let’s display the ‘logout’ button if a user is authenticated otherwise display 
// var isAuthenticated=true;
// (isAuthenticated)?console.log("they are logged out"):console.log("they are not logged out");


// 1. Return the number of vowels in a string
// Create a function that'll return an integer of the number of vowels found in a string.



// function numberOfVowels(text){
//     let count=0;
//     for(let letter of text){
//         let lower=letter.toLowerCase();
//         if(lower=="a"|| lower=="e"|| lower=="i"|| lower=="o"|| lower=="u")
//             count++;
//     }
//     console.log(count);
// }

// numberOfVowels("aeiou");



//2. Create a function that receives an array of numbers and returns an array containing only the positive numbers


// function positiveNumbers(numberArray){
//    numberArray.filter(number=>number>=0);
//    return numberArray;
// }

// let array1=[1, 2 ,3 -1];
// console.log( positiveNumbers(array1));






//Create a function that converts a string to an array of characters



// function toCharacterArray(text){
//     let result=[];
//     let index=0;
//     for(letter of text){
//         result[index++]=letter;
//     }
//     return result;
// }



// console.log(toCharacterArray("akash"));










// Most programmers will tell you that one of the ways to improve your performance in competitive 
// programming is to practice a lot of problems.

// Sam took the above advice very seriously and decided to set a target for himself.

// He decides to solve at least 10 problems every week for 4 weeks.
// Given the number of problems he actually solved in each week over 4 weeks as P_1, P_2, P_3,P_4

// output the number of weeks in which Sam met his target.

// Input Format:
// There is a single line of input, with 4 integers P_1, P_2, P_3,P_4. These are the number of problems 
// solved by Sam in each of the 4 weeks.

// Output Format:
// Output a single integer in a single line - the number of weeks in which Sam solved at least 10 problems.

// Sample 1:
// Input
// 12 15 8 10

// function moreThanTenSolvedWeek(first, second, third, fourth){
//     let result=0;
//     if(first>=10)
//         result++;
//     if(second>=10)
//         result++;
//     if(third>=10)
//         result++;
//     if(fourth>=10)
//         result++;
//     return result;
// }


// console.log(moreThanTenSolvedWeek(10, 11,2 ,5));






// function shoot(numberArray){
//        console.log(numberArray.filter(number=> number>numberArray[1]).length-1);
// }

// let arr=[2, 13, 4, 16];
// shoot(arr);





































