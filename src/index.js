const fs = require('fs')
const request = require('request')

const down = () => {
  download('https://picsum.photos/200', './1.jpg', () => { console.log('done') })
  download('https://picsum.photos/200', './2.jpg', () => { console.log('done') })
}

const download = (url, path, cb) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on('close', cb)
  })
}

////////

const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('closed', () => { win = null })

  //down()
}

app.on('activate', () => { //mac: 비활성에서 활성화
  if(win === null) createWindow()
})
app.on('ready', createWindow) //초기화 완료
app.on('window-all-closed', () => { //모든 윈도우 닫힘
  if(process.platform !== 'darwin') app.quit()
})