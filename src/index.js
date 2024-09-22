import {
  ProjectListItems,
  CreateProjectBtn,
  ProjectBoard,
} from "./components";

import Controller from "./controller";

import "./index.css";

const controller = new Controller();

controller.initComponent("#project-list-component", ProjectListItems());
controller.initComponent("#create-project-btn-component", CreateProjectBtn());
controller.initComponent("#project-board-component", ProjectBoard());
