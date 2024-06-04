const renderComponent = (entryPointElementId, component) => {
  const entryPoint = document.getElementById(entryPointElementId);
  entryPoint.appendChild(component);
};

const refreshComponent = (entryPointElementId, component) => {
  const entryPoint = document.getElementById(entryPointElementId);
  entryPoint.innerHTML = "";
  entryPoint.appendChild(component);
};

export { renderComponent, refreshComponent };
