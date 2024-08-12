import StateManager from "../../state/state-manager";

import { Task, CreateTaskForm, RenameProjectBtn, Div, Button, Title } from "..";

import "./project.css";

const stateManager = new StateManager();

const deleteProjectBtnHandler = (project) =>
  stateManager.deleteProject(project);

const Project = (project) => {
  const article = document.createElement("article");
  article.className = "project";

  const header = document.createElement("header");
  header.className = "project__header";

  const title = Title("project__title", project.name);
  const projectActions = Div("project__actions");
  const renameProjectBtn = RenameProjectBtn(project);
  const deleteProjectBtn = Button("project__delete-btn", "Delete", () =>
    deleteProjectBtnHandler(project)
  );
  const taskList = Div("project__tasks");

  article.appendChild(header);
  header.appendChild(title);
  header.appendChild(projectActions);
  projectActions.appendChild(renameProjectBtn);
  projectActions.appendChild(deleteProjectBtn);
  article.appendChild(taskList);
  project.tasks.forEach((task) => {
    taskList.appendChild(Task(task));
  });
  article.appendChild(CreateTaskForm(project.id));

  return article;
};

export default Project;
