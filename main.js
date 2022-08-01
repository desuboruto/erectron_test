const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow();

  mainWindow.loadURL("file://" + path.join(__dirname, "index.html"));

  mainWindow.on("closed", () => {
    app.quit();
  });
});
