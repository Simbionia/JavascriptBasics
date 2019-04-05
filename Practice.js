/*for (i = 44; i < 67; i++) {console.log(i);}*/
console.log("hello");
console.log(18);
console.log("nice to meet you".length);
console.log(true);
console.log(false);
console.log("HELLO".toLowerCase());
console.log("hello   ".trim());
console.log(Math.floor(Math.random() *10));
console.log("hello".replace("hello", "hi"));
for(i=0 ; i<2;i++)
{
for(j=0; j<3;j++)
console.log("-----------")
console.log("   |    |  ")
}
console.log("hello".search("ll"))
console.log("hello".lastIndexOf("h"))
console.log("hello".slice(0, 3))
console.log("hello".substring(1, 3))
console.log("hello".substr(1, 4))
console.log("hello".concat(" world"))

console.log("All Around the World".substring(7,8).toUpperCase())
console.log("All Around the world".trim().substring(7,8).toUpperCase())






/*let num1 = 4
let num2 = 6
let total = num1+num2
if (total % 2 == 0)console.log(num1 + num2)
else console.log(num1 * num2)

let num = "1001"
let items = num.split("")
let isPalindrome = items.join("") === items.reverse().join("")
if (isPalindrome){console.log("number is palindrome")}

/*var longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
var vowels = "aeiou";

for(var i = longString.length - 1; i > 0; i--)
{
    if(vowels.indexOf(longString.toLowerCase().charAt(i)) >= 0)
    {
        console.log("The last vowel is: " + longString.charAt(i) + " at position: " + i);
        break;
    }*/
/*let space1 = "x";
let space2 = "x";
let space3 = "x";
let space4 = " ";
let space5 = "o";
let space6 = " ";
let space7 = " ";
let space8 = "o";
let space9 = " ";*/

   
/*console.log(` ${space1} | ${space2} | ${space3} `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`-----------`);
console.log(`   |   |  `);
console.log(`   |   |  `);
console.log(`   |   |  `);
console.log(`-----------`);
console.log(`   |   |  `);
console.log(`   |   |  `);
console.log(`   |   |  `);*/
    
