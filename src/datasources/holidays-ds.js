import  $  from 'ajax';


const HOLIDAY_API = "https://holidayapi.com/v1/holidays?";

var getHolidays = (year, countryCode) => {
    return new Promise((resolve, reject) => {
        if (year === "" || countryCode === "")
            resolve([]);


        let url = HOLIDAY_API + "country=" + countryCode + "&year=" + year;

        $.get({
            url: url,
            type: "GET",
            succes: function(response) {
              //TODO: Treat response as suitable for this app
              resolve(response);
            }
        });
    })
}

export default {
    getHolidays: getHolidays
}
