import { evaluate, log } from "mathjs";

let input = document.getElementById("input");

function btn_action(action) {
  switch (action) {
    case "clear":
      input.value = "";
      break;
    case "backspace":
      input.value = input.value.slice(0, -1);
      break;
    case "equals":
      const valid = /^[0-9.+\-*/%() ]+$/.test(input.value);
      if (!valid) {
        alert("Invalid input entered!");
      }
      input.value = evaluate(input.value);
      break;
    default:
      input.value = input.value + action;
      break;
  }
}
window.btn_action = btn_action;
