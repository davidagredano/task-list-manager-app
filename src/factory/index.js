class Factory {
  constructor() {}

  createProject(name) {
    return {
      id: new Date().getTime().toString(),
      name,
      tasks: [],
    };
  }

  createTask(title, description, dueDate, priority, projectId) {
    return {
      id: new Date().getTime().toString(),
      title,
      description,
      dueDate,
      priority,
      completed: false,
      projectId,
    };
  }
}

export default Factory;
