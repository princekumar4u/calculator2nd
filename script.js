const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(
          display.value.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-")
        );
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
