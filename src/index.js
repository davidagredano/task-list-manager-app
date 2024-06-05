import {
  ProjectListItems,
  CreateProjectBtn,
  CreateProjectDialog,
  ProjectBoard,
} from "./components";
import { renderComponent } from "./components/utils";

import "./index.css";

renderComponent("project-list-component", ProjectListItems());
renderComponent("create-project-btn-component", CreateProjectBtn());
document.body.appendChild(CreateProjectDialog());
renderComponent("project-board-component", ProjectBoard());
