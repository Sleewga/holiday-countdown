import {UiController} from "./ui.js";
import {HolidayTimeService} from "./api.js";

const holidayTimeService = new HolidayTimeService();
const uiController = new UiController();

await startHolidayDaemon();

async function startHolidayDaemon(){
  uiController.showLoading();

  let countryCode = getChosenCountryCode();
  console.log(countryCode);
  const nextHoliday = await holidayTimeService.getNextHoliday(countryCode);

  uiController.showNextHolidayDate(nextHoliday.date);
  uiController.showNextHolidayName(nextHoliday.name);

  setInterval(() => {
    uiController.updateCountdown(nextHoliday.date);
  }, 1);
}

function getChosenCountryCode(){
  const chosenCountry = document.querySelector('input[name="country"]:checked').id;
  return chosenCountry;
}
