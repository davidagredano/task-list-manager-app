const Button = (className, textContent, onClick) => {
  const btn = document.createElement("button");
  btn.className = className;
  btn.textContent = textContent;
  btn.type = "button";

  btn.addEventListener("click", onClick);

  return btn;
};

export default Button;
