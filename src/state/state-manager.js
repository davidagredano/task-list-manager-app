const initComponent = (entryPointElementId, component) => {
  const entryPoint = document.getElementById(entryPointElementId);
  entryPoint.appendChild(component);
};

const updateComponent = (entryPointElementId, component) => {
  const entryPoint = document.getElementById(entryPointElementId);
  entryPoint.innerHTML = "";
  entryPoint.appendChild(component);
};

export { initComponent, updateComponent };
