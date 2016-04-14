import app from 'app';
import BrowserWindow from 'browser-window';
import electronConnect from 'electron-connect';
import {ipcMain} from 'electron';

ipcMain.on('message', function(event, arg) {
  console.log('message received by main process');
  console.log(arg);  // prints "hello from renderer!"
  event.sender.send('reply', 'hello from main!');
});

let mainWindow = null;
let client = null;
// console.log('hey is everything working?');

app.on('window-all-closed', () => {
  app.quit();
});

app.on('will-quit', () => {
  console.log('quitting');
});

/**
 * When the electron app is ready, sort out the browser window
 * @param  {String} event event for app to listen for
 * @param  {function} callback function called when event occurs
 */
app.on('ready', () => {
  //Menu.setApplicationMenu(appMenu);
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // this needs to be changed for production
  // you could automate this using gulp-replace
  // https://github.com/lazd/gulp-replace
  client = electronConnect.client.create(mainWindow);

  // console.log('here is the file name...');
  // console.log('file://' + __dirname + '/views/index.html');
  // file:///root/DEV/JS/noted/app/views/index.html
  mainWindow.loadURL('file://' + __dirname + '../../../views/index.html');
  mainWindow.openDevTools();
  /**
   * When the main window is called, set unused variable to null
   * @param  {String} event event for mainWindow to listen for
   * @param  {Function} callback function called when event occurs
   */
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});