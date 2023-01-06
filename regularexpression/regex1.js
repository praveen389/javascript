// let sentence ="The Quick brown for jumps over the lazy dog";

//Matching a word in a sentense (case -sensitive)

//let reg1 =/dog/;
//let reg1 =/cat/;

//let searchResult =reg1.test(sentence);
// console.log(searchResult);

//Matching for multipe words (OR|)

// let reg1 =/dog|fox|brown/;
// let reg1 =/dog|crow|brown/;
// let reg1 =/bird|fish|monkey/;

// let reg1 =/bird|fox|monkey/;

// let searchResult =reg1.test(sentence);

// console.log(searchResult);

//Ignoring the case sensitiveness (using i flag)

// let sentence ="The Quick brown for jumps over the lazy dog";

// let reg1 =/quick/i;

// let searchResult =reg1.test(sentence);

// console.log(searchResult);


//Getting the matched  word (match method)

// let sentence ="The Quick brown for jumps over the lazy dog";

//let reg1 =/fox/i;
//let reg1 =/quick/i;

// let reg1 =/bird/i;

// let searchResult =sentence.match(reg1);

// console.log(searchResult);

//Getting the matched words  using d flag.

// let sentence ="The Quick brown for jumps over the lazy dog";

// let reg1 =/the/i;

// let searchResult = sentence.match(reg1);

// console.log(searchResult);

//getting matched word with the dot

// let sentence ="The Quick brown for jumps over the lazy dog";

// let reg1 =/.o./g;
// let reg1 =/.u./g;
// let reg1 =/./g;

// let  searchResult =sentence.match(reg1);

// console.log(searchResult);

//getting matched characterwith []

// let sentence ="The Quick brown for jumps over the lazy dog";

// let reg1 =/[bdh]/g;

// let searchResult =sentence.match(reg1);

// console.log(searchResult);

//Getting matched character of alphabet with []

// let reg1 =/[a-z]/g;

// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//Getting the matched numbers and charactes of alphbets with []

//  let sentence ="The Quick brown for jumps over the lazy dog";

//  let reg1 = /[x-z]/gi;

//  let reg1 = /[1-4x-z]/gi;

//  let searchResult =sentence.match(reg1);

//  console.log(searchResult);

//Geting not the matched numbers and characters with []..

// let sentence ="The Quick brown for jumps over the lazy dog";

// let reg1 =/[^a-h]/gi; //get everything except the ones included in []

// let reg1 =/[^1-3^a-h]/gi; //get everything except the ones included in []

// let searchResult =sentence.match(reg1);

// console.log(searchResult);

//getting the math numbers and characteres that occur one or more times

// let sentence ="The Quick b5rown fox jump6s over t2he lazy 3dog";

// let reg1 =/Q+/g;
// let reg1 =/Q+/g;

// let searchResult =sentence.match(reg1);

// console.log(searchResult);


//gettingthe matched characters that occur zero or more times.

// let sentence ="The Quick b5rown fox jump6s over t2he lazy 3dog";

// let sentence ="gooooooooooogle";
// let sentence ="gogle";

// let reg1 =/go*/g;

// let searchResult =sentence.match(reg1);
// console.log(searchResult);



// let sentence ="The Quick b5rown fox jump6s over t2he lazy 3dog";

// let reg1 = /^The/i;

// let searchResult =sentence.match(reg1);
// console.log(searchResult);

// Maching the ending string patters


// let sentence ="The Quick b5rown fox jump6s over t2he lazy 3dog";

// let reg1 = /The$/i;
// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//Matching all letters and numbers & _

// let sentence ="The Quick b5rown fox jump6s over t2he lazy 3dog";

// let reg1 =/\w/g;

// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//Matching all non-letters and non numbers and not __

// let sentence ="The Q%uick b5r$own fox ju&mp6s o*ver t2he lazy 3dog";

// let reg1 = /\w/g;

// the uppercase W matches everything that is not (a-z) & (0-9) &__

// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//Matching all non numbers
// let sentence ="The Q%uick b5r$own fox ju&mp6s o*ver t2he lazy 3dog";

// let reg1 = /\D/g;

// the uppercase W matches everything that is not (a-z) & (0-9) &__

// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//Matching all whitespace
// let sentence ="The Q%uick b5r$own fox ju&mp6s o*ver t2he lazy 3dog";

// let reg1 = /\s/g;


// let searchResult =sentence.match(reg1);
// console.log(searchResult);

// Matching all non whitespace

// let sentence ="The Q%uick b5r$own fox ju&mp6s o*ver t2he lazy 3dog";

// let reg1 = /\S/g;

// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//specifying upper case and lower numbers of matches using the quantity specifiers.


// let sentence ="The Q%uick b5r$own fox ju&mp6s o*ver t2he lazy 3dog";

// let sentence =" O bo cco"
// let reg1 = /o{2,}/;

// let searchResult =reg1.test(sentence);
// console.log(searchResult);

// let sentence ="The Q%uick b5r$own fox ju&mp6s o*ver t2he lazy 3dog";

// let reg1 =/o{1,}/g;
// let searchResult =sentence.match(reg1);
// console.log(searchResult);


//specifying exact number of matches using quantity specifiers


// let sentence ="Goooogle";

// let reg1 = /o{3}/;
// let searchResult =sentence.match(reg1);
// console.log(searchResult)

// let reg1 =/o{3}/;
// let searchResult =reg1.test(sentence);
// console.log(searchResult);

//check for all or none

// let sentence ="colour";
// let sentence2 ="color";

// let reg1 =/colour?r/;
// let reg2 =/colou?r/;

// let searchResult =reg2.test(sentence2);
// console.log(searchResult);

/*

1 -At least two letters
2-Numbers should be at the end ,if there are any
3-Letters can be either lowercase or uppercase
4-If there are two letter ,they cannot contain numbers

*/


// let username ="javascript300";
// let username="dfd";
// let username="d";
// let username="d8";
// let username="df6";
// let username="4dfd";

// let username ="Python4"

// let reg1 =/^[a-zA-Z]{2,}\d*$/;

// let checkstatus =reg1.test(username);

// console.log(checkstatus);

/* explanation of above
^[a-zA-Z] It matches all letters uppercase and  lowercase.
{2,} It requires the quantity of characters to ve ar least 2.
\d -It inserts matches for digits
* -It matches the characters that occur 0 or more times
$ It makes sure that the digits are at the end of the username

*/

/* task 

password must be atleast 8 characters

password muct contain atleast two consecutive digits

*/

let password ="password12";

let passcheck =/(?=\w{8})(?=\d{2})/;

let checkstatus =passcheck.test(password);

console.log(checkstatus);

/*

(?=\w{8}) - a positive lookahead that matches 8 or more letters or digits.

(?=) - a positive look ahead

\w - matches all letters and numbers and _.

{8} - a quantity  specifies that is looking for exact number of  accurances that  is 8

\D* - zero or more occurances of characters that are not digits

\d{2} - two consecutive digits.

*/

/* capturing Groups */

// let sentence ="java java";

// let reg1 =/(\w+)\s\1/;
// let reg1 =/(\w+)\s/;

// let reg1 =/(\w+)/;

// let searchResult =reg1.test(sentence);

// console.log(searchResult);

/*

\1 a shorthand way for repeating what is in the paranthesis



(\w+)is\1 -"java java"

(\w+) -java

*/

// let searchResult = sentence.match(reg1);
// console.log(searchResult);


