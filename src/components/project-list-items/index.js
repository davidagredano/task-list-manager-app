import LocalStorageService from "../../services/local-storage-service";
import ProjectService from "../../services/project-service";

const localStorageService = new LocalStorageService();
const projectService = new ProjectService(localStorageService);

const ProjectListItems = () => {
  const fragment = document.createDocumentFragment();

  projectService.getProjects().forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-list__item");
    projectItem.innerHTML = project.name;
    fragment.appendChild(projectItem);
  });

  return fragment;
};

export default ProjectListItems;
