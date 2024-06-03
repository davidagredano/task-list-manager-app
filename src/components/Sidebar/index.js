import "./Sidebar.css";

const Sidebar = () => {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar__container");

  const sidebarNav = document.createElement("nav");
  sidebarNav.classList.add("sidebar__nav");

  sidebarContainer.appendChild(sidebarNav);

  return sidebarContainer;
};

export default Sidebar;
