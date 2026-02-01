const randomAdvice = document.querySelector(`.result`);
const newAdviceBtn = document.querySelector(`.newadvicebtn`);
const adviceID = document.querySelector(`.advice-id`);

// execute api call when page loads
window.onload = () => getapi(api_url);

// api url
const api_url = "https://api.adviceslip.com/advice";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url, { cache: "no-cache" });

  // Storing data in form of JSON
  let data = await response.json();
  console.log(data);
  console.log(data.slip.id);
  randomAdvice.innerHTML = `"${data.slip.advice}"`;
  adviceID.innerHTML = `advice #${data.slip.id}`;
}
// // Calling that async function
// getapi(api_url);

newAdviceBtn.addEventListener(`click`, () => {
  randomAdvice.innerHTML = ``;
  getapi(api_url);
});
