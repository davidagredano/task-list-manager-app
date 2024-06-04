const renderComponent = (entryPointElementId, component) => {
  const entryPoint = document.getElementById(entryPointElementId);
  entryPoint.appendChild(component);
};

export { renderComponent };
