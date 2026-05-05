import "./Learning.css";
import { useTranslation } from "react-i18next";

const Learning = () => {
  const { t } = useTranslation();

  return (
    <div className="learning">
      <iframe
        src="https://www.youtube.com/embed/nwJZ8NSly7k?si=2KTTeYaY4LThd4Ae"
        className="learning__video"
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="learning__description">
        <div className="learning__description__title">
          {t("learning.title")}
        </div>

        <p className="learning__description__body">{t("learning.body")}</p>
      </div>
    </div>
  );
};

export default Learning;
