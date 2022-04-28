

let questions = document.getElementsByClassName("question");
let i;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    let caret = this.firstElementChild
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      caret.style.transform = "rotate(0deg)"
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      caret.style.transform = "rotate(180deg)"
    }
  });
}