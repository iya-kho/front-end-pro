const firstName = prompt("Your first name", "Stepan");
const lastName = prompt("Your last name", "Bandera");
const yearOfBirth = prompt("Your year of birth", "1955");
const YEAR = 2022;
let age = YEAR-Number(yearOfBirth);
const monthOfBirth = prompt("Your month of birth", "1");
const dayOfBirth = prompt("Your day of birth", "1");

if (Number(monthOfBirth) === 1 && Number(dayOfBirth) >= 20 || Number(monthOfBirth) === 2 && Number(dayOfBirth) <= 18){
    zodiac = "Aquarius ♒";
} else if (Number(monthOfBirth) === 2 && Number(dayOfBirth) >= 19 || Number(monthOfBirth) === 3 && Number(dayOfBirth) <= 20) {
    zodiac = "Pisces ♓";
} else if (Number(monthOfBirth) === 3 && Number(dayOfBirth) >= 21 || Number(monthOfBirth) === 4 && Number(dayOfBirth) <= 19) {
    zodiac = "Aries ♈";
} else if (Number(monthOfBirth) === 4 && Number(dayOfBirth) >= 20 || Number(monthOfBirth) === 5 && Number(dayOfBirth) <= 20) {
    zodiac = "Taurus ♉";
} else if (Number(monthOfBirth) === 5 && Number(dayOfBirth) >= 21 || Number(monthOfBirth) === 6 && Number(dayOfBirth) <= 20) {
    zodiac = "Gemini ♊";
} else if (Number(monthOfBirth) === 6 && Number(dayOfBirth) >= 21 || Number(monthOfBirth) === 7 && Number(dayOfBirth) <= 22) {
    zodiac = "Cancer ♋";
} else if (Number(monthOfBirth) === 7 && Number(dayOfBirth) >= 23 || Number(monthOfBirth) === 8 && Number(dayOfBirth) <= 22) {
    zodiac = "Leo ♌";
} else if (Number(monthOfBirth) === 8 && Number(dayOfBirth) >= 23 || Number(monthOfBirth) === 9 && Number(dayOfBirth) <= 22) {
    zodiac = "Virgo ♍";
} else if (Number(monthOfBirth) === 9 && Number(dayOfBirth) >= 23 || Number(monthOfBirth) === 10 && Number(dayOfBirth) <= 22) {
    zodiac = "Libra ♎";
} else if (Number(monthOfBirth) === 10 && Number(dayOfBirth) >= 23 || Number(monthOfBirth) === 11 && Number(dayOfBirth) <= 21) {
    zodiac = "Scorpio ♏";
} else if (Number(monthOfBirth) === 11 && Number(dayOfBirth) >= 22 || Number(monthOfBirth) === 12 && Number(dayOfBirth) <= 21) {
    zodiac = "Sagittarius ♐";
} else {
    zodiac = "Capricorn ♑";
}

if (Number(yearOfBirth) % 400 === 0 || (Number(yearOfBirth) % 100 != 0 && Number(yearOfBirth) % 4 === 0)) {
    isLeap = true;
} else {
    isLeap = false;
}

console.log(isLeap)

if (isLeap === true) {
    document.getElementById("userbio").innerText = "User Bio: " + firstName + " " + lastName + ", " + age + " years old (leap year), " + zodiac
} else {
    document.getElementById("userbio").innerText = "User Bio: " + firstName + " " + lastName + ", " + age + " years old, " + zodiac
}