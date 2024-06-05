import LocalStorageDataAccessor from "./data/local-storage";
import { renderComponent } from "./components/utils";

import {
  ProjectListItems,
  CreateProjectBtn,
  CreateProjectDialog,
  ProjectBoard,
} from "./components";

import "./index.css";

const dataAccessor = new LocalStorageDataAccessor();

if (!dataAccessor.getProjects()) {
  dataAccessor.setDefaultProject();
}

renderComponent("project-list-component", ProjectListItems());
renderComponent("create-project-btn-component", CreateProjectBtn());
document.body.appendChild(CreateProjectDialog());
renderComponent("project-board-component", ProjectBoard());
