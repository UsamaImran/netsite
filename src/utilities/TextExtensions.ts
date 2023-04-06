export const NumberBoolToText = (number:number|undefined) => {
    switch(number){
        case 0:
            return "Not Active";
        case 1:
            return "Active";
        default:
            return "";
    }
  }

export const StringToShortDate = (value:string | undefined) => {
    return value ? (new Date(value)).toLocaleDateString('en-US') : "";
}

export const StringOrDefault = (value:string|undefined|null) => {
    return value || "";
}

export const NumberOrDefault = (value:number|undefined|null) => {
    return value || 0;
}