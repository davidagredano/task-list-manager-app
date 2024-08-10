import Factory from "../../factory";
import StateManager from "../../state/state-manager";

import "./rename-project-dialog.css";

const factory = new Factory();
const stateManager = new StateManager();

const removeDialog = () => {
  document.querySelector("#rename-project-dialog").remove();
};

const Title = () => {
  const title = document.createElement("h3");
  title.classList.add("rename-project-dialog__title");
  title.innerHTML = "Rename project";

  return title;
};

const Input = (project) => {
  const input = document.createElement("input");
  input.classList.add("rename-project-dialog__input");
  input.id = "rename-project-name-input";
  input.placeholder = "Enter name";
  input.value = project.name;
  input.select();

  return input;
};

const Div = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
};

const AcceptBtn = (project) => {
  const acceptBtn = document.createElement("button");
  acceptBtn.classList.add("rename-project-dialog__btn");
  acceptBtn.innerHTML = "Done";

  acceptBtn.addEventListener("click", () => {
    const input = document.querySelector("#rename-project-name-input");

    if (input.value) {
      project.name = input.value;
      stateManager.updateProject(project);
      removeDialog();
    } else {
      alert("Project name is required");
    }
  });

  return acceptBtn;
};

const CancelBtn = () => {
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("rename-project-dialog__btn");
  cancelBtn.innerHTML = "Cancel";

  cancelBtn.addEventListener("click", removeDialog);

  return cancelBtn;
};

const RenameProjectDialog = (project) => {
  const dialog = document.createElement("dialog");
  dialog.id = "rename-project-dialog";
  dialog.classList.add("rename-project-dialog");

  const wrapper = dialog.appendChild(Div("rename-project-dialog__wrapper"));
  wrapper.appendChild(Title());
  wrapper.appendChild(Input(project));
  const btnGroup = wrapper.appendChild(Div("rename-project-dialog__btn-group"));
  btnGroup.appendChild(CancelBtn());
  btnGroup.appendChild(AcceptBtn(project));

  document.body.appendChild(dialog);

  return dialog;
};

export default RenameProjectDialog;
