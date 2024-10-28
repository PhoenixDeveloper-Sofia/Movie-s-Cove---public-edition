
const useTimeConvert = (timeLength) => {
    let hours = Math.trunc(timeLength/60);
    let minutes = timeLength % 60;
    return [hours+ " " + 'ч' + " "+ " "+ minutes+ " "+ 'мин', hours, minutes];
};

export default useTimeConvert;