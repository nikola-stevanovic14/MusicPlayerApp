const path = require('path');
const projectRootFolder = path.join(__dirname, '../../');
const config = require(path.join(projectRootFolder, 'configuration/config/'));
const winConfig = require(path.join(projectRootFolder, 'configuration/windowsConfig/'));
const MainWindowApi = require(path.join(projectRootFolder, config.windowsApi.mainWindowApiLocation));

function getApi(windowOptions, win) {
     try {
          switch (windowOptions.key) {
               case winConfig.mainWindow.key:
                    return new MainWindowApi(win)
               default:
                    return null
          }
     }
     catch (err) {
          console.log(err);
     }
}


module.exports = {
     getApi
}
