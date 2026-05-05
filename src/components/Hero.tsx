import "./Hero.css";
import logo from "../assets/transparent_logo.png";
import { useTranslation } from "react-i18next";

type HeroProps = {
  onExploreClick: () => void;
};

const Hero = ({ onExploreClick }: HeroProps) => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar");

  return (
    <div className="hero">
      <div className="hero__lang">
        {isArabic ? (
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        ) : (
          <button onClick={() => i18n.changeLanguage("ar")}>ع</button>
        )}
      </div>

      <div className="hero__logo">
        <img src={logo} alt="Punch Needo Logo" />
      </div>

      <div className="hero__slogan">{t("hero.slogan")}</div>

      <button className="hero__button" onClick={onExploreClick}>
        {t("hero.button")}
      </button>
    </div>
  );
};

export default Hero;
