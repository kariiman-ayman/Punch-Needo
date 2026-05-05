import "./Footer.css";
import logo from "../assets/transparent_logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__heading">{t("footer.heading")}</div>

      <div className="footer__decsription">{t("footer.desc")}</div>

      <div className="footer__buttons">
        <a
          href="https://www.youtube.com/@PunchNeedo"
          target="_blank"
          className="footer__button"
        >
          <i className="fa-brands fa-youtube footer__button--icon"></i>
          <span className="footer__button--description">
            {t("footer.youtube")}
          </span>
        </a>

        <a
          href="https://www.tiktok.com/@punch.needo"
          target="_blank"
          className="footer__button"
        >
          <i className="fa-brands fa-tiktok footer__button--icon"></i>
          <span className="footer__button--description">
            {t("footer.tiktok")}
          </span>
        </a>
      </div>

      <img src={logo} alt="Punch Needo Logo" />

      <div className="footer__slogan">{t("footer.slogan")}</div>

      <div className="footer__copyright">{t("footer.copyright")}</div>
    </footer>
  );
};

export default Footer;
