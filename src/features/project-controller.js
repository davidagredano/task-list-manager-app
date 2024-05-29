class ProjectController {
  constructor(dataAccessor) {
    this.dataAccessor = dataAccessor;
  }

  createProject(id, name) {
    this.dataAccessor.createProject(id, name);
  }

  updateProject(id, name) {
    this.dataAccessor.updateProject(id, name);
  }

  deleteProject(id) {
    this.dataAccessor.deleteProject(id);
  }
}

export default ProjectController;
