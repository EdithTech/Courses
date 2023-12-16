// change navbar on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

const faqs = document.querySelectorAll(".faq");

console.log(faqs);

// faqs[0].addEventListener("click", function(){ alert("Hello World!"); })

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    console.log("clicked");
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");

    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});
