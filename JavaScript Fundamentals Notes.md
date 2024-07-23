# JavaScript Fundamentals Notes


#### Values and Variables
- Variables store data values.
- `let` and `const` are block-scoped and preferred over `var` (which is function-scoped).
- Example:
    ```javascript
    let age = 30;
    const birthYear = 1990;
    ```

#### Data Types
- **Primitive Data Types**: Number, String, Boolean, Undefined, Null, Symbol, BigInt.
- **Dynamic Typing**: JavaScript variables can hold any type of value and can change types dynamically.
- Example:
    ```javascript
    let name = 'Jonas'; // String
    let isStudent = true; // Boolean
    let undefinedVar; // Undefined
    ```

#### Type Conversion and Coercion
- **Conversion**: Explicitly changing the type using functions.
    ```javascript
    const inputYear = '1991';
    console.log(Number(inputYear)); // 1991
    console.log(String(23)); // '23'
    ```
- **Coercion**: Implicit type conversion by JavaScript.
    ```javascript
    console.log('I am ' + 23 + ' years old'); // 'I am 23 years old'
    console.log('23' - '10' - 3); // 10
    ```

#### Truthy and Falsy Values
- **Falsy Values**: `0`, `''` (empty string), `undefined`, `null`, `NaN`, `false`.
- **Truthy Values**: All values that are not falsy.
- Example:
    ```javascript
    if (0) { console.log('Falsy'); } // Not executed
    if ('Hello') { console.log('Truthy'); } // Executed
    ```


#### Basic Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`.
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`.
- Example:
    ```javascript
    let x = 10 + 5; // 15
    x += 10; // 25
    x++; // 26
    ```

#### Comparison Operators
- **Equality Operators**:
    - `==` (loose equality): Compares values after type coercion.
    - `===` (strict equality): Compares values without type coercion.
    - Example:
      ```javascript
      console.log(18 == '18'); // true
      console.log(18 === '18'); // false
      ```

#### Logical Operators
- **AND (`&&`)**: Returns `true` if both operands are truthy.
- **OR (`||`)**: Returns `true` if at least one operand is truthy.
- **NOT (`!`)**: Inverts the truthiness of a value.
- Example:
    ```javascript
    const hasDriversLicense = true;
    const hasGoodVision = false;

    console.log(hasDriversLicense && hasGoodVision); // false
    console.log(hasDriversLicense || hasGoodVision); // true
    console.log(!hasGoodVision); // true
    ```


#### Strings
- Can be enclosed in single (`'`), double (`"`), or backticks (`` ` ``).
- Example:
    ```javascript
    let firstName = 'Jonas';
    let lastName = "Schmedtmann";
    ```

#### Template Literals
- Allow embedding expressions using `${}`.
- Example:
    ```javascript
    const age = 30;
    const birthYear = 1991;
    const introduction = `I'm ${firstName}, a ${age}-year-old developer born in ${birthYear}.`;
    ```

#### Ternary Operator
- A shorthand for `if-else` statements.
- Syntax: `condition ? exprIfTrue : exprIfFalse`.
- Example:
    ```javascript
    const age = 20;
    const canDrive = age >= 18 ? 'Yes' : 'No';
    console.log(canDrive); // 'Yes'
    ```


#### Conditionals
- `if`, `else if`, `else` for branching logic.
- Example:
    ```javascript
    const age = 18;
    if (age >= 18) {
      console.log('Adult');
    } else {
      console.log('Minor');
    }
    ```

#### Switch Statement
- Useful for multiple conditions.
- Example:
    ```javascript
    const day = 'Monday';
    switch (day) {
      case 'Monday':
        console.log('Plan course structure');
        break;
      case 'Tuesday':
        console.log('Prepare theory videos');
        break;
      default:
        console.log('Not a valid day');
    }
    ```

#### Boolean Logic
- Based on the principles of true/false values.
- Used extensively in conditions and loops.
- Example:
    ```javascript
    const isAdult = age >= 18;
    if (isAdult && hasDriversLicense) {
      console.log('You can drive.');
    } else {
      console.log('You cannot drive.');
    }
    ```


#### Function Declaration
- Example:
    ```javascript
    function greet() {
      console.log('Hello!');
    }
    ```

#### Function Expressions
- Functions can be assigned to variables.
- Example:
    ```javascript
    const greet = function(name) {
      console.log(`Hello, ${name}!`);
    };
    ```

#### Arrow Functions
- Shorter syntax and lexically binds `this`.
- Example:
    ```javascript
    const greet = name => console.log(`Hello, ${name}!`);
    const add = (a, b) => a + b;
    ```


#### Arrays
- Example:
    ```javascript
    const fruits = ['Apple', 'Banana', 'Cherry'];
    ```

#### Array Methods
- `push()`, `pop()`, `shift()`, `unshift()`, `indexOf()`, `includes()`.
- Example:
    ```javascript
    fruits.push('Date');
    fruits.pop(); // Removes 'Date'
    console.log(fruits.includes('Banana')); // true
    ```

### Section 7: Objects

#### Objects
- Example:
    ```javascript
    const person = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      birthYear: 1991,
      job: 'developer',
      friends: ['Michael', 'Peter', 'Steven']
    };
    ```

#### Accessing Properties
- Dot notation: `person.firstName`.
- Bracket notation: `person['lastName']`.

#### Methods in Objects
- Functions can be properties of objects.
- Example:
    ```javascript
    const person = {
      firstName: 'Jonas',
      lastName: 'Schmedtmann',
      greet: function() {
        console.log('Hello!');
      }
    };
    person.greet(); // 'Hello!'
    ```

#### `this` Keyword
- Refers to the object that is calling the method.
- Example:
    ```javascript
    const person = {
      firstName: 'Jonas',
      birthYear: 1991,
      calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
      }
    };
    console.log(person.calcAge()); // 33
    ```

### Section 8: Loops

#### For Loop
- Example:
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```

#### While Loop
- Example:
    ```javascript
    let i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    }
    ```

#### For-of Loop
- Example:
    ```javascript
    const fruits = ['Apple', 'Banana', 'Cherry'];
    for (const fruit of fruits) {
      console.log(fruit);
    }
    ```
