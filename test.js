/**Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
 */
function chessboard(n) {
    let str = '';
    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; j <= n / 2; j += 1) {
            if (i % 2 === 0) {
                str += '# '
            } else {
                str += ' #';
            }
        }
        str += '\n';
    }
    console.log(str);
}
chessboard(8);

//Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    if (a < b) {
        console.log(a);
    } else if (a > b) {
        console.log(b);
    } else {
        console.log('The values are equal');
    }
}
min(20, 7);

//Write a function min that takes two arguments and returns their minimum.

function isEven(n) {
    if (n < 0) {
        console.log('test with a possitive number');
        return;
    }
    if (n === 0) {
        console.log(true);
    } else if (n === 1) {
        console.log(false);
    } else {
        isEven(n - 2);
    }
}
isEven(-1);

/**Write a function countBs that takes a string as its only argument and returns a number that indicates 
 * how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
 */

function countBs(str) {
    let len = str.length;
    let count = 0;
    for (let i = 0; i < len; i += 1) {
        if (str.charAt(i) === 'B') {
            count++;
        }
    }
    console.log(count);
}
countBs("ManBBgo00");

function countChar(str, char) {
    let len = str.length;
    let count = 0;
    for (let i = 0; i < len; i += 1) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    console.log(count);
}
countChar('apple', 'p');

/**Write a function named calculateDogAge that: takes 1 argument: your puppy's age. 
 * calculates your dog's age based on the conversion rate of 1 human year to 7 dog years. 
 * outputs the result to the screen like so: "Your doggie is NN years old in dog years!" 
 * Call the function three times with different sets of values.
 *  Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years. 
 * */
function calculateDogAge(humanYears, dogYears) {
    let inDogYears = humanYears * 7,
        inHumanYears = dogYears / 7,
        inHumanMonths = 12 / (10 / ((inHumanYears.toFixed(1) - Math.floor(inHumanYears)).toFixed(1) * 10));

    console.log(`Your doggie is ${inDogYears} years old in dog years!
Your doggie is ${Math.floor(inHumanYears)} years and ${inHumanMonths.toFixed()} months old in human years!`);

}
calculateDogAge(20, 14);


//Write a JavaScript function that reverse a number
function reverseNum(n) {
    let nStr = n.toString(),
        reversed = +nStr.split('').reverse().join('');
    console.log(reversed);
}
reverseNum(45);

/** Write a JavaScript function that checks whether a passed string is palindrome or not? 
*   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    if (reversed === word) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isPalindrome('madam');


//Write a JavaScript function that returns a passed string with letters in alphabetical order

function alphabeticOrder(str) {
    let strArr = str.split('').sort().join('');
    console.log(strArr);
}
alphabeticOrder('dadat');

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function upperCase(str) {
    let strArr = str.split(' ');
    strArr.forEach((el, i, arr) => arr[i] = el[0].toUpperCase() + arr[i].slice(1));
    let transformed = strArr.join(' ');
    console.log(transformed);
}
upperCase('da ame ns');

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longestWord(str) {
    let arr = str.split(' ');
    let longest = arr[0];
    let len = arr.length;
    for (let i = 0; i < len - 1; i += 1) {
        if (arr[i].length <= arr[i + 1].length && arr[i + 1].length > longest.length) {
            longest = arr[i + 1];
        }
    }

    console.log(longest);
}
longestWord('theddddddddddddddd is the best movie in the world that i know ');

//Write a JavaScript function which accepts an argument and returns the type

function typeOf(arg) {
    console.log(typeof arg);
}
typeOf(null);

//Write a JavaScript function which accepts another function as an argument and executes it

function executeAnother(func) {
    return func;
}
executeAnother(typeOf([]));

//Write a JavaScript function to get the function name

function funcName() {
    this.name = funcName.name;
    console.log(this.name);
}
funcName();

//Fibonaci

function largestSubsetFib(arr) {
    let fib = [1, 1];
    let result = [];
    let maxNum = Math.max.apply(null, arr);

    for (let i = 2; i < maxNum; i += 1) {
        if ((fib[i - 2] + fib[i - 1]) > maxNum) {
            break;
        }
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    arr.forEach(el => fib.forEach(el2 => {
        if (el === el2 && result[result.length - 1] !== el) {
            result.push(el)
        }
    }))
    let final = (result.join(', '));
    result === [] ? -1 : console.log(`{${final}}`);
}

largestSubsetFib([1, 4, 3, 9, 3, 10, 13, 7]);
