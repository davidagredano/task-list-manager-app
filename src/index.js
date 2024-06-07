import { initComponent } from "./state/state-manager";

import {
  ProjectListItems,
  CreateProjectBtn,
  CreateProjectDialog,
  ProjectBoard,
} from "./components";

import "./index.css";


initComponent("project-list-component", ProjectListItems());
initComponent("create-project-btn-component", CreateProjectBtn());
document.body.appendChild(CreateProjectDialog());
initComponent("project-board-component", ProjectBoard());
