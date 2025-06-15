import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaAddressBook,
  FaIntercom,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light pt-5">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary">
          {/* Brand and About */}
          <div className="col-md-4">
            <h4 className="text-danger fw-bold">CTT Hotel</h4>
            <p className="text-muted">
              Cung cấp trải nghiệm lưu trú đẳng cấp, thoải mái và tiện nghi với
              dịch vụ tận tâm 24/7.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="mb-3 fw-semibold">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/rooms" className="footer-link">
                  Phòng nghỉ
                </Link>
              </li>
              <li>
                <Link to="/existing-rooms" className="footer-link">
                  Quản lý phòng
                </Link>
              </li>
              <li>
                <Link to="/find-booking" className="footer-link">
                  Tìm đặt phòng
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5 className="mb-3 fw-semibold">Liên hệ</h5>

            <div className="contact-card mt-3">
              <div className="d-flex">
                <FaMapLocation className="text-primary me-2 mt-1" />
                <div>
                  <strong className="text-white">Địa chỉ:</strong>
                  <br />
                  <p className="text-light mb-1">123 Đường ABC, Q.1, TP.HCM</p>
                </div>
              </div>
            </div>

            <div className="contact-card mt-3">
              <div className="d-flex">
                <FaEnvelope className="text-primary me-2 mt-1" />
                <div>
                  <strong className="text-white">Email liên hệ:</strong>
                  <br />
                  <a
                    href="mailto:booking@ctthotel.com"
                    className="text-light text-decoration-none d-block hover-text"
                  >
                    booking@ctthotel.com
                  </a>
                  <a
                    href="mailto:info@ctthotel.com"
                    className="text-light text-decoration-none d-block hover-text"
                  >
                    info@ctthotel.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card mt-3">
              <div className="d-flex">
                <FaPhone className="text-primary me-2 mt-1" />
                <div>
                  <strong className="text-white">Hotline đặt phòng:</strong>
                  <br />
                  <a
                    href="mailto:booking@ctthotel.com"
                    className="text-light text-decoration-none d-block hover-text"
                  >
                    +84 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-3">
          <p className="mb-0 text-white">
            © 2025 CTT Hotel. All rights reserved.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-section {
          width: 100%;
          margin: 0;
        }

        .social-icon {
          background-color: #495057;
          color: white;
          padding: 10px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
          font-size: 16px;
          width: 40px;
          height: 40px;
        }

        .social-icon:hover {
          background-color: #dc3545;
        }

        .footer-link {
          color: #adb5bd;
          text-decoration: none;
          display: block;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .footer-link:hover,
        .hover-text:hover {
          color: #ffffff !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
