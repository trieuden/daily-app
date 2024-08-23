export default class TimestampConverter {
    static convert(timestamp) {
        const date = new Date(timestamp);

        const minutes = date.getMinutes();
        const hours = date.getHours();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const newFullDate = minutes + ':' + hours + ' ' + day + '-' + month + '-' + year;
        const newDate =  day + '-' + month + '-' + year;
        const newHours = minutes + ':' + hours ;
        const newMonth = month + '-' + year     

        return {
            newFullDate,
            newHours,
            newDate,
            newMonth
        };
    }
}
