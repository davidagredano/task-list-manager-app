const CreateProjectBtn = () => {
  const createProjectBtn = document.createElement("button");
  createProjectBtn.classList.add("create-project-btn");
  createProjectBtn.innerHTML = "Create new project";

  createProjectBtn.addEventListener("click", () => {
    alert("Create project button clicked");
  });

  return createProjectBtn;
};

export default CreateProjectBtn;
