const outcomeDisplay = document.querySelector(".display-outcome");
const numberBtn = Array.from(document.querySelectorAll(".number"));
const styleSelector = document.getElementById(`styleSelector`);
const radios = Array.from(document.querySelectorAll("input"));

numberBtn.map((number) => {
  number.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        outcomeDisplay.innerText = "";
        break;
      case "DEL":
        if (outcomeDisplay.innerText) {
          outcomeDisplay.innerText = outcomeDisplay.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          outcomeDisplay.innerText = eval(outcomeDisplay.innerText);
        } catch {
          outcomeDisplay.innerText = "ERROR!";
        }

        break;
      default:
        outcomeDisplay.innerText += e.target.innerText;
    }
  });
});

radios.map((radio) => {
  radio.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "radio1":
        console.log("Radio 1 clicked");
        styleSelector.href = "css/theme1.css";
        break;
      case "radio2":
        console.log("Radio 2 clicked");
        styleSelector.href = "css/theme2.css";
        break;
      case "radio3":
        console.log("Radio 3 clicked");
        styleSelector.href = "css/theme3.css";
        break;
    }
  });
});

// YOUTUBE VID https://www.youtube.com/watch?v=QS6Y0ezhyCs 10.05 min

// It is very bad practise to use EVAL() because of the security risk and high vulnerability. So I will be rewriting a function for the equals button.
