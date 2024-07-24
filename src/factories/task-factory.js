const createTask = (title, description, dueDate, priority, projectId) => {
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

export default createTask;
