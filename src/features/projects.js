class Project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class ProjectController {
  constructor(dataAccessor) {
    this.dataAccessor = dataAccessor;
  }

  createProject(name) {
    const project = new Project(name);
    dataAccessor.createProject(project);
  }

  updateProject(id, name) {
    dataAccessor.updateProject(id, name);
  }

  deleteProject(id) {
    dataAccessor.deleteProject(id);
  }
}

export default ProjectController;
