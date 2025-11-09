// ===== Task 0 =====
console.log("Name: Adilbek Arman, Group: SE-2432");
alert("Hello, Assel Alimzhan!!!!");

// ===== Task 1 =====
const showVariablesBtn = document.getElementById("showVariables");
if (showVariablesBtn) {
  showVariablesBtn.onclick = () => {
    let name = "Adilbek";
    let age = 18;
    let isStudent = true;
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Student:", isStudent);
    console.log("Age + 5 =", age + 2);
  };
}

// ===== Task 2 =====
const changeTextBtn = document.getElementById("changeTextBtn");
if (changeTextBtn) {
  changeTextBtn.onclick = () => {
    document.getElementById("textChange").innerText = "Text changed";
  };
}

// ===== Task 3 =====
const colorBox = document.getElementById("colorBox");
if (colorBox) {
  document.getElementById("changeColorBtn").onclick = () => {
    colorBox.style.backgroundColor = "#ff0000ff";
  };
  document.getElementById("changeFontBtn").onclick = () => {
    colorBox.style.fontSize = "30px";
  };
  
}

// ===== Task 4 =====
const list = document.getElementById("itemList");
if (list) {
  document.getElementById("addItemBtn").onclick = () => {
    const li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
  };
  document.getElementById("removeItemBtn").onclick = () => {
    if (list.lastChild) list.removeChild(list.lastChild);
  };
}

// ===== Task 5 =====
const hoverBox = document.getElementById("hoverBox");
if (hoverBox) {
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "#ff0000ff";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "#66fcf1";
  });
}

// ===== Task 6 =====
const input = document.getElementById("liveInput");
const display = document.getElementById("displayValue");
if (input && display) {
  input.addEventListener("keydown", () => {
    display.textContent = input.value;
  });
}

// ===== Task 7 =====
function calculate(op) {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  let res = 0;
  if (isNaN(a) || isNaN(b)) return alert("Enter both numbers!");
  switch (op) {
    case "+": res = a + b; break;
    case "-": res = a - b; break;
    case "*": res = a * b; break;
    case "/": res = b !== 0 ? a / b : "Error"; break;
  }
  document.getElementById("result").textContent = res;
}

// ===== Task 8 =====
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

if (addTaskBtn) {
  addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (!text) return alert("Enter a task!");
    const li = document.createElement("li");
    li.textContent = text;
    li.onclick = () => li.classList.toggle("completed");

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  };
}
