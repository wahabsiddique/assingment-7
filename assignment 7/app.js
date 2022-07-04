// Q-1

var firstNanme = prompt("Enter your first Name");
var lastName = prompt("Enter your last Name");

var fullName = "Good Day!" +" "+ firstNanme +" "+ lastName;

alert(fullName);


// Q-2

var model = prompt("Enter your favorite mobile phone model");

document.write("My favorite phone is :" +" "+ model +"</br>")

document.write("Length of String is:" +" "+ model.length)



//Q-3 
var text = "Pakistani";
var result = text.indexOf("n");

document.write("String:"+" "+text+"</br>");
document.write("Index of 'n' is:"+" "+ result+"</br>");



// Q-4
var user = "Hello World";
var lstindex = user.lastIndexOf("l");

document.write("String:"+" "+user+"</br>");
document.write("Index of 'l' is:"+" "+ lstindex+"</br>");


// Q-5
var input = "Pakistani"
var thirdInd = input[3];

document.write("String:"+" "+input+"</br>");
document.write("Character at 3rd index:"+" "+ thirdInd+"</br>");




// Q-6

var fullName = "Good Day!" +" "+ firstNanme.concat(" ",lastName);

alert(fullName);


// Q-7
var city = "Hyderabad";
var newCity = "";

for(var i =0; i<city.length; i++){
    if(city.slice(i,i + 5) === "Hyder"){
        newCity += city.slice(0,i) + "Islam" + city.slice(i+5);
    }  
}
document.write("City:"+" "+city+"</br>")
document.write("After Replacemnt:"+" "+newCity)
console.log(newCity);



// Q-8
var message = "Ali and Sami are best friends. They play cricket and football together";
var newMessage = "";

for(var i = 0; i < message.length; i++){
    if(message.slice(i,i+3) === "and"){
        newMessage += message.slice(0,i) + "&" + message.slice(i+3);
    }
}
document.write("</br>"+newMessage)


// Q-9

var value = "472";
var num = "";
num += value;

document.write("</br>"+"Value:"+" "+value+"</br>"+"Type: String")
document.write("</br>"+"Value:"+" "+num+"</br>"+"Type: Number")



// Q-10
var puts = "peanuts";

var newPuts = puts.toUpperCase();
document.write("</br>"+"User input:"+" "+puts)
document.write("</br>"+"Upper Case:"+" "+newPuts)


// Q-11
var user = prompt("Enter Any Word In Small Letters: ");
for (i=0;i<user.length;i++){
    var Fuser = user.charAt(0).toUpperCase();
    var result = Fuser+user.charAt(i+1)};





// Q-12
var numb = 35.36;
var without = numb.toString().replace(".", "");
document.write("<br>"+"Number:"+" "+numb)
document.write("<br>"+"Result"+" "+without)



// Q-13

var usrName = prompt("Enter your Name");
var a = ["!",".",",","@"]


for(var i=0; i<usrName.length; i++){
    if(a.indexOf(usrName[i]) !== -1){
        alert("Your Name is not Valid")
    }
    else{
        alert("Your Name is valid")
    }
}





// Q-14
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to Bakery. What do you want to order sir/ma'am?");
if (order === array[0]){
    document.write(order + " is available at index " + 0, "<br>")
}

else if (order === array[1]){
    document.write(order + " is available at index " + 1, "<br>")
}
else if (order === array[2]){
    document.write(order + " is available at index " + 2, "<br>")
}
else if (order === array[3]){
    document.write(order + " is available at index " + 3, "<br>")
}
else if (order === array[4]){
    document.write(order + " is available at index " + 4, "<br>")
}
else {
    alert("This is not available yet");
}


// Q-15

var pass = prompt("Enter your password");
var a = [
"A","B","C","D","E","F","I","J","G","H","K","L","O","P","M","N","Q","R","S","T","U","V","W","X","Y","Z",
];
var b = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var isNumber = false;
var isAlpha = false;
var isInvalid = false;

if (c.indexOf(pass[0]) !== -1) {
    alert("Number is not allowed on index 0")
}
else if(pass.length < 6){
    alert("Password should be at leasat 6")
}
 else {
  for(var i = 0; i < pass.length; i++){
      if(a.indexOf(pass[i]) !== -1){
        isAlpha = true
      }else if(b.indexOf(pass[i]) !== -1){
        isAlpha = true
      }else if(c.indexOf(pass[i]) !== -1){
        isNumber = true
      }else{
        isInvalid = true
      }
  }
  if(isAlpha && isNumber && !isInvalid){
    alert("Correct password")
  }else{
    alert("Password is Wrong / Special charactors are not allowed")
  }
}


// Q-16

var uni = "University Of Karachi";
var uni1 = uni.split("").join("\n");
console.log(uni1);

// Q-17
var user = prompt("Enter Your Name:");

console.log(user.charAt(user.length-1));