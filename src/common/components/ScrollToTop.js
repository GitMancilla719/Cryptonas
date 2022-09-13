import { useEffect, useState } from "react";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showTopBtn && (
        <button
          className="fixed right-10 bottom-10 rounded-xl bg-amp-card border-2 border-amber-500 p-3 duration-700"
          onClick={() => goToTop()}
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
