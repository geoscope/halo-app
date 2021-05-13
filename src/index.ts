import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let mainWindow: BrowserWindow | null

function createWindow() {
  // TODO: place the window in the last position, or centered if not opened before
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600,
    title: "Halo",
    webPreferences: {
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL(`file://${path.join(__dirname, './index.html')}`,);

  mainWindow.on('closed', () => {
    mainWindow = null
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});
