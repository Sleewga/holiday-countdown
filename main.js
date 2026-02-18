import { UiController } from "./ui.js";
import { HolidayTimeService } from "./api.js";

const holidayTimeService = new HolidayTimeService();
const uiController = new UiController();
const radioButtons = document.getElementById("country-choice");

let countdownInterval = null;

await startHolidayDaemon();

radioButtons.addEventListener("click", () => {
  if (event.target.name == "country"){
    startHolidayDaemon();
  }
});

async function startHolidayDaemon() {
  uiController.showLoading();

  let countryCode = getChosenCountryCode();
  const nextHoliday = await holidayTimeService.getNextHoliday(countryCode);

  uiController.showNextHolidayDate(nextHoliday.date);
  uiController.showNextHolidayName(nextHoliday.name);
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    uiController.updateCountdown(nextHoliday.date);
  }, 1000);
}

function getChosenCountryCode() {
  const chosenCountry = document.querySelector(
    'input[name="country"]:checked',
  ).id;
  return chosenCountry;
}
