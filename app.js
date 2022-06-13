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
  document.querySelector(".randomText").innerHTML = `${randomArrayElement}`;
});
