document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm.");
});

document.addEventListener("DOMContentLoaded", () => {
  const eduCards = document.querySelectorAll(".education-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  eduCards.forEach(card => observer.observe(card));
});