/*if(space1 == "x" && space2 == "x" && space3 == "x" )console.log("X win!")
else if (space1 == "o" && space2 == "o" && space3 == "o")console.log("O win!")
else {console.log("No winner yet")}*/

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if(coffeeIsGrinding){
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("starting the grind");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();
pressGrindBeans();

const order = (size, typeOfDrink) =>{
    console.log(`can I have a ${size} ${typeOfDrink}`);
}
order("large", "coke");
order("small","pepsi")

/*let pin = "1234"
let balance = 50

const ATM = (pinNumber, withdrawalAmount) => {
    if (pinNumber == pin && withdrawalAmount <= balance)
    console.log(`sucessfully withdrew ${withdrawalAmount} from account `)
    else console.log("error occured")
}

ATM(1234, 45)*/

/*const parameters = (paraOne, paraTwo) => {
     return paraOne * paraTwo 
}
console.log(parameters(3,5))*/

/*let favSongs = ['Syke! Life is Awesome', 'Heres to life', 'She Got Aressted'];
console.log(favSongs);
favSongs[2] = 'Hardware Store';
console.log(favSongs);
favSongs.push('Sunset Station');
console.log(favSongs);
favSongs.pop();
console.log(favSongs);
favSongs.shift()
console.log(favSongs)
favSongs.unshift()
console.log(favSongs)
console.log(favSongs.slice(1,2)) /*selects part of the array 
console.log(favSongs);
console.log(favSongs.splice(1,2,'wow wow'));
console.log(favSongs);*/

/*let favWebsites = [ 'Reddit', 'TvTropes', 'Twitch'];
console.log(favWebsites);
favWebsites.push("youtube","WatchWrestling");
console.log(favWebsites);
favWebsites.pop()
console.log(favWebsites)

const numberToString = (number)=>{
return "" + number;
}
console.log(numberToString(6))*/

/*const increase = (n) =>{
    return n + 1
}
console.log(increase(5))

const decrease = (n) => {
    return n - 1
}
console.log(decrease(7))

const add = (x,y) => {
    return x + y
}
console.log(add(3,3))

const subtract = (x,y) =>{
    return x - y
}
console.log(subtract(9,7))

const multiply = (x,y) =>{
    return x * y
}
console.log(multiply(4,8))

const divide = (x,y) =>{
    return x / y
}
console.log(divide(10,2))

const calculate = (operation,x,y) =>{
    if(operation == "add") {
        let total = x + y
        console.log(x + "" + "+" + "" + y + "" + "=" + total)
        return total
    }
}
console.log(calculate("add",5,6))

const  isGreaterThan = (a,b) =>{
    if(a > b) {
        return true, a + " is greater than " + b
    }
}
console.log(isGreaterThan(10,1))

const  areEqual = (a,b) =>{
    if(a = b) {
        return true, a + " is equal to " + b
    }
}
console.log(areEqual(5,10))

const  isLessThan = (a,b) =>{
    if(a < b) {
        return true, a + " is less than " + b
    }
    else {
        return false, a + "is not less than" + b
    }
}
console.log(isLessThan(11,10))

const minimum = (x,y) =>{
    if(x < y){
        return x - y
    }
    else {
        return y - x
    }
}
console.log(minimum(14,13))

const maximum = (x,y) =>{
    if(x > y){
        return x 
    }
    else {
        return y 
    }
}
console.log(maximum(14,15));

const isEven = (n) =>{
    if(n % 2 === 0){
        return true
        }
        else {
            return false
        }
    }
console.log(isEven(4))

const isOdd = (n) =>{
    if(n % 2 !== 0){
        return true
        }
        else {
            return false
        }
    }
console.log(isOdd(5))

const letterGrade = (score,total) => {
    if (score >= 90){
        return total = "a"
    }
    else if (score >= 80 && score <=89){
    return total = "b"
    }
    else (score >= 70 && score <=79)
        return total = "c"
}
console.log(letterGrade(74,))

const combine = (word1, word2) =>{
    if (word1, word2)
    return word1 + " " + word2
}
console.log(combine("hi", "there"))

for (i = 9; i >= 0; i--) {console.log(i);}*/

/*let favFilms = ['The Green Mile ','Forrest Gump ','Temple of Doom ']
console.log(favFilms)
favFilms.push('Shawshank Redemption', 'Up')

console.log(favFilms);
for (filmindex = 0; filmindex < favFilms.length; filmindex++) {
    console.log(favFilms[filmindex]);
}
let films = ['Groundhog Day','Caddyshack','Ghostbusters','Zombieland']
for (filmlist = 0; filmlist < films.length; filmlist++){
    console.log(films[filmlist])
}
const filmCheck = () =>{
if (films[2] == 'Ghostbusters'){
    return "yay it's ghostbusters";
}
else {
    return "boo, we want ghostbusters";
}
}
let hi = "hi"*/
/* problem 1 */
/*function sumOfMultiple(limit) {
    var i, sum = 0;
    for (i = 3; i < limit; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiple(1000));*/


let string = ("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh")
/* problem 4 */
/*const hicheck = ()=> {   
    for(i = 0; i <=string.length; i ++){
    if (string[i] == "h" && string[i+1] == "i"){
    console.log(i)
    }
    }
}
console.log(hicheck())*/

/* problem 5 */
function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
for(i = 9028374350359; i >= 0; i--){
    if(checkPalindrom(i.toString())== true) {
        console.log(i)
    }
}
/*problem 6*/
/*function countWords(str){
    var count = 0,
    foo = str.length;
    
    for (i = 0; i <= foo;i++) {
    if (str.charAt(i) == " ") {
    count ++;
    }
    
    }
    return console.log(count + 1);  
    }
console.log(countWords("Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises."))
*/
/*let person = {
name: "Cameron",
age: 22,
favouriteDrinks:["Amaretto","7-up","water"],
sayHi(){
    return `Hello my name is ${this.name}` }
};
console.log(person.sayHi())

let rabbit = {
    name: 'Sherlock',
    colour: 'black and white',
    ears: 'uppy',
    bunHop(){
        return `${this.name} is hopping`
    },
    bunChew(){
        return `${this.name} is chewing`
    }
}
console.log(rabbit.bunChew())
console.log(rabbit.bunHop())*/
/* problem 7 find the first 50 digit fibonacci number*/
/*function fibonacciSequence(n){
	
	fib_values = [1,1];
	var n_term = 2;
	while (n_term < n){
		fib_term_n = fib_values[n_term - 1] + fib_values[n_term - 2]
		fib_values.push(fib_term_n)
        n_term += 1
        if (n_term.length <= 50){

        }
	}
    return fib_values[n_term-1]
   
}
console.log(fibonacciSequence(50))


/* problem 8 */
/*const epp5 = () => {
    var div = 20,
        cnt = 1,
        match = false;
    while (match == false) {
        for (num = 1; num <= div; num++) {
            if (cnt % num !== 0) {
                break;
            }
            if (num === div) {
                match = true;
                console.log(cnt);
            }
        }
        cnt++;
    }
}

console.log(epp5())*/


/* problem 9 */

/*let numberString = "371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331"
const adding = (sums) =>{
    let sum = 0
   sums = numberString.split('')
for (i = 0; i < numberString.length; i++){
    sum += parseInt(sums[i],10);
}
        return sum;


}
console.log(adding(numberString))*/

/* problem 10  add up all even fibonacci sequence numbers below 4 million*/
/*
var fib = [0,1];
var i = 0;
var sum = 0;
while (fib[0]+fib[1] < 4000000){
    i= fib[0]+fib[1];
    fib[0]=fib[1];
    fib[1]=i;

        if(i%2 === 0){
        sum += i;
    }
}
console.log(sum);
*/
/* problem 11, find the longest word, find the first index of witch, remove all punctuation */

/* function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord("Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises."))

let words = "Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises."

console.log(words.indexOf("witch"))

console.log(words.replace(/[^\w\s]|_/g, "")) */