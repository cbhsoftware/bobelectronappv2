const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Create the window when Electron finishes initialization
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });


    // Load your website (URL or local HTML file)
    mainWindow.loadURL('https://learningonscreen.ac.uk/ondemand');  // You can also load a local HTML file (e.g., mainWindow.loadFile('index.html'))
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});