
const path = require('path');
const config = require('../../configuration/config.json');

const projectRootFolder = path.join(__dirname,'../../');


class MainWindowApi {
     constructor(window) {
          this.windowObject = window;
          this.setThumbar();
     }

     setThumbar() {
          try {
               var res = this.windowObject.setThumbarButtons([
                    {
                         tooltip: 'Previous',
                         icon: path.join(projectRootFolder, config.images.imagesFileLocation, 'left-transparent.png'),
                         click() { console.log('button1 clicked') }
                    },
                    {
                         tooltip: 'Play',
                         icon: path.join(projectRootFolder, config.images.imagesFileLocation, 'play-transparent.png'),
                         click() { console.log('button2 clicked.') }
                    },
                    {
                         tooltip: 'Next',
                         icon: path.join(projectRootFolder, config.images.imagesFileLocation, 'right-transparent.png'),
                         click() { console.log('button2 clicked.') }
                    }
               ]);
          }
          catch (err) {
               console.log(err);
          }
     }
}

module.exports = MainWindowApi;