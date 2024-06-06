import LocalStorageDataAccessor from "./data/local-storage";
import { initComponent } from "./components/utils";

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

initComponent("project-list-component", ProjectListItems());
initComponent("create-project-btn-component", CreateProjectBtn());
document.body.appendChild(CreateProjectDialog());
initComponent("project-board-component", ProjectBoard());
