import Controller from "../../controller";

import { Task, RenameProjectBtn, Div, Button, Title } from "..";

import "./project.css";

const controller = new Controller();

const Project = (project) => {
  const article = document.createElement("article");
  article.className = "project";

  const header = document.createElement("header");
  header.className = "project__header";

  const title = Title("project__title", project.name);
  const projectActions = Div("project__actions");
  const renameProjectBtn = RenameProjectBtn(project);
  const deleteProjectBtn = Button("Delete", () => controller.deleteProject(project));
  const taskList = Div("project__tasks");
  const tasks = controller.getTasksArray(project.id);

  article.appendChild(header);
  header.appendChild(title);
  header.appendChild(projectActions);
  projectActions.appendChild(renameProjectBtn);
  projectActions.appendChild(deleteProjectBtn);
  article.appendChild(taskList);
  tasks.forEach((task) => {
    taskList.appendChild(Task(task));
  });

  return article;
};

export default Project;
