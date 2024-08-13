import "./button.css";

const Button = (textContent, onClick, className = null) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  if (className) btn.classList.add(className);
  btn.textContent = textContent;
  btn.type = "button";

  btn.addEventListener("click", onClick);

  return btn;
};

export default Button;
