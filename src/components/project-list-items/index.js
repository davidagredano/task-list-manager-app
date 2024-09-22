import Controller from "../../controller";

import { Button, RenameProjectBtn } from "..";

import "./project-list-item.css";

const controller = new Controller();

const ProjectListItems = () => {
  const fragment = document.createDocumentFragment();

  controller.getProjectsArray().forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.className = "project-list__item";

    const projectItemName = Button(project.name, () => controller.updateProjectBoard(project));
    projectItemName.innerText = project.name;

    projectItem.appendChild(projectItemName);
    projectItem.appendChild(RenameProjectBtn(project));

    fragment.appendChild(projectItem);
  });

  return fragment;
};

export default ProjectListItems;
