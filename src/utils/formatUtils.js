export default {

    formatTimer(timerValue) {

        const hours = Math.floor(timerValue / 60 / 60)
        const minutes = Math.floor((timerValue - hours * 60 * 60) / 60)
        const seconds = timerValue - hours * 60 * 60 - minutes * 60

        function pad(num) {
            return (num + '').length == 1 ? '0' + num : num;
        }

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }
}