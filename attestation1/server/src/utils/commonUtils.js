class CommonUtils {
    changeDateFormat(stringDate) {
        const date = new Date(Date.parse(stringDate));
        const day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
        const month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth();
        return `${day}.${month}.${date.getFullYear()}`;
    }
    dateToIsoString(stringDate) {
        const arr = stringDate.split('.');
        const date = new Date(+arr[2], +arr[1] - 1, +arr[0]);
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    }
}

module.exports = new CommonUtils();
