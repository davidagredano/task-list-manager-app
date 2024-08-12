const Input = (className, id, placeholder, value = "", select = false) => {
  const input = document.createElement("input");
  input.className = className;
  input.id = id;
  input.placeholder = placeholder;
  input.value = value;
  if (select) input.select();

  return input;
};

export default Input;
