import { CreateProjectDialog, Button } from "..";

const showProjectDialog = () => {
  const dialog =
    document.querySelector("#create-project-dialog") || CreateProjectDialog();
  dialog.showModal();
};

const CreateProjectBtn = () => Button("Create new project", showProjectDialog);

export default CreateProjectBtn;
