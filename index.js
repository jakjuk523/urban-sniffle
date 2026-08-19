const play = document.getElementById("btn1");
const grade = document.getElementById("btn2");


function play_game() {
    window.open("https://evoworld.io/");
}

function grade_web() {
  let star_grade = prompt("Оцените сайт от 1 до 10");

  if (star_grade === null) {
    return;
  }

  let gradeNumber = Number(star_grade);

  while (star_grade.trim() === "" || isNaN(gradeNumber) || gradeNumber < 1 || gradeNumber > 10) {
    star_grade = prompt("Неверно! Пожалуйста, оцените сайт от 1 до 10");
    
    if (star_grade === null) {
      return;
    }
    
    gradeNumber = Number(star_grade);
  }

  alert("Спасибо за отзыв!");
}


play.addEventListener('click', () => play_game());
grade.addEventListener('click', () => grade_web());