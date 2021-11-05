import button from "../components/button/button";

const renderPageById = (id, child) => {
  document.getElementById(id).appendChild(child);
};

const updateCalculationInput = (type, leftOperand, rightOperand, operationSign) => {
  switch (type) {
    case "add":
      if(document.getElementById("calculations-input").value==="0" && leftOperand!==".") {
        document.getElementById("calculations-input").value = leftOperand;
      } else {
        document.getElementById("calculations-input").value += leftOperand;
      }
      break;
    case "delete":
      const string = document.getElementById("calculations-input").value;
      document.getElementById("calculations-input").value = string.substr(0, string.length - 1);
      break;
    case "set":
      document.getElementById("calculations-input").value = `${leftOperand}${operationSign}${rightOperand}`
      break;
    case "error":
      document.getElementById("calculations-input").value = `Syntax error`;
      disableButtons();
  }
};

const disableButtons = () => {
  document.querySelectorAll(".button").forEach(button=>{
    if(!button.classList.contains("AC")) {
      button.classList.add("disabled");
    }
  })
};

const enableButtons = () => {
  document.querySelectorAll(".button").forEach(button=>{
    if(!button.classList.contains("AC")) {
      button.classList.remove("disabled");
    }
  })
};

export { renderPageById, updateCalculationInput, enableButtons };
