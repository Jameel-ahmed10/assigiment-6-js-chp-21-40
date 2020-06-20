// ======Chapter 21 - 25===========

// ======Chapter 21 - 25===========task 1

var firstName =  prompt("Enter Your First Name");
var lastName =  prompt("Enter Your Last Name");
var fullName = firstName  +" "+ lastName;

document.write(fullName);


// ======Chapter 21 - 25=========== task 2

var mobileModel = prompt("Enter Your favorite Mobile Model");
var samsung = "Length of String : 28";
document.write( "My favorite mobile is " + mobileModel+ samsung)


// ======Chapter 21 - 25===========task 3
 var name = "Pakistani";
document.write("String : " + name+"<br>")
 document.write("Index of n :"+name.indexOf("n"))


// ======Chapter 21 - 25===========task 4

var string = "Hello World";
document.write("String : " +string +"<br>");
document.write ("Last Index of I : "+ name.indexof("l"));

// ======Chapter 21 - 25===========task 5
var name = "Pakistani";
document.write("String : " + name+"<br>")
 document.write("Index of 3 :"+name.indexOf("i"))

// ======Chapter 21 - 25=========== task 7

var city = "hyderabad";
var res = city.replaceAll('hyderabad','islamabad');
document.write("City :" + city + "<Br>") 
document.write("after Replace " + res)

// ======Chapter 21 - 25===========task 8;

var msg = "Ali and Sami are the Best Friends. They play cricket and football togethers";
var msg1= msg.replaceAll('and', '&')
document.write(msg1)


// ======Chapter 21 - 25=========== task 9

var num = "472";
var string =num.toString();
document.write("Value : " + num +"<br>");
document.write("Type : number"+"<br>");
document.write("Value : " +string+"<br>")
document.write("Type : "  +"String")



// ======Chapter 21 - 25=========== task 10

var input=prompt("Enter Your Text");
var upperCase = input.toUpperCase();
document.write("User Input :" + input +"<br>")
document.write( "UpperCase : "+upperCase)


// ======Chapter 21 - 25===========task 11

var input=prompt("Enter Your Text");

var firstChar = input.splice(0,1);
firstchar= firstChar.toUpperCase();
var otherChar = city.splice(1)
otherChar = otherChar.toLowerCase();
var input = firstChar+otherChar;
document.write(input)


// ======Chapter 21 - 25=========== task 12
var num = 35.36;
var string =num.toString();
document.write(num)


// ======Chapter 21 - 25===========task 13

var char = prompt("Please Enter your name");
var ch = char.charCodeAt(0);
for ( ch  = 0 ; ch < char.length; ch++){
    if(ch==33 || ch== 44){
        document.write("please enter a volid username .dont use '!'");
        break;
    }
    else{
        document.write('Your username is valid thanks')
    }
}

 

// ======Chapter 21 - 25===========task 15


function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Z, a-z, 0-9]/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}




// ======Chapter 21 - 25=========== task 16

var university = "University of Karachi";
var result = universiry.split(" ");
document.write(university);




// ======Chapter 21 - 25=========== task 17
var user = "Pakistan";
var result = user.charAt(7);
document.write("User Input :" + user +"<br>");
document.write("Last Character of input:" + result)




// =========chapter 26 - 30===========


// =========chapter 26 - 30=========== task 1

var number = 3.45214;
var roundOfValue = Math.floor(number);
var ceil= Math.ceil(number);
document.write("Number :"+ number + "<br>")
document.write("round of value :" +roundOfValue + "<br>")
document.write("floor Value :" + roundOfValue + "<br>")
document.write("ceil value :" + ceil)



// =========chapter 26 - 30===========task 2


var number = -2.673;
var roundOfValue = Math.floor(number);
var ceil= Math.ceil(number);
document.write("Number :"+ number + "<br>")
document.write("round of value :" +roundOfValue + "<br>")
document.write("floor Value :" + roundOfValue + "<br>")
document.write("ceil value :" + ceil)



// =========chapter 26 - 30=========== task 3


var val1= Math.abs(-4);
var val2 =Math.abs(4);
document.write(val1);
document.write(val2);



// =========chapter 26 - 30=========== task 6


var random=  Math.floor((Math.random() * 100) + 1);
document.write(random)

// =========chapter 26 - 30=========== task 7
var weight = prompt("Enter Your Age in Kilogram");


