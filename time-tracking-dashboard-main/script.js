/*
Buttons
*/
const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')
/*
Listen for button and do function
*/
daily.addEventListener("click", dailyclick);
weekly.addEventListener("click", weeklyclick);
monthly.addEventListener("click", monthlyclick);
/*
Button functions
*/
function dailyclick(){
    daily.classList.add('selected');
    weekly.classList.remove('selected');
    monthly.classList.remove('selected');
    swapdailyFNC();
}
function weeklyclick(){
    daily.classList.remove('selected');
    weekly.classList.add('selected');
    monthly.classList.remove('selected');
    swapweeklyFNC();  
}
function monthlyclick(){
    daily.classList.remove('selected');
    weekly.classList.remove('selected');
    monthly.classList.add('selected');
    swapmonthlyFNC();
}
/*
Selector for all info swap
*/
const swapdaily = document.querySelectorAll('.swapdaily');
const swapweekly = document.querySelectorAll('.swapweekly');
const swapmonthly = document.querySelectorAll('.swapmonthly');

const apearinput = "display:flex;";
const awayinput = "display:none";

function swapdailyFNC(){
    infiniti(swapdaily,apearinput);
    infiniti(swapweekly,awayinput);
    infiniti(swapmonthly,awayinput);
}
function swapweeklyFNC(){
    infiniti(swapweekly,apearinput);
    infiniti(swapdaily,awayinput);
    infiniti(swapmonthly,awayinput);
}
function swapmonthlyFNC(){
    infiniti(swapmonthly,apearinput);
    infiniti(swapweekly,awayinput);
    infiniti(swapdaily,awayinput);
}
/*
Loop though quearies
*/
function infiniti(querypass,cssText){
    for (let i = 0; i < querypass.length; i++) {
        querypass[i].style.cssText = cssText;
      }
}