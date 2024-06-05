import "./project.css";

const Title = (projectData) => {
  const title = document.createElement("h2");
  title.classList.add("project__title");
  title.textContent = projectData.name;

  return title;
};

const Header = (projectData) => {
  const header = document.createElement("header");
  header.classList.add("project__header");

  header.appendChild(Title(projectData));

  return header;
};

const TaskList = (projectData) => {
  const taskList = document.createElement("div");
  taskList.className = "project__tasks";

  const tasks = projectData.tasks;
  tasks.forEach((task) => {
    const taskItem = document.createElement("article");
    taskItem.className = "task";
    taskItem.textContent = task.title;
    taskList.appendChild(taskItem);
  });

  return taskList;
};

const Project = (projectData) => {
  const project = document.createElement("article");
  project.classList.add("project");

  project.appendChild(Header(projectData));
  project.appendChild(TaskList(projectData));

  return project;
};

export default Project;
