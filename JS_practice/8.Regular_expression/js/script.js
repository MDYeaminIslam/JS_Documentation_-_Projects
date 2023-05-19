//Regular Expression
//Regular Expression is a sequence of characters that forms a search pattern.
//Pattern Matching
/*
let re;
let str;
let result;
//define a regular expression
re = /hello/;
re = /hello/i; //i = case insensitive


console.log(re);
console.log(re.source); //source is the value of the regular expression
str = "Hello world";
str = "Again Hello world";
str = "Hello World";
//exec() - Return result in an array or null
//let result = re.exec(str);

//test() - Returns true or false
result = re.test(str);

//match() - Return result array or null
//match and exec are same but exec is used for regular expression and match is used for string
result = str.match(re);

//search() - Returns index of the first match if not found returns -1
result = str.search(re); //result return the index of the first match

//replace() - Return new string with some or all matches of a pattern
str = "Again Hello World Hello";
let newstr = str.replace(re, "Hi"); //replace the first match
console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr);
*/

/*
let re;
let str;

//Literal Characters means the character that we want to match exactly should be same with the string
re = /hello/;
re = /hello/i;
str = "Hello World";

console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}


*/


//Metacharacter 

/*
let re;
let str;

//Literal Characters means the character that we want to match exactly should be same with the string
re = /^hello/i; //here ^ means must start with value after we give ^ this symbol and i means case insensitive
re = /hello$/i; //here $ means must ends with value before we give $ this symbol and i means case insensitive.We can use both ^ and $ together put them in the beginning and end of the string.
//re = /^h.ello$/i; //here . means matches any one character
//re = /h*llo/i; //here * means matches any character 0 or more times
//re = /he?a?llo/i; //here ? means optional character that means e and a are optional
//re = /hello\?/i; //here \? means escape character that means ? is not a metacharacter


//Character Sets using Brackets []
re = /h[ea]llo/; //here [ea] means must be one of them inside the brackets
re = /[^ha]ello/; //here [^ha] means must be anything word except h and a
re = /^[ha]ello/; //here ^[ha] means must start with h or a
re = /[A-Z]ello/i; //here [A-Z] means must start with any uppercase letter from A to Z
re = /[A-Za-z]/; // here [A-Za-z] means must start with any letter from A to Z and a to z
re = /[0-9]ello/; //here [0-9] means must start with any digit from 0 to 9

re = /[0-9][0-9]ello/; //here [0-9][0-9] means must start with any digit from 0 to 9 and must be 2 digit


//Braces {} - Quantifiers. Here "Quantifiers" means how many times we want to match the character

re = /hel{2}o/i; //here {2} means l must occur exactly 2 times

re = /hel{2,4}o/i; //here {2,4} means l must occur exactly 2 to 4 times. It's {min,max} a range from min value to max value

re = /hel{2,}o/i; //here {2,} means l must occur at least 2 times and there is no upper limit

//Parentheses () - Grouping
re = /^([0-9]){2}ello/; //here ([0-9]) means must be any digit from 0 to 9 and {5} means must be 2 digit

re = /^([0-9]){2,4}ello/; //here ([0-9]) means must be any digit from 0 to 9 and {2,4} digits must be between 2 to 4

//checking the Bangladeshi phone number
re = /^01[0-9]{9}$/;

re = /^([0-9]x){3}/; //here ([0-9]x) means must be any digit from 0 to 9 and x and {3} means must be 3 times. Example: 1x2x3x

//Shorthand Character Classes

re = /\w/; //Word character - alphanumeric or _(underscore)

re = /\w+/; // +  means matching one or more

re = /\W/; //Non-Word character that means anything except alphanumeric or _(underscore). Example: str = ":,;.;";
re = /\d/; //Match any digit

re = /\d+/; //Match any digit 0 or more times

re = /\D/; //Match any Non-digit. Exm: str = "yhhdkd,;";

re = /\s/; //Match whitespace character. Exm: str = "yhhdkd,223; ";

re = /\S/; //Match non-whitespace character. Exm: str = "yhhdkd,223;";

re = /\bHello\b/; //Word boundary. Exm: str = "Hello, welcome to Hello world"; That means nothing can be attached with Hello. It must be a word boundary


//Assertions
re = /x(?=y)/; //Match x only if followed by y. Exm: str = "xy";

re = /x(?!y)/; //Match x only if not followed by y. Exm: str = "x";


str = "x0y";
console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}
*/

//Regular Expression Examples
let re;
let str;

//Postal Code
re = /[0-9]{4}/;
str = "1234";

//Checking the phone number
//017637267463738,0177777777777

re = /^(\+)?(88)?01[0-9]{9}$/;
str = "01700000000";

//email address
//bohubrihi.learn@edu.com.bd

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/; //here + means one or more
str = "bohubrihi.learn@edu.com.bd";
console.log(re.test(str));


