const s = 1000, m = s * 60, h = m * 60, d = h * 24, w = d * 7, y = d * 365.25;

export const convert = (milliseconds: number, format: string): number | undefined => {

    switch (format) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
        case "yıl":
            return Number((milliseconds / y).toFixed(6));
        case "weeks":
        case "week":
        case "w":
        case "hafta":
            return Number((milliseconds / w).toFixed(6));
        case "days":
        case "day":
        case "d":
        case "gün":
            return Number((milliseconds / d).toFixed(6));
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
        case "saat":
            return Number((milliseconds / h).toFixed(6));
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
        case "dakika":
        case "dk":
            return Number((milliseconds / m).toFixed(6));
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
        case "saniye":
        case "sn":
            return Number((milliseconds / s).toFixed(6));
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
        case "milisaniye":
            return Number((milliseconds).toFixed(6));
        default:
            return undefined;
    };

};