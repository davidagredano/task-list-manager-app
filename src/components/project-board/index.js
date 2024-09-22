import { Button, CreateTaskForm, Div, Project } from "..";

import "./project-board.css";

const addTaskBtnHandler = () => {
  const form = document.querySelector(".create-task-form");
  const addTaskBtn = document.querySelector(".project__add-task-btn");
  form.style.display = "flex";
  addTaskBtn.style.display = "none";
};

const ProjectBoard = (project) => {
  const projectBoard = document.createElement("main");
  projectBoard.className = "project-board";

  const projectContainer = Div("project__container");
  const projectElement = Project(project);
  const addTaskBtn = Button("Add Task", () => addTaskBtnHandler(), "project__add-task-btn");
  const createTaskForm = CreateTaskForm(project.id);

  projectBoard.appendChild(projectContainer);
  projectContainer.appendChild(projectElement);
  projectBoard.appendChild(addTaskBtn);
  projectBoard.appendChild(createTaskForm);

  return projectBoard;
};

export default ProjectBoard;
