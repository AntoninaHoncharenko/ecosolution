export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const toggleScroll = (condition) => {
  if (condition) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

export const handleHeaderScroll = (setState) => {
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      setState(true);
    } else {
      setState(false);
    }
  });
};
