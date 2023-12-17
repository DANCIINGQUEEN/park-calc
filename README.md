
# park-calc

`park-calc` is a simple JavaScript module for evaluating arithmetic expressions with support for parentheses and basic arithmetic operations.

## Installation

To use `park-calc` in your project, include it as a dependency:

```bash
npm install park-calc
```

## Usage

To use the `pCalc` function in your project, import it from the `park-calc` module:

```javascript
const pCalc = require('park-calc');

const result = pCalc('YOUR_EXPRESSION');
console.log(result);
```

Replace `YOUR_EXPRESSION` with the arithmetic expression you want to evaluate. The expression can include numbers, parentheses `()`, and operators `+`, `-`, `*`, `/`.

## Example

```javascript
const result = pCalc('(2 + 3) * (5 - 2)');
console.log(result); // Outputs: 15
```

---

# park-calc (한국어)

`park-calc`는 괄호와 기본 산술 연산을 지원하는 간단한 JavaScript 모듈로, 산술 표현식을 계산하기 위해 사용됩니다.

## 설치 방법

프로젝트에서 `park-calc`를 사용하기 위해, 의존성으로 포함시키세요:

```bash
npm install park-calc
```

## 사용 방법

프로젝트에서 `pCalc` 함수를 사용하려면, `park-calc` 모듈에서 이를 가져옵니다:

```javascript
const pCalc = require('park-calc');

const result = pCalc('계산할_표현식');
console.log(result);
```

`계산할_표현식` 자리에 평가하고자 하는 산술 표현식을 넣으세요. 이 표현식은 숫자, 괄호 `()`, 연산자 `+`, `-`, `*`, `/`를 포함할 수 있습니다.

## 예시

```javascript
const result = pCalc('(2 + 3) * (5 - 2)');
console.log(result); // 출력: 15
```

