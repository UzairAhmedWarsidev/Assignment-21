
// MATH EXPRESSION

//POINT 1

var num1 = 3
var num2 = 5

document.write("sum of"+ " "+ num1 +" " +"and" + " " +num2+ " "+ "is"+ " "+ (num1+num2))

document.write(" <br>subtract of"+ " "+ num1 +" " +"and" + " " +num2+ " "+ "is"+ " "+ (num1-num2))

document.write(" <br>division of"+ " "+ num1 +" " +"and" + " " +num2+ " "+ "is"+ " "+ (num1/num2))

document.write(" <br>modulus of"+ " "+ num1 +" " +"and" + " " +num2+ " "+ "is"+ " "+ (num1%num2))

// POINT 2

var num3 

document.write("<br><br>Value after variable decleration is :" + num3 + "<br>")


num3 = 20

document.write("<br>Initial vale of num3 is:" + num3)

document.write("<br>increment the num3:" + "  " + ++num3)

document.write("<br>Value after increment is " + ++num3)

document.write("<br>" + (num3+7))


document.write("<br>Value after addition is " + num3)

--num3


document.write("<br>Value after decrement is: " + num3)

document.write("<br><br>remainder " + (num3/3))

// Point 4 

var ticket = 600

document.write("<br><br>Total cost to buy 5 tickets to a movie is " + (ticket*5) + "PKR  <br><br>")

// Point 5

var table = 5

document.write(table + " x 1 =" + " " + table + "<br>" + 
table + " x 2 =" + " " + (table*2) + "<br>" +
table + " x 3 =" + " " + (table*3) + "<br>" +
table + " x 4 =" + " " + (table*4) + "<br>" +
table + " x 5 =" + " " + (table*5) + "<br>" +
table + " x 6 =" + " " + (table*6) + "<br>" +
table + " x 7 =" + " " + (table*7) + "<br>" +
table + " x 8 =" + " " + (table*8) + "<br>" +
table + " x 9 =" + " " + (table*9) + "<br>" +
table + " x 10 =" + " " + (table*10) + "<br>")


// Point 6


// Store a Celsius temperature into a variable
let celsius = 25; 

// Convert it to Fahrenheit & output “NN°C is NN°F”
let fahrenheit = (celsius * 9/5) + 32;
document.write("<br>"+`${celsius}°C is ${fahrenheit}°F`+"<br>");

// Now store a Fahrenheit temperature into a variable
fahrenheit = 77;

// Convert it to Celsius & output “NN°F is NN°C”
celsius = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);


// Point 7

var item1 = 650
var item2 = 100

var shippingChar = 100


document.write("<h1> Shopping Cart</h1> <br><br><br>")

document.write("Price of item 1 is " + item1 + "<br> Quantity of item 1 is 3 <br> Price of item 2 is " + item2 + "<br> Quantity of item 2 is 7 <br> Shipping Charges is " + shippingChar + "<br><br> Total cost of your order is " + ((item1*3) + (item2*7)+ shippingChar)  )


// Point 8

var totalMarks = 980

document.write("<br><br><br>Total Marks: 980 <br>Marks obtained: 804" + "<br> Percentage:  "+(804/totalMarks*100))


// Point 9

var usDollar = 104.80
var riyal = 28

document.write("<br><br> <br>Total currency in PKR: " + (10*usDollar + 25*riyal))


// Point 10

var oneNumber = 1

document.write("<br><br><br> Calculations " + (oneNumber+5*10/2) )


// Point 11

var currentYear = 2024
var birthYear = 1992

document.write("<br><br><br> <h1>Age Calculator</h1><br><br>")

document.write("Current Year: 2024 <br> Birth Year: 1992 <br> Your Age" + (currentYear-birthYear))