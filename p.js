window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
      ".about-section, .services-section, .about-detailed-section, .service-box, .video, .gallery-item, .contact"
    );

    elements.forEach(el => el.classList.add("scroll-animate"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    document.querySelectorAll(".scroll-animate").forEach(el => {
      observer.observe(el);
    });
  });

  