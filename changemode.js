let modbtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modbtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currmode);
});


