import { RenameProjectDialog } from "..";

import "./rename-project-btn.css";

const RenameProjectBtn = (project) => {
  const button = document.createElement("button");
  button.classList.add("rename-project-btn");
  button.innerHTML = "Rename";

  button.addEventListener("click", () => {
    const dialog = RenameProjectDialog(project);
    dialog.showModal();
  });

  return button;
};

export default RenameProjectBtn;
