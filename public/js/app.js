let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

console.log(add, subtract);

add.addEventListener("click", () => {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  /* if (result > 10) {
    result = 0;
  }
*/
  output.innerText = result;
});

subtract.addEventListener("click", () => {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});
