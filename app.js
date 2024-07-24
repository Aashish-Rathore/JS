//Conditional Statements-->

// let color="green";
// //Traffic light
// if(color== "red"){
//     console.log("stop!");
// }
// else if(color=="yellow"){
//     console.log("slow down!");
// }
// else if(color=="green"){
//     console.log("Go...")
// }

// ..............................................

//Nesting if-else-->

// let marks=25
// if(marks>33){
//     console.log("Pass")
//     if (marks>=80){
//         console.log("S grade");
//     }
//     else{
//         console.log("A grade")
//     }
// }
// else{
//     console.log("Better luck next time !")
// }


// ...................................................

// Practice Que
//Q."good string " is a string which starts with 'a'and has length>3.
// let string="apple";

// if(string[0]==='a' && string.length>3){
//     console.log("it's good string")
// }
// else{
//     console.log("not a good string")
// }

// .......................................................

//Switch Statement-->
// let day=7;
// switch(day){
//     case 1:
//      console.log("mon");
//      break;
//     case 2:
//       console.log("tue");
//        break;
//     case 3:
//      console.log("wed");
//         break;
//      case 4:
//         console.log("thus");
//          break;
//      case 5:
//         console.log("fri");
//          break;
//      case 6:
//         console.log("sat");
//          break;
//      case 7:
//         console.log("Sun");
//         break;
//     default:
//         console.log("wrong no. entered!!")
// }

// ....................................................




//alert & prompt-->

// alert("Danger!!");
// console.log("this is a simple log");
// console.error("this is an error msg");
// console.warn("this is warning message");

// let firstName= prompt("enter your name: ");   
// let lastName=  prompt("enter your last name") 
// let msg= "welcome "+firstName+" "+lastName+"!";
// alert(msg);


// ........................................................





//String Methods-->

// let str = "hello! js ";
// str.toUpperCase();
// str.toLowerCase();
// str.trim();
// str.slice();
// str.replace("hello","something")
//str.repeat();
// console.log(str.repeat(2));

// practice Qs
// let msg = "help!";
// console.log(msg.trim().toUpperCase());  //method chaining


// ..............................................................




//Arrays-->
// let info =["aashish","21","83.3","bhopal"];
// info[3]="indore";
// console.log(info);

// Arraymethods
// let cars=["audi","hyundai","tata","xuv"];
// cars.push("toyota");               //push to end 
// cars.pop();                       //bydefault it removes from end
// cars.unshift("bmw");              //adds to start
// cars.shift();                     //delete from start
// cars.splice(0,1,"maruti","volvo") //start,delete,add elements and indexes
// cars.reverse();
// cars.sort();                     //only implements on string and characters
// console.log(cars)

//Pract Qs
// 1 
// let arr=[['x',null,'0'],[null,'x',null],['0',null,'x']];
// arr[0];
// arr[0][1]='0';
// console.log(arr);

//2
// arr=[7,9,0,-2];
// n=3;
// console.log(arr.splice(0,n));

// 3
// arr=[7,9,0,-2];
// n=3
// console.log(arr.splice(1,n))

//4
// let string=prompt("enter the string");
// if(string.length==0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
    
// }

//5
// let str="javascript";
// let idx=3;

// if(str[idx]==str[idx].toLowerCase()){
//     console.log("its in lowercase");
// }else{
//     console.log("it's not");
// }
// 

// 6
// let arr=["hello",'a',45,18,7];
// let item = 45;

// if(arr.indexOf(item)!= 1){
//     console.log("element exists");
// }
// else{
//     console.log("element not exists");
// }



// .........................................................




// Loops-->
// for(i=1;i<=15;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }


// let n= prompt("write your no.")
//  n=parseInt(n);
// for(let i=1;i<=10;i++){
  
//     console.log(n*i);
// }





// let movie="zindagi na milegi dobara";
// let guess=prompt("guess my fav movie:")
// while((guess!= movie ) && (guess!="quit")){
    
//     console.log("wrong guess");
//     guess=prompt("enter movie name again:");
// }





//for of loop->
// let fruits = ["mango","apple","banana","litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "VITBHOPAL"){
//     console.log(char)
// }

//nested for of loop->

// let heroes = [["superman","batman","iron-man"],["HANUMAN"]];
// for(lists of heroes){
//     for(list of lists){
//         console.log(list);
//     }
// }
// ...........................................................



//Todo app->
// let todo = [];
// let req=prompt("enter the task : ")
//  while(true){
//     if(req=="quit"){
//         console.log("Quitting the app")
//         break;
//     }

//     if(req == "list"){
//         console.log("--------------");
//         for(let i=0;i<todo.length ;i++){
//             console.log(task);
//         }
//         console.log("--------------");
//     }
//     else if(req=="add"){
//       let task=  prompt("please enter the task you want to add");
//       todo.push(task);
//       console.log("task added");
//     }

//      let req=prompt("enter the task : ")

    // else if(req=="delete"){

    // }
// }



