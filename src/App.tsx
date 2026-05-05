import { useRef, useEffect } from "react";
import { Hero, Learning, Products, Vision, Footer } from "./components";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  const productsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <Hero onExploreClick={scrollToProducts} />
      <Learning />
      <Products refProp={productsRef} />
      <Vision />
      <Footer />
    </>
  );
};

export default App;
