import "./src/assets/normalize.css";
import "./main.scss";
import switchButton from "./src/components/switchButton/switchButton";
import calculator from "./src/components/calculator/calculator";
import { renderPageById } from "./src/utils/utils";

window.onload = () => {
  renderPageById("app", calculator());
  renderPageById("app", switchButton());
};
