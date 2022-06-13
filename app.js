function wholeProgram() {
  const array = [
    "Sim",
    "Não",
    "Talvez",
    "Com certeza!",
    "Claro!",
    "Nem pensando",
    "Nem sonhando",
  ];
  const randomArrayElement = array[Math.floor(array.length * Math.random())];
  const submitButton = document.querySelector(".submitButton");
  submitButton.addEventListener("click", () => {
    const selectInputText = document.querySelector(".stringBox");
    if (selectInputText.value === "") {
      return alert("Por favor, insira algo dentro da caixa de texto.");
    }
    document.querySelector(".randomText").innerHTML = `${randomArrayElement}`;
  });
}
wholeProgram();

function darkMode() {
  const darkModeBg = document.querySelector(".dark-mode");
  const darkModeBall = document.querySelector(".dark-mode-toggle");
  darkModeBg.classList.add("active");
  darkModeBall.classList.add("active");

  if (darkModeBg) {
    const newColorH1 = document.querySelector("h1");
    const newColorP = document.querySelector("p");
    const newColorNewText = document.querySelector(".randomText");
    const newColorBody = document.querySelector("body");
    const newColorStringBox = document.querySelector(".stringBox");
    newColorH1.classList.add("active");
    newColorP.classList.add("active");
    newColorNewText.classList.add("active");
    newColorBody.classList.add("active");
    newColorStringBox.classList.add("active");
  }
}
