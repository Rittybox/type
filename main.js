const {app, globalShortcut, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

const windowConfig = {
    width: 800,
    height: 600,
    frame: false
};

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow (){
    // Create the browser window.
    mainWindow = new BrowserWindow(windowConfig);

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.webContents.openDevTools({mode: 'undocked'});

    // Emitted when the window is closed.
    mainWindow.on('closed', function (){
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function (){
    // globalShortcut.register('CommandOrControl+X', () => {
    //   console.log('CommandOrControl+X is pressed')
    // })
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function (){
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function (){
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