// =========chapter 26 - 30=========== task 8


var secratNo = 3;
var input = +prompt("Enter Your Number");
if(secratNo===input){
    alert("Congratulation")
}
else{
    alert("Try Again")
}


// ========Chapter 31 - 34=========
// ========Chapter 31 - 34========= task 1


var time = new Date();
document.write(time)


// ========Chapter 31 - 34========= task 2


var time = new Date()
var time1 = time.getMonth();
document.write("current month :" +time1)




// ========Chapter 31 - 34=========task 3

var day=  new Date()
var day1 = day.getDay();
document.write("Today is  " + day1)



// ========Chapter 31 - 34========= task 4

var input = prompt("Enter Day");
if(input === "sunday"){
    alert("it's fun day")
}
else if(input === "saturday"){
    alert("its fun day")
}
else{
    alert("none")
}



// ========Chapter 31 - 34=========task 5


var input = prompt("enter date");
if(input < 16){
    alert("first fifteen day of month")
}
else{
    alert("last day of the month")
}



// ========Chapter 31 - 34========= task 6

var dob = new Date("jan 1970")
var dobmili =  dob.getTime();
var today =  new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var acuage = Math.floor(diff/(1000*60*60*24*30))
document.write(accuage);


// ========Chapter 31 - 34=========task  13

var input = prompt("Enter your age");
var input2 = 2020 - input;
document.write("your age is :" + input+ "<br>")
document.write("Your birth year is : " + input2)


// ========Chapter 31 - 34========= task 14

var customerName = prompt("Enter Your Name");
var month = prompt("current month");
var number = prompt("No of unit");
var charg = prompt("charge per unit");
var netBill =number*charg;
var latePayment = 350;
var grossAmount = netBill+latePayment;
document.write("Customer Name : " +customerName +"<br>")
document.write("Month" + month  +"<br>")
document.write("Number of Unit : " + number +"<br>")
document.write("Charge Per Unit :" +charg +"<br>")
document.write("Net Amount Payable (with due Date) :"+ netBill +"<br>")
document.write("Late Payment surecharge : "+ latePayment +"<br>")
document.write("Gross amount payable (after due date) :"+ grossAmount)



// ========== chapter 35 - 38============
//========== chapter 35 - 38============ task 1

var today =  new Date();
document.write(today);


//========== chapter 35 - 38============task 2

var firstName = "jameel";
var lastName = "ahmed";
var fullName = firstName+lastName;
document.write(fullName)


//========== chapter 35 - 38============ task 3

var no1= +prompt("Enter value 1");
var no2 =+prompt("Enter value 2");
var sum = no1+no2;
document.write("sum of two value is : " + sum)


//========== chapter 35 - 38============task 4

var val1 = prompt("Enter 1st value")
var val2 = prompt("Enter 2nd value")
var sign = prompt("enter Operator")
document.write(val1 + sign + val2)
if(sign === "+"){
    alert((+val1)+(+val2));
}
else if(sign=== "-"){
    alert(val1-val2);
}
else if(sign==="*"){
    alert(val1*val2);
}
else if(sign === "/"){
    alert(val1/val2);
}



//========== chapter 35 - 38============task 5

//parameter
function one(){
  
}
//arguments
one()


//========== chapter 35 - 38============ task 6

function add(b,a){
    alert(b+a);
}
add(5,4)


//========== chapter 35 - 38============ task 7
  
var startValue = +prompt("enter start value");
var lastValue = +prompt("enter last value")
function add(a){
    for (a = startValue ; a <= lastValue ; a++ )
    document.write(a+"<br>")
}
add();

//========== chapter 35 - 38============ task 9

var width = +prompt("Enter width");
var height= +prompt("Enter height");
var area = width*height;
function area1(){
    document.write(area)
}
area1();


//========== chapter 35 - 38============ task 10

var word = prompt("Enter Your word");
var check = "";
function call(){
for (var i = word.length -1 ; i >=0 ; i--){
    check += word[i]
}
if(word === check){
    document.write(word + " is a palindrome word")
}
}
call();


//========== chapter 35 - 38============ task 11

function titleCase(word) {
    var splitStr = word.toLowerCase().split("the quick brown fox");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  document.write(splitStr)
    }
  
    return word;
  }
  titleCase();
