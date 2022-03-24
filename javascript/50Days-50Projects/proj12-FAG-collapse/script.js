// const toggles = document.querySelectorAll(".faq-toggle");

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.parentNode.classList.toggle("active");
//   });
// });

// jquery

$(".faq-toggle").each((toggle) => {
  $(".faq-toggle").click(toggle, function () {
    $(this).parent(".faq").toggleClass("active");
  });
});
