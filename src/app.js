import Alpine from "alpinejs";
import headerComponent from "./components/header";

window.Alpine = Alpine;

Alpine.data('headerComponent', headerComponent);
Alpine.start();