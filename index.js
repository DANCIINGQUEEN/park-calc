function pCalc(expression) {
    let numberStack = [];
    let operatorStack = [];
    let currentNumber = '';
    let lastCharacter = null;

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const applyOperator = (operator, b, a) => {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b; // 0으로 나누는 경우를 적절히 처리하세요
        }
    };

    for (let char of expression) {
        if (char === ' ') continue;

        if (char >= '0' && char <= '9' || (char === '-' && (lastCharacter === null || lastCharacter === '('))) {
            currentNumber += char;
        } else {
            if (currentNumber !== '') {
                numberStack.push(parseFloat(currentNumber));
                currentNumber = '';
            }

            if (char === '(') {
                operatorStack.push(char);
            } else if (char === ')') {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                    numberStack.push(applyOperator(operatorStack.pop(), numberStack.pop(), numberStack.pop()));
                }
                operatorStack.pop(); // 여는 괄호 '(' 제거
            } else {
                while (operatorStack.length > 0 && precedence[char] <= precedence[operatorStack[operatorStack.length - 1]]) {
                    numberStack.push(applyOperator(operatorStack.pop(), numberStack.pop(), numberStack.pop()));
                }
                operatorStack.push(char);
            }
        }

        lastCharacter = char;
    }

    if (currentNumber !== '') {
        numberStack.push(parseFloat(currentNumber));
    }

    while (operatorStack.length > 0) {
        numberStack.push(applyOperator(operatorStack.pop(), numberStack.pop(), numberStack.pop()));
    }

    return numberStack.length > 0 ? numberStack.pop() : 0;
}

module.exports = pCalc;
