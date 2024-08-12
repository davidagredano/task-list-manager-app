import { CreateProjectDialog, Button } from "..";

import "./create-project-btn.css";

const showProjectDialog = () => {
  const dialog =
    document.querySelector("#create-project-dialog") || CreateProjectDialog();
  dialog.showModal();
};

const CreateProjectBtn = () =>
  Button("create-project-btn", "Create new project", showProjectDialog);

export default CreateProjectBtn;
