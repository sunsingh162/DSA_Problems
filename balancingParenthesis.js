const arr = ["{[]}", "{{[[]}}))(){)", "[{{()}}]", "{{}}}{}{}"];

function balanceParenthesis(str) {
  let stack = [];
  const parenthesis = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (char !== parenthesis[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const results = arr.map(balanceParenthesis);

console.log(results);
