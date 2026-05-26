const button = document.querySelector("button");
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

// 1. Take the button and wait for a prompt using the addEventListener.
button.addEventListener("click", function() {
  // 2. Waiting on the prompt to be triggered using "Click".
  // 3. When the prompt appears, ask the user for their name.
  const name = prompt("What is your name?");
  // 4. After the user enters their name, change the text of the heading to say "Hi, [name]!" where [name] is the name they entered.
  heading.textContent = `Hi, ${name}!`;
  paragraph.textContent = `Nice to meet you, ${name}!`;
  button.textContent = "Try Again?";
  // 5. Log the message "The button has been clicked" to the console.
  console.log("The button has been clicked")
  console.log("The button has been clicked and button text has been changed to 'Try Again?'")
  console.log(`The paragraph text has been changed to 'Nice to meet you, ${name}!'`)
})