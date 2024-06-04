import {
  ProjectList,
  CreateProjectBtn,
  CreateProjectDialog,
} from "./components";
import { renderComponent } from "./components/utils";

import "./index.css";

renderComponent("project-list-component", ProjectList());
renderComponent("create-project-btn-component", CreateProjectBtn());
document.body.appendChild(CreateProjectDialog());
