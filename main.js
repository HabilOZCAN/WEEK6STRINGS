/**
 *In this work implemented basic strign operations 
 * habilozcan@gmail.com
 */
//first letter uppercase
function uppercaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var output = "";
let str = prompt("insert string here");
str = str.split(' ').forEach(item => output += uppercaseFirstLetter(item) + ' ');
alert(output);

//1-100 numbers in 10x10 matrix
let string = '';
for (let index = 1; index <= 100;) {
    for (let jndex = 0; jndex < 10; jndex++) {
        string += index + ",  ";
        index++;
    }
    string += "\n";
}
alert(string);

//1-100 prime number 
let primeNumbers = [];
primeNumbers.push(2);
primeNumbers.push(3);
let index = 5;
let counter;
for ( ; index < 100; index += 2) {
    counter = 0;
    for ( let jndex = 3 ; jndex < Math.ceil(Math.sqrt(index)); jndex +=2 ) {
       if (index % jndex == 0) {
            counter ++;
            break;
        }
    }
    if(counter == 0){
    primeNumbers.push(index);
    }
}
//it is writen in console =) 
string = ' ';
primeNumbers.forEach(function (item) {
    string += item+', ';
});
alert("1-100 prime numbers are -->  "+string);

//PASSWORDS =) 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let generatedPasswordList = new Array(50);
const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~';

//outside for loop is for generatedPasswordList to fill;
for (let indexForPasswordList = 0; indexForPasswordList < 50; indexForPasswordList++){
   //inside for loop runs for production of unique password with randomly selected length between 8-16
    let passwordLength = getRandomInt(9)+8;//passwordLength will be 8-16 charactes lengths
    tempPassword='';
    for (let justCounter = 0; justCounter < passwordLength; justCounter++) {
        const index = Math.floor(Math.random() * validChars.length);
        tempPassword += validChars[index];
    }
    generatedPasswordList[indexForPasswordList]= tempPassword;
}

string = '';
for (index = 0; index < 50; index ++){
    string += generatedPasswordList[index]+"\n";
}
alert("these are the generated passpords --->\n"+ string );

//STARS 
string = '';
for(let index = 0; index < 6; index ++){
    for (let jndex = 0; jndex <= index; jndex ++ ){
        string +="*";
    }
    string += '\n';
}
alert("and finally these are our stars ----> \n"+ string);