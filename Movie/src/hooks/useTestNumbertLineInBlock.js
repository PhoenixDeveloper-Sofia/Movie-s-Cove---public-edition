
const useTesNumbertLineInBlock = ( element ) => {
    if ( element.scrollHeight > Math.round(element.clientHeight)){
        return true;
    }
    else {
        return false;
    }
}
export default useTesNumbertLineInBlock;