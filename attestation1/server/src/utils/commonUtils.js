class CommonUtils {
    changeDateFormat(stringDate) {
        const date = new Date(Date.parse(stringDate));
        const day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
        const month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth();
        return `${day}.${month}.${date.getFullYear()}`;
    }
}

module.exports = new CommonUtils();
