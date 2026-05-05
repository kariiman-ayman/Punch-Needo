import "./Vision.css";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="vision">
      <div className="vision__title">{t("vision.title")}</div>

      <div className="vision__description">
        <div className="vision__description--intro">{t("vision.intro")}</div>

        <div className="vision__description--outro">{t("vision.outro")}</div>
      </div>
    </div>
  );
};

export default Vision;
