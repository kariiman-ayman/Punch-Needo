import "./Products.css";
import type { RefObject } from "react";
import { useTranslation } from "react-i18next";

import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";

type ProductsProps = {
  refProp: RefObject<HTMLDivElement | null>;
};

const Products = ({ refProp }: ProductsProps) => {
  const { t } = useTranslation();

  return (
    <div className="products" ref={refProp}>
      <div className="products__description">
        <div className="products__description__title">
          {t("products.title")}
        </div>

        <p className="products__description__body">{t("products.body")}</p>
      </div>

      <div className="products__images">
        <img src={design1} className="img img--1" alt="design" />
        <img src={design2} className="img img--2" alt="design" />
        <img src={design3} className="img img--3" alt="design" />
        <img src={design4} className="img img--4" alt="design" />
        <img src={design5} className="img img--5" alt="design" />
      </div>
    </div>
  );
};

export default Products;
