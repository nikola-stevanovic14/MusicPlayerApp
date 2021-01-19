
const projectRootFolder = '../';
const path = require('path');

const { app, BrowserWindow, BrowserView } = require('electron');
const config = require(path.join(projectRootFolder, 'configuration/config.json'));
const windowsConfig = require(path.join(projectRootFolder, 'configuration/windowsConfig.json'));
const windowsApiRouter = require(path.join(projectRootFolder, config.windowsApi.windowsApiRouterLocation));

let windows = new Map();

app.setName('Music Player');

function createWindow (options) {
  options.properties.icon = path.join(config.images.imagesFileLocation, options.iconPath);
  const win = new BrowserWindow(options.properties);
  win.loadFile(path.join(config.views.viewsFolderLocation, options.windowViewFile));
  windows[options.key] = windowsApiRouter.getApi(options, win);
  if (options.openDevTools){
    win.webContents.openDevTools();
  }
  view = new BrowserView()
  view.webContents.loadURL(path.join(config.views.viewsFolderLocation, 'view.html'));
  win.setBrowserView(view)
  view.setBounds({ x: 150, y: 150, width: 300, height: 300 })
}


app.whenReady().then(()=>{
  return createWindow(windowsConfig.mainWindow);
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

