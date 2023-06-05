import React from 'react'
import ok from '../assets/ok.png'
import '../styles/Popup.css'
function popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='success'>
        <div className='closebtn'>
            <button className='close' onClick={()=>props.setTrigger(false)}>Close</button><br />
        </div>
        THÊM THÀNH CÔNG
      </div>
      <div className='img'>
        <img src={ok} className='okpopup'/>
      </div>
    </div>
  ) : "";
}

export default popup
