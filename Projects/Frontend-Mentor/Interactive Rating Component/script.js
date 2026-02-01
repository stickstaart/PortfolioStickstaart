const radios = Array.from(document.querySelectorAll(`.radio`));
const submitBtn = document.querySelector(".submit-btn");
const ratingContainer = document.querySelector(".irc-container-rating");
const thankyouContainer = document.querySelector(".irc-container-thankyou");
const selection = document.querySelector(".selection");

let selectedValue;

radios.map((radio) => {
  radio.addEventListener(`click`, (e) => {
    radios.map((element) => {
      if (element.classList.contains("selected-radio")) {
        element.classList.remove("selected-radio");
        console.log(`Removed classList from ${element.id}!`);
      }
    });
    e.target.classList.add("selected-radio");
    console.log(`Added classList to ${e.target.id}`);
  });
});

submitBtn.addEventListener("click", (e) => {
  radios.map((element) => {
    if (element.classList.contains("selected-radio")) {
      console.log(`You have selected ${element.id}!`);
      selectedValue = element.id[element.id.length - 1].toString();
      console.log(selectedValue);
      ratingContainer.style.display = "none";
      thankyouContainer.style.display = "flex";
      selection.innerHTML = selectedValue;
    }
  });
});
