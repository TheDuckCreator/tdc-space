import React from 'react'
import Logo from '../Asset/tdc_logo.png'
export default function Footer(params) {
  return (
    <footer className="footer has-background-dark has-text-light mitrlight">
      <div className="container acenter ">
        <img
          src={Logo}
          className="image footer-logo"
          alt="The Duck Creator Logo"
        />
        <p>
          เพราะเราเชื่อว่าการแสดงออกมาจะทำให้สถานการณ์ดีกว่าการที่มีใครบางคนต้องเจ็บ
          <br />
          และเชื่อเรื่องการเปิดใจรับฟังคือพื้นฐานของการอยู่ร่วมกัน
          <br />
          The Duck Creator - Create For Better, License based on Creative
          Commons 4.0 BY
        </p>
      </div>
    </footer>
  )
}
