const moment = require('moment');

class CommonUtils {
    changeDateFormat(stringDate) {
        return moment(stringDate).format('DD.MM.YYYY');
    }
    dateToIsoString(stringDate) {
        return moment(stringDate).format();
    }
}

module.exports = new CommonUtils();
