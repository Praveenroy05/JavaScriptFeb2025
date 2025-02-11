function countCharOccurrence(str, char) {
    console.log(str.split(char));
    return str.split(char).length - 1;
}

console.log(countCharOccurrence("prmogmramming", "m")); // Output: 2

function isBalanced(expr) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };

    for (let char of expr) {
        if (Object.values(map).includes(char)) stack.push(char);
        else if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // Output: true


function extractIntegers(str) {
    return (str.match(/\d/g) || []).join('');
}

console.log(extractIntegers("he33llo 42")); // Output: "3342"


function repeatedChars(str) {
    let counts = {};
    for (let char of str) counts[char] = (counts[char] || 0) + 1;

    console.log(Object.entries(counts));
    console.log(counts);
    return counts[char]  = char


console.log(repeatedChars("assessment")); // Output: s2,e2,m1,n1,t1,a1
}

obj = {}
obj["a"] = (obj["a"] ||0)
console.log(obj);