//practice Ques
// 1
// let arr=[1,2,3,4,5,6,2,3]
// let num=2;
// for(let i=0;i<arr.length ;i++){
//     if(arr.indexOf(num)==2){
//         arr.splice(num,2);
//         console.log(arr);
//     }
    
// }

//2
// let num=231245;
// let count=0;
// let copy = num;

// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
   
// }
// console.log(count);


//3
// let n=287152;
// let sum=0;
// let copy=n;
// while(copy>0){
//     ld=copy%10;
//     sum+=ld;
//     copy=Math.floor(n/10);
// }
// console.log(sum);

// ...............................................................



// Js object literals-->
// const item = {
//         price:100.99,
//         discount:50,
//         colors : ["red","pink"],
// }

// const instaPost = {
//     username: "aashishr13",
//     content: "post",
//     likes:100,
//     reposts:10,
//     tags: "#champ!",
// }



// ...................................................................


//Generate Random Integer-->
// let num = Math.random();

// num=num*10;

// num=Math.floor(num);

// num=num+1;                  //to include 10 also 

// console.log(num);

// let random= Math.floor(Math.random()*10)+21;      //shortform of above code
// console.log(random);





// const max=prompt("enter the number");
// // console.log(max);
// const  num = Math.floor(Math.random()*user)+1;
// let guess = prompt("guess the number");

// while(true){
//     if(guess == "quit"){
//     console.log("user quit!");
//     break;
//    }

//    if(guess == random){
//     console.log("you are right!");
//     break;
//    }else{
//     guess= prompt("your guess was wrong!");
//    }
// }


// Practice Ques-->
// 1
// let num =Math.floor(Math.random()*6)+1;
// console.log(num);

//2
// const car ={
//     name: "Toyoto",
//     model: 1920,
//     color: "silver",
// }
// console.log(car.name);


// 3
// const person = {
//     name: "Tony Stark",
//     age:"50",
//     city:"USA",
// }
// person.city ="New York";
// person.country="United states";

// console.log(person);



// .................................................................





// Functions-->

// function PrintPoem(){
//     console.log("Twinkle Twinkle, little star",
//                  "how i wonder what you are");
// }
// PrintPoem();
// PrintPoem();
// PrintPoem();


//Pract Ques
// function rolldice(){
//     let num=Math.floor(Math.random()*6)+1;
//     console.log(num);
// }

// rolldice();


// 1
// function largestNum(){
//     let arr=[2,4,5,6,7,8,9];
//     let largest = 0;
//     for(let i=0 ; i<arr.length;i++){
//         if(largest < arr[i]){
//             largest = arr[i];
//         }
//     }
//     console.log(largest);
// }

// largestNum();


// 2

// ................................................................


// Arrow Function-->
// implicit return-

// const mul = (a,b) => a*b;



// set TImeout->
// console.log("hi there!");
// setTimeout(()=>{
//    console.log("Javascript")
// },2000)                       //milisecond so its 2 second!
// console.log("Welcome to")


// Practice Question-
// 1
// const sqrt =(n)=>(n*n);

// 2
// let id=setInterval(()=>{
//         console.log("hello! Champion!");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear interval ran...");
// },10000)


// 3
// const arrayAvg=(num)=>{
    
// };

// 4
// const isEven =(n)=>(n%2==0);






// .....................................................................


// Array Methods->
// Pract Ques
// 1
// let arr=[10,20,30,5];
// let ans =arr.every((el)=>(el%10==0));
// console.log(ans);
 
// 2
// function getMin(nums){
//     let nums=[10,20,30,40];
//     let min=nums.reduce((min,el) => {
//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// });

// return min;
// }

// let nums = [10,20,30,40,5];





// ...................................................................


// Destructuring-->
// let names=["tony","bruce","peter","steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// let [winner , runnerup, ...others] = names;



// ..................................................................



// Destructuring objects-->
// const student = {
//     names: "karan",
//     age: 14,
//     class: 9,
//     subjects: ["hindi","english","math","science"],
//     username: "karan@123",
//     password: "abcd",
//     city :"pune",
// }

// let {username: user, password: secret, city="mumbai"}= student;




// .Pract Ques-->
// 1
// let nums =[2,3,5,8,9];
// const square = nums.map((num)=> num*num);
// console.log(square);

// let sum =square.reduce((acc,cur)=>acc+cur,0);

// let avg =sum/nums.length;
// console.log(avg);





// ........................................................................


// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h1 = document.querySelector("h1");
//     let randomColor = getRandomColor();
//     h1.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("colors updated")
// });

// function getRandomColor(){
//   let red = Math.floor(Math.random()*255);
//   let green = Math.floor(Math.random()*255);
//   let blue = Math.floor(Math.random()*255);

//   let color = `rgb(${red}, ${green} ,${blue})`;
//   return color;
// }


// ..........................................................................



let btn = document.querySelector("button");
btn.addEventListener("click",function(){
this.style.backgroundColor="yellow";
});

