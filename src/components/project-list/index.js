import LocalStorageDataAccessor from "../../data/local-storage";
import ProjectController from "../../features/project-controller";

import "./project-list.css";

const dataAccessor = new LocalStorageDataAccessor();
const projectController = new ProjectController(dataAccessor);

const ProjectList = () => {
  const projectList = document.createElement("ul");
  projectList.classList.add("project-list__list");

  projectController.getProjects().forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-list__item");
    projectItem.innerHTML = project.name;
    projectList.appendChild(projectItem);
  });

  return projectList;
};

export default ProjectList;
