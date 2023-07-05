let btnTranslate = document.querySelector(".btn-translate");
let inputForTranslate = document.querySelector(".input-for-translation");
let outpurOfTranslate = document.querySelector(".output-of-translation");

function handleError(error) {
  outpurOfTranslate.value = error;
}

function processData(data) {
  if (data.success) {
    outpurOfTranslate.value = data.contents.translated;
  } else {
    outpurOfTranslate.value = data.error.message;
  }
}

function callMinionAPI() {
  let userInput = inputForTranslate.value;
  let url = `https://api.funtranslations.com/translate/minion.json?text=${userInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch(handleError);
}

btnTranslate.addEventListener("click", function onTranslateButtonClick() {
  if (!inputForTranslate.value) {
    alert("Please enter text for translation");
    return;
  }

  callMinionAPI();
});
