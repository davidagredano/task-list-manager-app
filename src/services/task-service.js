class TaskService {
  constructor(dataAccessService) {
    this.dataAccessService = dataAccessService;
  }

  createTask(task) {
    this.dataAccessService.createTask(task);
  }

  toggleTaskCompletion(task) {
    this.dataAccessService.toggleTaskCompletion(task);
  }

  updateTask(task, newProjectId) {
    this.dataAccessService.updateTask(task, newProjectId);
  }

  deleteTask(task) {
    this.dataAccessService.deleteTask(task);
  }

  getTasksArray(projectId) {
    return this.dataAccessService.getTasksArray(projectId);
  }
}

export default TaskService;
