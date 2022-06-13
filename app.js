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
