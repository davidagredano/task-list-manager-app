class TaskService {
  constructor(dataAccessService) {
    this.dataAccessService = dataAccessService;
  }

  createTask(id, title, description, dueDate, priority, projectId) {
    this.dataAccessService.createTask(
      id,
      title,
      description,
      dueDate,
      priority,
      projectId
    );
  }

  toggleTaskCompletion(id, projectId) {
    this.dataAccessService.toggleTaskCompletion(id, projectId);
  }

  updateTask(
    id,
    projectId,
    title,
    description,
    dueDate,
    priority,
    newProjectId
  ) {
    this.dataAccessService.updateTask(
      id,
      projectId,
      title,
      description,
      dueDate,
      priority,
      newProjectId
    );
  }

  deleteTask(id, projectId) {
    this.dataAccessService.deleteTask(id, projectId);
  }
}

export default TaskService;
