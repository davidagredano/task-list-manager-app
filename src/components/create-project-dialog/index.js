import Factory from "../../factory";
import StateManager from "../../state/state-manager";

import "./create-project-dialog.css";

const factory = new Factory();
const stateManager = new StateManager();

const closeDialog = () => {
  document.querySelector("#create-project-dialog").close();
};

const Title = () => {
  const title = document.createElement("h3");
  title.classList.add("create-project-dialog__title");
  title.innerHTML = "Create new project";

  return title;
};

const Input = () => {
  const input = document.createElement("input");
  input.classList.add("create-project-dialog__input");
  input.id = "project-name-input";
  input.placeholder = "Enter name";

  return input;
};

const Div = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
};

const AcceptBtn = () => {
  const acceptBtn = document.createElement("button");
  acceptBtn.classList.add("create-project-dialog__btn");
  acceptBtn.innerHTML = "Add";

  acceptBtn.addEventListener("click", () => {
    const input = document.querySelector("#project-name-input");
    const projectName = input.value;

    if (projectName) {
      const project = factory.createProject(projectName);
      stateManager.createProject(project);
      closeDialog();
      input.value = "";
    } else {
      alert("Project name is required");
    }
  });

  return acceptBtn;
};

const CancelBtn = () => {
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("create-project-dialog__btn");
  cancelBtn.innerHTML = "Cancel";

  cancelBtn.addEventListener("click", closeDialog);

  return cancelBtn;
};

const CreateProjectDialog = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "create-project-dialog";
  dialog.classList.add("create-project-dialog");

  const wrapper = dialog.appendChild(Div("create-project-dialog__wrapper"));
  wrapper.appendChild(Title());
  wrapper.appendChild(Input());
  const btnGroup = wrapper.appendChild(Div("create-project-dialog__btn-group"));
  btnGroup.appendChild(CancelBtn());
  btnGroup.appendChild(AcceptBtn());

  return dialog;
};

export default CreateProjectDialog;
