export function checkInputValue(input, number = false){
    if(input.value.trim() != ""){
        if(number && isFinite(input.value)){
            return input.value;
        }
        return input.value;
    }
    return false;
}