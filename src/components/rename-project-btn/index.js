import { RenameProjectDialog, Button } from "..";

import "./rename-project-btn.css";

const renameProjectBtnHandler = (project) => {
  const dialog = RenameProjectDialog(project);
  dialog.showModal();
};

const RenameProjectBtn = (project) =>
  Button("rename-project-btn", "Rename", () =>
    renameProjectBtnHandler(project)
  );

export default RenameProjectBtn;
