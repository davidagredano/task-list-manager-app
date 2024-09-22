import Controller from "../../controller";

import { Project } from "..";

import "./project-board.css";

const controller = new Controller();

const ProjectBoard = (project) => {
  const projectBoard = document.createElement("main");
  projectBoard.className = "project-board";

  projectBoard.appendChild(Project(project));

  return projectBoard;
};

export default ProjectBoard;
