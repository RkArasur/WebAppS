const numberButtons = document.querySelectorAll("button");
const input = document.querySelector(".cal-input input");
const equals = document.querySelector("#equals");
const result = document.querySelector(".result h3");

function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function sub(a, b) {
  return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}
function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function appendValues(i) {
  value = input.value + String(i);
  input.value = value;
}

numberButtons.forEach(function (ele) {
  ele.addEventListener("click", function () {
    appendValues(ele.dataset.value);
  });
});

equals.addEventListener("click", function () {
  let temp = input.value.split(/([+-/x])/);
  while (temp.length > 1) {
    if (temp.length >= 3) {
      let ops = temp.splice(0, 3);
      let res;
      if (ops[1] == "+") res = add(ops[0], ops[2]);
      if (ops[1] == "-") res = sub(ops[0], ops[2]);
      if (ops[1] == "x") res = multiply(ops[0], ops[2]);
      if (ops[1] == "/") res = divide(ops[0], ops[2]);

      temp.splice(0, 0, String(res));
    }
    result.textContent = temp[0];
  }
});
