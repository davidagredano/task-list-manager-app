import LocalStorageService from "./services/local-storage-service";
import { initComponent } from "./components/utils";

import {
  ProjectListItems,
  CreateProjectBtn,
  CreateProjectDialog,
  ProjectBoard,
} from "./components";

import "./index.css";

const localStorageService = new LocalStorageService();

if (!localStorageService.getProjects()) {
  localStorageService.setDefaultProject();
}

initComponent("project-list-component", ProjectListItems());
initComponent("create-project-btn-component", CreateProjectBtn());
document.body.appendChild(CreateProjectDialog());
initComponent("project-board-component", ProjectBoard());
