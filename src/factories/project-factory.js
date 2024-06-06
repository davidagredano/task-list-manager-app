const createProject = (name) => {
  return {
    id: new Date().getTime().toString(),
    name,
    tasks: [],
  };
};

export default createProject;
