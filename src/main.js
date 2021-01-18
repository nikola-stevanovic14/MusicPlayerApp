
const projectRootFolder = '../';
const path = require('path');

const { app, BrowserWindow } = require('electron');
const config = require(path.join(projectRootFolder, 'configuration/config.json'));
const windowsConfig = require(path.join(projectRootFolder, 'configuration/windowsConfig.json'));
const windowsApiRouter = require(path.join(projectRootFolder, config.windowsApi.windowsApiRouterLocation));

let windows = new Map();



function createWindow (options) {
  const win = new BrowserWindow(options.properties);
  win.loadFile(path.join(config.views.viewsFolderLocation, options.windowViewFile));
  windows[options.key] = windowsApiRouter.getApi(options, win);
  if (options.openDevTools)
    win.webContents.openDevTools();
}


app.whenReady().then(function(){
  return createWindow(windowsConfig.mainWindow)
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow(windowsConfig.mainWindow);
  }
});