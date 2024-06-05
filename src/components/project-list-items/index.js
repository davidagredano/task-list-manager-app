import LocalStorageDataAccessor from "../../data/local-storage";
import ProjectController from "../../features/project-controller";

const dataAccessor = new LocalStorageDataAccessor();
const projectController = new ProjectController(dataAccessor);

const ProjectListItems = () => {
  const fragment = document.createDocumentFragment();

  projectController.getProjects().forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-list__item");
    projectItem.innerHTML = project.name;
    fragment.appendChild(projectItem);
  });

  return fragment;
};

export default ProjectListItems;
