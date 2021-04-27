console.log("index.js: loaded");
import { App } from "./src/App.js";
const app = new App();
window.addEventListener("load", () => {
    app.mount();
});
// ページがアンロードされたときのイベント
window.addEventListener("unload", () => {
    app.unmount();
});


