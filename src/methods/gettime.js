
function getTime() {
    const oldTime = `2021-4-15 0:0:0`;

    const time1 = new Date(Date.now());
    const time2 = new Date(oldTime);

    const time = time1.getTime() - time2.getTime();

    const year = parseInt(time / 31536000000);
    const month = parseInt((time - 31536000000 * year) / 2592000000);
    const day = parseInt(
        (time - 31536000000 * year - 2592000000 * month) / 86400000
    );
    const hour = parseInt(
        (time - 31536000000 * year - 2592000000 * month - 86400000 * day) /
        3600000
    );
    const minute = parseInt(
        (time -
            31536000000 * year -
            2592000000 * month -
            86400000 * day -
            3600000 * hour) /
        60000
    );
    const second = parseInt(
        (time -
            31536000000 * year -
            2592000000 * month -
            86400000 * day -
            3600000 * hour -
            60000 * minute) /
        1000
    );

    const ourtime = `我们已经在一起${year}年${month}个月${day}天${hour}小时${minute}分钟${second}秒啦`;

    return ourtime;
}


export {getTime}