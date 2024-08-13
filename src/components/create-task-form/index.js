import Factory from "../../factory";
import StateManager from "../../state/state-manager";

import { Input, Div, Button } from "..";

import "./create-task-form.css";

const factory = new Factory();
const stateManager = new StateManager();

const handleAcceptButton = (projectId) => {
  const titleInputId = "task-title-input-" + projectId;
  const title = document.getElementById(titleInputId).value;
  const descriptionInputId = "task-description-input-" + projectId;
  const description = document.getElementById(descriptionInputId).value;

  if (title) {
    const task = factory.createTask(title, description, null, null, projectId);
    stateManager.createTask(task);
  } else {
    alert("Task title is required");
  }
};

const handleCancelButton = () => {
  return;
};

const CreateTaskForm = (projectId) => {
  const form = document.createElement("form");
  form.className = "create-task-form";

  const titleInput = Input(
    "create-task-form__input",
    `task-title-input-${projectId}`,
    "Title"
  );
  const descriptionInput = Input(
    "create-task-form__input",
    `task-description-input-${projectId}`,
    "Description"
  );
  const btnGroup = Div("create-task-form__btn-group");
  const cancelBtn = Button("Cancel", handleCancelButton);
  const acceptBtn = Button("Add", () => handleAcceptButton(projectId));

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(btnGroup);
  btnGroup.appendChild(cancelBtn);
  btnGroup.appendChild(acceptBtn);

  return form;
};

export default CreateTaskForm;
