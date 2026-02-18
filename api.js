export class HolidayTimeService{
  #apiLinkPrefix = "https://date.nager.at/api/v4/NextPublicHolidays/"

  async getAllHolidays(areaCode){
    areaCode = areaCode.toUpperCase();
    let fullUrl = this.#apiLinkPrefix + areaCode;

    let response = await fetch(fullUrl)
    let json = await response.json();

    let dates = [];
    for (let i = 0; i < json.length; i++){
      let holiday = {
        date: new Date(json[i].date),
        name: `${json[i].englishName} (${json[i].localName})`
      }
      dates.push(holiday);
    }

    return dates;
  }

  async getNextHoliday(areaCode){
    const dates = await this.getAllHolidays(areaCode);
    return dates[0];
  }
}
