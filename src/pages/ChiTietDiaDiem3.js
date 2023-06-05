import React from 'react'
import map from '../assets/map.png'
import '../styles/ChiTietDiaDiem3.css'
import holiday from '../assets/image 8.png'
import VinhHaLong from '../assets/vinhhalong.png'
import EoGio from '../assets/image 2.png'
import Layout from "components/layout/Layout";

function ChiTietDiaDiem3() {
  return (
    <Layout>
    <div className='ChiTietDiaDiem'>
      <div className='information'>
        <div className='chitiet'>
            CHI TIẾT CHUYẾN ĐI 
        </div>
        <div className='mucchuyendi'>
            <div className='name'>
                <img src={holiday}/><br/>
                <text className='ten'>HOLIDAY</text>
                <button className='addmota'>+ Thêm mô tả</button>
            </div>
            <div className='add'>
                <button className='them'>+</button>
            </div>
        </div>
        <div className='details'>
            <div className='chitietmuc'>
                <div className='thongtinchuyendi'>
                    <img src={VinhHaLong} className='imgdiadiem'/>
                    <div className='ten'>
                        VỊNH HẠ LONG
                    </div>
                    <div className='tinh'>
                        Quảng Ninh
                    </div>
                </div>
            </div>
            <div className='chitietmuc'>
                <div className='thongtinchuyendi'>
                    <img src={EoGio} className='imgdiadiem'/>
                    <div className='ten'>
                    KỲ CO - EO GIÓ
                    </div>
                    <div className='tinh'>
                        Bình Định
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='map'>
        <img src={map} className='imgmap'/>
    </div>
    </div>
    </Layout>
  )
}

export default ChiTietDiaDiem3
