import {UiController} from "./ui.js";
import {HolidayTimeService} from "./api.js";

const holidayTimeService = new HolidayTimeService();
const uiController = new UiController();

await startHolidayDaemon();

async function startHolidayDaemon(){
  uiController.showLoading();

  const nextHoliday = await holidayTimeService.getNextHoliday("CZ");

  uiController.showNextHolidayDate(nextHoliday.date);
  uiController.showNextHolidayName(nextHoliday.name);

  setInterval(() => {
    uiController.updateCountdown(nextHoliday.date);
  }, 1);
}
