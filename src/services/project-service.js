class ProjectService {
  constructor(dataAccessService) {
    this.dataAccessService = dataAccessService;
  }

  createProject(id, name) {
    this.dataAccessService.createProject(id, name);
  }

  updateProject(id, name) {
    this.dataAccessService.updateProject(id, name);
  }

  deleteProject(id) {
    this.dataAccessService.deleteProject(id);
  }

  getProjects() {
    return this.dataAccessService.getProjects();
  }
}

export default ProjectService;
