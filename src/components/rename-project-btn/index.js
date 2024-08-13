import { RenameProjectDialog, Button } from "..";

const renameProjectBtnHandler = (project) => {
  const dialog = RenameProjectDialog(project);
  dialog.showModal();
};

const RenameProjectBtn = (project) =>
  Button("Rename", () => renameProjectBtnHandler(project));

export default RenameProjectBtn;
