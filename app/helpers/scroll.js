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

export const onWindowScroll = () => {
  const sections = document.querySelectorAll("section"); // або виберіть конкретні секції
  let currentSectionId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;

    if (
      sectionTop - window.scrollY <= 112 &&
      sectionTop + rect.height > window.scrollY
    ) {
      currentSectionId = section.id;
    }
  });

  localStorage.setItem("menu", currentSectionId || "Main");
};

export const onHeaderChange = (setState) => {
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      setState(true);
    } else {
      setState(false);
    }
  });
};

export const scrollToSection = (sectionId) => {
  // const isMobile = window.innerWidth < 768;
  // const headerHeight = isMobile ? 110 : 110;
  const section = document.querySelector(sectionId);

  if (section) {
    const sectionTop = section.offsetTop - 110;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
};
