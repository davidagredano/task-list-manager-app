import StateManager from "../../state/state-manager";

const stateManager = new StateManager();

const ProjectListItems = () => {
  const fragment = document.createDocumentFragment();

  stateManager.getProjects().forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-list__item");
    projectItem.innerHTML = project.name;
    fragment.appendChild(projectItem);
  });

  return fragment;
};

export default ProjectListItems;
