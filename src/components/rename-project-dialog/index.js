import StateManager from "../../state/state-manager";

import { Input, Div, Button, Title } from "..";

import "./rename-project-dialog.css";

const stateManager = new StateManager();

const removeDialog = () => {
  document.querySelector("#rename-project-dialog").remove();
};

const acceptBtnHandler = (project) => {
  const input = document.querySelector("#rename-project-name-input");

  if (input.value) {
    project.name = input.value;
    stateManager.updateProject(project);
    removeDialog();
  } else {
    alert("Project name is required");
  }
};

const RenameProjectDialog = (project) => {
  const dialog = document.createElement("dialog");
  dialog.id = "rename-project-dialog";
  dialog.classList.add("rename-project-dialog");

  const wrapper = Div("rename-project-dialog__wrapper");
  const title = Title("rename-project-dialog__title", "Rename project");
  const input = Input(
    "rename-project-dialog__input",
    "rename-project-name-input",
    "Enter name",
    project.name,
    true
  );
  const btnGroup = Div("rename-project-dialog__btn-group");
  const cancelBtn = Button(
    "rename-project-dialog__btn",
    "Cancel",
    removeDialog
  );
  const acceptBtn = Button("rename-project-dialog__btn", "Done", () =>
    acceptBtnHandler(project)
  );

  dialog.appendChild(wrapper);
  wrapper.appendChild(title);
  wrapper.appendChild(input);
  wrapper.appendChild(btnGroup);
  btnGroup.appendChild(cancelBtn);
  btnGroup.appendChild(acceptBtn);

  document.body.appendChild(dialog);

  return dialog;
};

export default RenameProjectDialog;
