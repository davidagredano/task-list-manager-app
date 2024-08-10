import { CreateProjectDialog } from "..";

import "./create-project-btn.css";

const CreateProjectBtn = () => {
  const createProjectBtn = document.createElement("button");
  createProjectBtn.classList.add("create-project-btn");
  createProjectBtn.innerHTML = "Create new project";

  createProjectBtn.addEventListener("click", () => {
    const dialog =
      document.querySelector("#create-project-dialog") || CreateProjectDialog();
    dialog.showModal();
  });

  return createProjectBtn;
};

export default CreateProjectBtn;
