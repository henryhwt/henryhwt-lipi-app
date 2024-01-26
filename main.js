const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  win.loadFile('./renderer/index.html');
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



// require("dotenv").config({path:"./loginDetails.env"})

// console.log(process.env.USER)
// console.log(process.env.PASS)




// let test = window.document.querySelectorAll(".ember-checkbox")

// test.forEach(a => a.click())


// let test4 = window.document.querySelector(".invitee-picker__results-container")

// // works!
// test4.scroll(0, 1000)
                    
// test4.scrollBy(0, window.innerHeight);



// const testarray = Array.from(test);
// testarray.slice(0,25)

// finalarray.forEach(a => a.click())
