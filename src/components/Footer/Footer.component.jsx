import React from "react";
import "./footer.css";

export default function FooterComponent() {
  return (
    <div id="footer">
      <div className="wrap-body">
        <div className="row">
          <div className="col-6">
            <div className="footer-content-left">
              <div className="footer-content-left-name">
                <span>Pham Nguyen Store</span>
              </div>
              <div className="content-item mt-4">
                <span>Ấp Công Điền, Xã Vĩnh Trạch, TP. Bạc Liêu, Bạc Liêu</span>
              </div>
              <div className="content-item">
                <span>1900 55 88 32</span>
              </div>
              <div className="content-item">
                <span>trucanhkd@gmail.com</span>
              </div>
              <div className="content-item">
                <span>
                  M.S.D.N: 1900 29 5157, ngày cấp: 20/09/2004, Cấp tại Sở Kế
                  hoạch và Đầu tư tỉnh Bạc Liêu
                </span>
              </div>
              <div className="footer-content-left-name-1">
                <span>CHI NHÁNH I</span>
              </div>
              <div className="content-item-address-1">
                <span>53F/5 Tôn Đức Thắng, P.7, TP. Bạc Liêu, Bạc Liêu</span>
              </div>
              <div className="content-item-address-1-1">
                <span>(0291)3 959.959 - (Fax: (0291)3 959.979) </span>
              </div>
              <div className="footer-logo">
                <div className="footer-logo-right">
                  <div className="footer-bottom-logo">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="footer-content-right">
              <div className="footer-content-right-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32353.737649555267!2d105.74352915825283!3d10.009736827068247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgQ-G6p24gVGjGoQ!5e0!3m2!1svi!2s!4v1652448780634!5m2!1svi!2s"
                  width={577}
                  height={181}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="footer-content-right-1">
                <span>CHÍNH SÁCH</span>
              </div>
              <div className="footer-content-right-bottom">
                <div className="footer-item-1">
                  <span>Chính sách thanh toán</span>
                </div>
                <div className="footer-item-1">
                  <span>Chính sách vận chuyển giao nhận</span>
                </div>
                <div className="footer-item-1">
                  <span>Chính sách đổi/trả và hoàn tiền</span>
                </div>
                <div className="footer-item-1">
                  <span>Chính sách bảo vệ thông tin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
