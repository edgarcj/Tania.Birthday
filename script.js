const containerEl = document.getElementById("countdown");
const tituloEl = document.getElementById("titulo");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "17 Jun 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  if (totalSeconds <= 0) {
    containerEl.innerHTML = `<p class="texto">🎊🍾 ¡Feliz cumpleaños Tania🎊, festejemos tu vida, hoy y siempre! ⏩ No importa lo que pase, sé que siempre voy a contar contigo y tu conmigo. ¡Feliz cumpleaños a una persona tan excepcional como tú! ⏩ Eres esa amiga que esta en las buenas y en las malas, gracias por tantos años de amistad 🎂 🎉 <br>💐❤️🤗<br> <strong>Te Quiero Mucho Tania </strong>  </p> `;

    tituloEl.innerHTML = `<strong>🎁!!Felicidades Tania¡¡🍰</strong>`;
  }
}

//función que agrega un 0 a los numeros menos que 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();
setInterval(countdown, 1000);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro de sw exitoso", reg))
    .catch((err) => console.warn("error al tratar de registrar el sw", err));
}
