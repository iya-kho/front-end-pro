let firstName = prompt("Your first name", "Stepan");
let lastName = prompt("Your last name", "Bandera");
let yearOfBirth = prompt("Your year of birth", "1955");
Number(yearOfBirth)
const YEAR = 2022;
let age = YEAR-yearOfBirth;

console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old")

document.getElementById("userbio").innerText = "User Bio: " + firstName + " " + lastName + ", " + age + " years old"