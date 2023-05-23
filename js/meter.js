document.addEventListener("DOMContentLoaded", function () {
  var audit = document.querySelector(".audit");
  var audit__form = document.querySelector(".audit__form");

  // console.log(audit);
  // console.log(audit__form);

  audit__form.addEventListener("click", function setVar() {
    var count = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;
    // console.log(count);
    audit.style.setProperty("--counter", count);
  });
});
