const userName = "Max";
// userName = "Andrei"; // error: a constant cannot be overwriten
let age = 30;
age = 29;

// only global and funciton scope
var a;

{
  // you can also declare var outside of the funciton
  // and it will be available inside of the function
  // -- also for let
  // function add(a: number, b: number) {
  //   var result = a + b;

  //   return result;
  // }

  // or ..  = (a: number, b: number) => a + b;
  const add = (a: number, b: number = 1) => {
    return a + b;
  };
  // = 1 is the default value for b

  console.log("Add from const function");
  console.log(add(2, 5));

  // same thing:
  // const printOutput: (a: number | string) => void = output => console.log(output);
  const printOutput = (output: string | number) => {
    console.log(output);
  };

  console.log("\n");
  console.log("Add inside of printOutPut const function");
  printOutput(add(9, 1));

  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", (event) => console.log(event));
  }

  console.log("\n");
  console.log("printOutput with only one argument");
  printOutput(add(5));
}

{
  const hobbies = ["Sports", "Cooking", "Swimming", "Programming"];
  const activeHobbies = ["Hiking"]; // can also add a second argument: ...hobbies

  activeHobbies.push(...hobbies);

  console.log("\n");
  console.log("Arrays spreading");
  console.log(activeHobbies);

  // array destructuring
  // [ hobby[0], hobby[1], rest in a new array ]
  const [hobby1, hobby2, ...remainingHobbies] = hobbies;

  console.log("\n");
  console.log("Hobbies destructured");
  console.log("'" + hobby1 + "'", "'" + hobby2 + "'");
  console.log(remainingHobbies);
}

{
  const person = {
    name: "Max",
    age: 30,
  };

  const copiedPerson = { ...person };

  console.log("\n");
  console.log("Object copying");
  console.log(person);
  console.log(copiedPerson);

  //        name becomes userName
  const { name: userName, age } = person;

  console.log("\n");
  console.log("Person obj destructuring");
  console.log("userName: " + userName);
  console.log("age: " + age);
}

{
  // REST PARAMETERS
  const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };

  const addedNumbers = add(5, 10, 2, 3.7);

  console.log("\n");
  console.log("Dynamic parameters number");
  console.log(addedNumbers);
}
