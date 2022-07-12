const firstName = prompt("Your first name", "Stepan");
const lastName = prompt("Your last name", "Bandera");
const yearOfBirth = prompt("Your year of birth", "1955");
const YEAR = 2022;
let age = YEAR-Number(yearOfBirth);

console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old")

document.getElementById("userbio").innerText = "User Bio: " + firstName + " " + lastName + ", " + age + " years old"