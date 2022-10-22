let allSpan = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItem();
    }
  });
});
function showMessage() {
  //   if (theInput.value === "") {
  //     results.innerHTML = "input cant be empty";
  //   }
  results.innerHTML = "input cant be empty";
}

function checkItem() {
  //   console.log("check");
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `found local storage item called <span>${theInput.value}</span> `;
    } else {
      results.innerHTML = `no local storage item with the name <span>${theInput.value}</span> `;
    }
  } else {
    showMessage();
  }
}
function addItem() {
  //   console.log("check");
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "test");
    results.innerHTML = `local storage item <span>${theInput.value}</span> added`;
    theInput.value = "";
  } else {
    showMessage();
  }
}
function deleteItem() {
  //   console.log("check");
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = ` local storage item called <span>${theInput.value}</span> deleted `;
      theInput.value = "";
    } else {
      results.innerHTML = `no local storage item with the name <span>${theInput.value}</span> `;
    }
  } else {
    showMessage();
  }
}
function showItem() {
  //   console.log("check");
  if (localStorage.length) {
    results.innerHTML = "";
    console.log(`found element ${localStorage.length}`);
    for (let [key, value] of Object.entries(localStorage)) {
      //   results.innerHTML += `<span>${key}=>${value}</span>`;
      results.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    results.innerHTML = `local storage is empty`;
  }
}
