import Factory from "../../factory";
import Controller from "../../controller";

import { Input, Div, Button } from "..";

import "./create-task-form.css";

const factory = new Factory();
const controller = new Controller();

const handleAcceptButton = (projectId) => {
  const titleInputId = "task-title-input-" + projectId;
  const title = document.getElementById(titleInputId).value;
  const descriptionInputId = "task-description-input-" + projectId;
  const description = document.getElementById(descriptionInputId).value;
  const dueDateInputId = "task-due-date-input-" + projectId;
  const dueDate = document.getElementById(dueDateInputId).value;
  const priorityInputId = "task-priority-input-" + projectId;
  const priority = document.getElementById(priorityInputId).value

  if (title) {
    const task = factory.createTask(title, description, dueDate, priority, projectId);
    controller.createTask(task);
  } else {
    alert("Task title is required");
  }

  document.querySelector(".create-task-form").reset();
};

const handleCancelButton = () => {
  const form = document.querySelector(".create-task-form");
  const addTaskBtn = document.querySelector(".project__add-task-btn");
  form.style.display = "none";
  addTaskBtn.style.display = "block";
};

const CreateTaskForm = (projectId) => {
  const form = document.createElement("form");
  form.className = "create-task-form";
  form.style.display = "none";

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
  const actionsGroup = Div("create-task-form__actions-group");
  
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.className = "create-task-form__input";
  dueDateInput.id = `task-due-date-input-${projectId}`;
  dueDateInput.name = "due-date";
  
  const prioritySelect = document.createElement("select");
  prioritySelect.className = "create-task-form__select";
  prioritySelect.id = `task-priority-input-${projectId}`;
  const option0 = document.createElement("option");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const option4 = document.createElement("option");
  option0.value = "4";
  option1.value = "1";
  option2.value = "2";
  option3.value = "3";
  option4.value = "4";
  option0.text = "Priority";
  option1.text = "Priority 1";
  option2.text = "Priority 2";
  option3.text = "Priority 3";
  option4.text = "Priority 4";

  const btnGroup = Div("create-task-form__btn-group");
  const cancelBtn = Button("Cancel", handleCancelButton);
  const acceptBtn = Button("Add", () => handleAcceptButton(projectId));

  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(actionsGroup);
  actionsGroup.appendChild(dueDateInput);
  actionsGroup.appendChild(prioritySelect);
  prioritySelect.appendChild(option0);
  prioritySelect.appendChild(option1);
  prioritySelect.appendChild(option2);
  prioritySelect.appendChild(option3);
  prioritySelect.appendChild(option4);
  form.appendChild(btnGroup);
  btnGroup.appendChild(cancelBtn);
  btnGroup.appendChild(acceptBtn);

  return form;
};

export default CreateTaskForm;
