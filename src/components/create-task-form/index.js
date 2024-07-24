import Factory from "../../factory";
import StateManager from "../../state/state-manager";

import "./create-task-form.css";

const factory = new Factory();
const stateManager = new StateManager();

const Input = (id, placeholder) => {
  const input = document.createElement("input");
  input.classList.add("create-task-form__input");
  input.id = id;
  input.placeholder = placeholder;

  return input;
};

const Div = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
};

const Button = (text, onClick) => {
  const btn = document.createElement("button");
  btn.classList.add("create-task-form__btn");
  btn.textContent = text;
  btn.type = "button";

  btn.addEventListener("click", onClick);

  return btn;
};

const AcceptBtn = (projectId) => {
  const acceptBtn = Button("Add", () => {
    const titleInputId = "task-title-input-" + projectId;
    const title = document.getElementById(titleInputId).value;
    const descriptionInputId = "task-description-input-" + projectId;
    const description = document.getElementById(descriptionInputId).value;

    if (title) {
      const task = factory.createTask(
        title,
        description,
        null,
        null,
        projectId
      );
      stateManager.createTask(task);
    } else {
      alert("Task title is required");
    }
  });

  return acceptBtn;
};

const CreateTaskForm = (projectId) => {
  const form = document.createElement("form");
  form.classList.add("create-task-form");

  form.appendChild(Input("task-title-input-" + projectId, "Title"));
  form.appendChild(Input("task-description-input-" + projectId, "Description"));
  const btnGroup = form.appendChild(Div("create-task-form__btn-group"));
  btnGroup.appendChild(Button("Cancel"));
  btnGroup.appendChild(AcceptBtn(projectId));

  return form;
};

export default CreateTaskForm;
