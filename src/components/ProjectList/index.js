import LocalStorageDataAccessor from "../../data/local-storage";
import ProjectController from "../../features/project-controller";

const dataAccessor = new LocalStorageDataAccessor();
const projectController = new ProjectController(dataAccessor);

const ProjectList = () => {
  const fragment = document.createDocumentFragment();

  const projectListTitle = document.createElement("h2");
  projectListTitle.classList.add("project-list__title");
  projectListTitle.innerHTML = "Projects";
  fragment.appendChild(projectListTitle);

  const projectList = document.createElement("ul");
  projectList.classList.add("project-list__list");
  fragment.appendChild(projectList);

  projectController.getProjects().forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-list__item");
    projectItem.innerHTML = project.name;
    projectList.appendChild(projectItem);
  });

  return fragment;
};

export default ProjectList;
