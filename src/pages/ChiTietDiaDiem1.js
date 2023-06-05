import React from 'react'
import '../styles/ChiTietDiaDiem1.css'
import Layout from "components/layout/Layout";
import { NavLink } from "react-router-dom";

function ChiTietDiaDiem1() {
  return (
    <Layout>
    <div className='ChiTietDiaDiem1'>
      <div className='MoTa'>
        <div className='motadiadiem'>
            <text className='MotaDiaDiem'>QUY NHƠN</text><br/><br/>
            <text className='MotaDiaDiem'>KỲ CO - EO GIÓ</text><br/><br/>
            <text className='MotaDD'>THIÊN ĐƯỜNG BIỂN ĐẢO - ĐẸP QUÊN LỐI VỀ</text><br/>
            <NavLink to='/'>
                <button className='ThemChuyenDi' >
                    THÊM CHUYẾN ĐI
                </button>
            </NavLink>
        </div>
      </div>
      <div className='contentMoTa'>
        <button className='textMoTa'>
            MÔ TẢ
        </button>
        <div className='content'>
            Kỳ Co – Eo gió là bức tranh hùng vĩ mà thiên nhiên ưu ái ban tặng cho tỉnh Bình Định mà du lịch Quy Nhơn thì chắc chắn bạn sẽ không thể bỏ qua những địa điểm thú vị này. Eo Gió là một trong những địa điểm du lịch Quy Nhơn nổi tiếng nằm ở xã Nhơn Lý, tỉnh Bình Định, cách trung tâm thành phố Quy Nhơn khoảng 20km về phía Đông Bắc. Là những dãy núi đá bao bọc quanh bờ biển, Eo Gió mang vẻ đẹp thiên nhiên hoang sơ kỳ vĩ đảm bảo sẽ làm say mê bất kỳ du khách nào đến với Quy Nhơn.
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default ChiTietDiaDiem1
