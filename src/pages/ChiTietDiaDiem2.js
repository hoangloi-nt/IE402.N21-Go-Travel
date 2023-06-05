import React from 'react'
import '../styles/ChiTietDiaDiem2.css'
import imgchuyendi from '../assets/image 8.png'
import imgsummer from '../assets/summer.png'
import imgsea from '../assets/sea.png'
import Popup from '../components/Popup'
import { useState } from 'react'
import Layout from "components/layout/Layout";

function ChiTietDiaDiem2() {
    const[buttonPopup,setButtonPopup] = useState(false);
  return (
    <Layout>

    <div className='ChiTietDiaDiem2'>
        <div className='header'>
            TẤT CẢ CÁC CHUYẾN ĐI 
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    </Popup>
        <div className='listchuyendi'>
            <div className='chuyendi'>
                <div className='imgchuyendi'>
                    <img src={imgchuyendi}/>
                </div>
                
                <div className='motachuyendi'>
                    <a href='ChiTietDiaDiem3' className='hrefchuyendi'>
                        <div className='namechuyendi'>
                            HOLIDAY
                        </div>
                    </a>
                    <br/>
                    <div className='muc'>
                        Bao gồm : 1 mục
                    </div><br/>
                    <button onClick={()=>setButtonPopup(true)} className='btnthem'>
                        Thêm vào chuyến đi
                    </button>
                    
                </div>
            </div>
            <div className='chuyendi'>
                <div className='imgchuyendi'>
                    <img src={imgsummer}/>
                </div>
                <div className='motachuyendi'>
                    <a href='ChiTietDiaDiem3' className='hrefchuyendi'>
                        <div className='namechuyendi'>
                            SUMMER
                        </div>
                    </a>
                    <br/>
                    <div className='muc'>
                        Bao gồm : 2 mục
                    </div><br/>
                    <button onClick={()=>setButtonPopup(true)} className='btnthem'>
                        Thêm vào chuyến đi
                    </button>
                    
                </div>
            </div>
            <div className='chuyendi'>
                <div className='imgchuyendi'>
                    <img src={imgsea}/>
                </div>
                <div className='motachuyendi'>
                    <a href='ChiTietDiaDiem3' className='hrefchuyendi'>
                        <div className='namechuyendi'>
                            VITAMIN SEA
                        </div>
                    </a>
                    <br />
                    <div className='muc'>
                        Bao gồm : 1 mục
                    </div><br/>
                    <button onClick={()=>setButtonPopup(true)} className='btnthem'>
                        Thêm vào chuyến đi
                    </button>
                  
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default ChiTietDiaDiem2
