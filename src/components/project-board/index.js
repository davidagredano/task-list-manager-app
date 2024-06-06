import LocalStorageService from "../../services/local-storage-service";
import ProjectService from "../../services/project-service";

import { Project } from "..";

import "./project-board.css";

const localStorageService = new LocalStorageService();
const projectService = new ProjectService(localStorageService);

const ProjectBoard = () => {
  const projectBoard = document.createElement("main");
  projectBoard.classList.add("project-board");

  projectService.getProjects().forEach((project) => {
    projectBoard.appendChild(Project(project));
  });

  return projectBoard;
};

export default ProjectBoard;
