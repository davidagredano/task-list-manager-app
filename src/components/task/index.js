const Task = (task) => {
  const article = document.createElement("article");
  article.className = "task";
  article.textContent = task.title;

  return article;
};

export default Task;
