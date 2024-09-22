import Controller from "../../controller";

import { Project } from "..";

import "./project-board.css";

const controller = new Controller();

const ProjectBoard = () => {
  const projectBoard = document.createElement("main");
  projectBoard.className = "project-board";

  const projects = controller.getProjectsArray();
  projects.forEach((project) => {
    projectBoard.appendChild(Project(project));
  });

  return projectBoard;
};

export default ProjectBoard;
