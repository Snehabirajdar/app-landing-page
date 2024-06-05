const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  
  ScrollReveal().reveal(".header__container .btn a", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  