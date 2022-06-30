/* Home */
var factList = [
  "The US has suffered over 250 mass shootings in 2022 alone. (www.washingtonpost.com)",/*0*/
  "The leading cause of the death in children is gun violence. (www.nejm.org)",/*1*/
  "An average of 70% of women are shot per month by someone with relation to them. (www.everytownresearch.org)",/*2*/
  "Around 21,000 deaths have been caused by gun violence in 2022 as of June 29th. (www.gunviolencearchive.org)"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


/* Take Action */
var helpList = [
  "Spread the news on social media!",/*0*/
  "Inform others of what's happening!",/*1*/
  "Vote in elections for people I know will spread my message!",/*2*/
  "Donate!",/*3*/
  "Sign petitions!"];/*4*/


var help = document.getElementById("help");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayHelp);

function displayHelp(){
  help.innerHTML = helpList[count];
  count++;
  if (count == helpList.length){
    count = 0;
  }
}
