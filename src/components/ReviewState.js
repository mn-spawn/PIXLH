import React, {useState}  from 'react'
import TodoList from './TodoList';
import QRCode from 'qrcode';
import {data} from "./TodoList";



function ReviewState() {
  console.log({data})

  const[qrcode, setQrcode] = useState('')
  const CreateQRCode = () =>{
    QRCode.toDataURL('http://localhost:3000/review',{
      width: 500,
      margin: 3
    },(err,url) => {
      setQrcode(url)
    })
  }
    return (
      <div>
<<<<<<< Updated upstream
        <h1>QR Code</h1>

        {data.map(data=> <ul><a href={"http://"+ data.text} target="_blank" rel="noopener noreferrer">{data.text}</a></ul>)}
        <button onClick={CreateQRCode}>Generate</button>
        <br></br>
        {qrcode && <> 
        <img src={qrcode}/>
        <br></br>     
        <a href={qrcode} download="qrcode.png"> Download</a>
        </>}
=======
          {data.map(data=> <h2>{data.text}</h2>)}
>>>>>>> Stashed changes
      </div>
    
    )
}

export default ReviewState