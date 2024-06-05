import LocalStorageDataAccessor from "../../data/local-storage";
import ProjectController from "../../features/project-controller";

import { refreshComponent } from "../utils";
import { ProjectListItems } from "..";

const dataAccessor = new LocalStorageDataAccessor();
const projectController = new ProjectController(dataAccessor);

const closeDialog = () => {
  document.querySelector("#create-project-dialog").close();
};

const CreateProjectDialogTitle = () => {
  const title = document.createElement("h3");
  title.classList.add("create-project-dialog__title");
  title.innerHTML = "Create new project";

  return title;
};

const CreateProjectDialogInput = () => {
  const input = document.createElement("input");
  input.id = "project-name-input";
  input.classList.add("create-project-dialog__input");
  input.placeholder = "Enter name";

  return input;
};

const CreateProjectDialogAcceptBtn = () => {
  const acceptBtn = document.createElement("button");
  acceptBtn.classList.add("create-project-dialog__accept-btn");
  acceptBtn.innerHTML = "Add";

  acceptBtn.addEventListener("click", () => {
    const input = document.querySelector("#project-name-input");
    const projectName = input.value;

    if (projectName) {
      const id = new Date().getTime().toString();
      projectController.createProject(id, projectName);
      refreshComponent("project-list-component", ProjectListItems());
      closeDialog();
      input.value = "";
    } else {
      alert("Project name is required");
    }
  });

  return acceptBtn;
};

const CreateProjectDialogCancelBtn = () => {
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("create-project-dialog__cancel-btn");
  cancelBtn.innerHTML = "Cancel";

  cancelBtn.addEventListener("click", closeDialog);

  return cancelBtn;
};

const CreateProjectDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "create-project-dialog";
  dialog.classList.add("create-project-dialog");

  dialog.appendChild(CreateProjectDialogTitle());
  dialog.appendChild(CreateProjectDialogInput());
  dialog.appendChild(CreateProjectDialogCancelBtn());
  dialog.appendChild(CreateProjectDialogAcceptBtn());

  return dialog;
};

export default CreateProjectDialog;
