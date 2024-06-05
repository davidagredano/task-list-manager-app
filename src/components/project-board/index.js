import LocalStorageDataAccessor from "../../data/local-storage";
import ProjectController from "../../features/project-controller";

import { Project } from "..";

import "./project-board.css";

const dataAccessor = new LocalStorageDataAccessor();
const projectController = new ProjectController(dataAccessor);

const ProjectBoard = () => {
  const projectBoard = document.createElement("main");
  projectBoard.classList.add("project-board");

  projectController.getProjects().forEach((project) => {
    projectBoard.appendChild(Project(project));
  });

  return projectBoard;
};

export default ProjectBoard;
