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

  const scrolledDown = window.scrollY > 80;
  setScroll(scrolledDown);
};

export const scrollToSection = (sectionId) => {
  const isMobile = window.innerWidth < 768;
  const headerHeight = isMobile ? 112 : 88;
  const section = document.querySelector(sectionId);

  if (section) {
    const sectionTop = section.offsetTop - headerHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
};
