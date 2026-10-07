import { useState } from "react";
import "./Hero.css";
import "./hero-blur.css";
import logo from "../assets/transparent_logo.png";
import { useTranslation } from "react-i18next";

type HeroProps = {
  onExploreClick: () => void;
};

const Hero = ({ onExploreClick }: HeroProps) => {
  const { t, i18n } = useTranslation();
  const [bgReady, setBgReady] = useState(false);

  const isArabic = i18n.language.startsWith("ar");

  return (
    <div className="hero">
      <picture>
        <source
          type="image/avif"
          sizes="100vw"
          srcSet="/images/hero-1280.avif 1280w, /images/hero-1920.avif 1920w, /images/hero-2560.avif 2560w"
        />
        <source
          type="image/webp"
          sizes="100vw"
          srcSet="/images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w, /images/hero-2560.webp 2560w"
        />
        <img
          className={bgReady ? "hero__bg hero__bg--ready" : "hero__bg"}
          src="/images/hero-1920.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          onLoad={() => setBgReady(true)}
        />
      </picture>

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
