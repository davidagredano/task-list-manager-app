class ProjectService {
  constructor(dataAccessService) {
    this.dataAccessService = dataAccessService;
  }

  createProject(project) {
    this.dataAccessService.createProject(project);
  }

  updateProject(project) {
    this.dataAccessService.updateProject(project);
  }

  deleteProject(project) {
    this.dataAccessService.deleteProject(project);
  }

  getProjects() {
    return this.dataAccessService.getProjects();
  }
}

export default ProjectService;
