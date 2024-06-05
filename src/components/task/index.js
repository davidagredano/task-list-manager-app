import "./task.css";

const Description = (description) => {
  const p = document.createElement("p");
  p.className = "task__description";
  p.textContent = description;

  return p;
};

const Title = (title) => {
  const h3 = document.createElement("h3");
  h3.className = "task__title";
  h3.textContent = title;

  return h3;
};

const Content = (task) => {
  const div = document.createElement("div");
  div.className = "task__content";

  div.appendChild(Title(task.title));
  div.appendChild(Description(task.description));

  return div;
};

const Checkbox = (isCompleted) => {
  const button = document.createElement("button");
  button.className = "task__checkbox";
  button.textContent = isCompleted ? "X" : "";

  return button;
};

const Body = (task) => {
  const div = document.createElement("div");
  div.className = "task__body";

  div.appendChild(Checkbox(task.completed));
  div.appendChild(Content(task));

  return div;
};

const Task = (task) => {
  const article = document.createElement("article");
  article.className = "task";

  article.appendChild(Body(task));

  return article;
};

export default Task;
