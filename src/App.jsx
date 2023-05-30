
import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {
  function handleQrCode(event){
    setLink(event.target.value)
    handleGenerate(event.target.value)
  }

  function handleGenerate(link){
    QRCodeLink.toDataURL(link, {
      width:600,
      margin: 3
    }, function(err, url){
      setQrcodeLink(url)
    })
  }
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  return (
    <div className='container'>
      <div className="caixaQrCode">
        <div className="qrCode">
          <QRCode value={link} />
        </div>
        <hr />
        <div className="caixaInput">
          <input className='input' placeholder='' value={link} onChange={(event) => handleQrCode(event)}  />
        </div>
        <div className="download">
        <a href={qrcodeLink} download={`qrcode.png`}><button> Baixar QRCode</button></a>
        </div>
      </div>
    </div>
  )
}

export default App
