export const dateFormatter = (time: number) => {
    if (!time) {
        return
    }
    // console.log(time.length)
    time = time.toString().length <= 10 ? parseInt(`${time}000`) : time
    const date = new Date(time)
    // console.log(time, date)
    const dateNumber = (number: number) => number < 10 ? `0${number}` : number
    const [Y, M, D, h, m, s] = [
        date.getFullYear(),
        dateNumber(date.getMonth() + 1),
        dateNumber(date.getDate()),
        dateNumber(date.getHours()),
        dateNumber(date.getMinutes()),
        dateNumber(date.getSeconds()),
    ]

    return `${Y}-${M}-${D} ${h}:${m}:${s}`
}
