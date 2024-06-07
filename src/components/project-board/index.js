import StateManager from "../../state/state-manager";

import { Project } from "..";

import "./project-board.css";

const stateManager = new StateManager();

const ProjectBoard = () => {
  const projectBoard = document.createElement("main");
  projectBoard.classList.add("project-board");

  stateManager.getProjects().forEach((project) => {
    projectBoard.appendChild(Project(project));
  });

  return projectBoard;
};

export default ProjectBoard;
