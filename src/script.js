export default function handleInput(event) {
  const inputWrapper = document.getElementById("inputWrapper");
  if (event.target.value) {
    inputWrapper.classList.add("hide-placeholder");
  } else {
    inputWrapper.classList.remove("hide-placeholder");
  }
}
