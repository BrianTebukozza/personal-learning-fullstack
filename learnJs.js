//concatenation

/*let father = "Brian";
let mother = "Carol";
let baby = "Brinte";
//let family1, family2, family3;

//method 1
//family1 = father + " " + mother + " " + baby;


//method 2
//family2 = father.concat(" ", mother, " ",baby, ".");

//method 3
//family3 = `${father} ${mother} ${baby}.`;



//console.log(family1, family2, family3);


console.log("name" + " " + "baby");
console.log(`the family name is ${father} ${mother} ${baby}`);
console.log(father.concat(" "+"is" + " " +"the" + " "+ "father"));

*/
/*
//properties
let desc = "Space";
console.log(desc.length);

//methods
console.log(desc);
console.log(desc.trim());
console.log(desc.toUpperCase().trim());
console.log(desc.startsWith('S'));
*/

//objects and methods
//console.log(Math.random()*230);

//console.log(Math.floor(Math.random()*200));

//console.log(Math.ceil(1.55));

/*let w = 1;
//w = w + 8;
w += 6
console.log(w);


let y = 4;
y /= 2;
console.log(y);

let k = 9;
k *= 3;
console.log(k);

let j = 12;
j -= 3;
console.log(j);*/


/*
//string concatenation
let car = 'audi';
console.log('i drive an' + ' '+ car + '.' );

//string interpolation
let music = 'RnB';
console.log(`I play alot ${music} songs`);

let drive = 'toyota';
let speed = '100km/hr';
let city = 'Ntungamo';

console.log(`I drive a ${drive} at ${speed} while travelling to ${city}.`);*/


/*//checking typeof
let money = 100;
console.log(typeof money);

let print = 'canvas';
console.log(typeof print);

let kettle;
console.log(kettle);*/

/*//Condtionals
let cash = 781;
if (cash < 100) {
    console.log('you cant buy');
} else {
    console.log('take your car home');
    
};
*/


/*//logical operators
let stopLight = 'orange';
let pedestrian = true;
if (stopLight === 'green' && pedestrian === true){
console.log('please go');

} else {
console.log('dont cross')
}*/

/*let stopLight = 'orange';
let pedestrian = true;
if (stopLight === 'green' || pedestrian === false){
console.log('please go');

} else {
console.log('dont cross')
}
*/


/*//truthy or falsy
let volts = 0;
if(volts){
console.log('machine on');
} else {
console.log('machine off');
}

let machine;
if (machine){
console.log('other brands available too');

} else {
console.log('no other brands');

}*/


//truthy or flasy assignments
/*let yakaUnits = '';
let lightOn = yakaUnits || 'please pay your yaka';
console.log(lightOn);*/

/*let userName = 'William';
let dashboardTitle = userName || 'Guest';

console.log(`Hello ${dashboardTitle} welcome to my website`);
*/


//ternary operators
/*let unitsOn = '';
if (unitsOn){
console.log('put the lights on');

} else {
    console.log('Buy some tokens');
    
}

let unitsOn = 9;
unitsOn ? console.log('put the lights on') : console.log('buy some tokens');
;*/

/*//else if statements
//this is executed after the if and before the else. if/ else if/ else

let yakaUnits;
if(yakaUnits < 100){
console.log('buy more yaka tokens');

}else if (yakaUnits === 100) {
console.log('be alert anytime');

}else if (yakaUnits > 100) {
    console.log('you are safe');
    
} else {
    console.log('Call Umeme');
    
}
*/


/*//switch statements
let glasses = 'green';
switch (glasses) {
    case 'yellow':
        console.log('NRM day');
        break;
    case 'green':
        console.log('DP day');
        break;
    case 'black':
        console.log('funeral wear');
        break;
    default:
        console.log('look for another shade');
        break;
}
*/


/*//functions
function nextTime() {
    console.log('Come early tomorrow'); 
}
nextTime();
*/

/*function supplier(buyer){
    console.log(`Hello ${buyer} we shall give you a discount of 20%`);
    
}

supplier('Kelly');*/


/*//return on a function
function noOfDesks(rows, columns, area){
return rows + columns * area;
}
const Desks = noOfDesks(5, 8, 9);
console.log(Desks);*/

/*function favNum(num){
return num;
}
let myNum = favNum(9);
console.log(`my favourite number is ${myNum}`);*/


/*//default parameters
function favFood(response) {
    if (response === undefined) {
        console.log('please provide your fav food');
    } else {
        console.log(`my fav is ${response}`);
    }
}
favFood();*/

/*//function expressions
function colours() {
    console.log('red');
    console.log('green');
    console.log('blue');
}
colours();

let myColours = function () {
    console.log('red');
    console.log('green');
    console.log('blue');
}
myColours();
let allColours = myColours;
allColours();*/

/*//arrays
const hobbies = ['football', 'coding', 3, true];
hobbies[2] = 'allowed'
hobbies.push('paddling', 'kicking');
let lastHobby = hobbies.pop();
console.log(hobbies);
console.log(lastHobby);*/


/*const movie = 'lengends of the hidden city';
movie[0] = 'j'
console.log(movie);

let className = 'three';

console.log(className.length);*/


/*let countries = ['Uganda', 'Kenya', 'TZ'];

countries.length = 5;
console.log(countries);*/




/*let colors = ['blue', 'white', 'green', ['black', 'grey', 'cream']];
console.log(colors[3][2]);*/
//join takes an array and turns it into a string
//split takes a string and turns it into an array.

let rivers = ['nile', 'vict', 'huge'];


console.log(rivers.join(', '));
console.log(rivers.join('|'));


let lakes = "mburo, lilo, kell";
let waterLakes = lakes.split(', ');
console.log(waterLakes);








