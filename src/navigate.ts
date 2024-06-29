export const navigate = [
  { name: "createAccount", href: "./createAccount" },
  { name: "login", href: "./login" },
];

export function handleInput(event: { target: { value: string } }) {
  const inputWrapper: HTMLElement | null =
    document.getElementById("inputWrapper");
  if (event.target.value) {
    inputWrapper.classList.add("hide-placeholder");
  } else {
    inputWrapper.classList.remove("hide-placeholder");
  }
}
