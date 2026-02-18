export class UiController {
  #holidayDate;
  #holidayName;
  #holidayCountdown;

  constructor() {
    this.#holidayDate = document.getElementById("holiday-date");
    this.#holidayName = document.getElementById("holiday-name");
    this.#holidayCountdown = document.getElementById("countdown");
  }

  showLoading() {
    this.#holidayName.innerText = "Loading...";
    this.#holidayDate.innerText = "Loading...";
    this.#holidayCountdown.innerText = "Loading...";
  }

  showNextHolidayDate(holidayDate) {
    const dayOfMonth = holidayDate.getDate();
    const month = holidayDate.getMonth() + 1;
    const year = holidayDate.getFullYear();

    this.#holidayDate.innerText = `[${dayOfMonth}.${month}.${year}]`;
  }

  showNextHolidayName(holidayName) {
    this.#holidayName.innerText = holidayName;
  }

  updateCountdown(holidayDate) {
    const diff = holidayDate - new Date();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    this.#holidayCountdown.innerText = `${days} : ${hours} : ${minutes} : ${seconds}`;
  }
}
