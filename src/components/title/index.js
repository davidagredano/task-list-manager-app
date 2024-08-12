const Title = (className, textContent) => {
  const title = document.createElement("h3");
  title.className = className;
  title.textContent = textContent;

  return title;
};

export default Title;
