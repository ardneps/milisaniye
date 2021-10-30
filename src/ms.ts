import {convert} from '../util/convert';

declare type Unit =
    "Years"
    | "Year"
    | "Yrs"
    | "Yr"
    | "Y"
    | "Yıl"
    | "Weeks"
    | "Week"
    | "W"
    | "Hafta"
    | "Days"
    | "Day"
    | "D"
    | "Gün"
    | "Hours"
    | "Hour"
    | "Hrs"
    | "Hr"
    | "H"
    | "Saat"
    | "Minutes"
    | "Minute"
    | "Mins"
    | "Min"
    | "M"
    | "Dakika"
    | "Dk"
    | "Seconds"
    | "Second"
    | "Secs"
    | "Sec"
    | "s"
    | "Saniye"
    | "Sn"
    | "Milliseconds"
    | "Millisecond"
    | "Msecs"
    | "Msec"
    | "Ms";
declare type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;
export declare type StringValue = `${number}` | `${number}${UnitAnyCase}` | `${number} ${UnitAnyCase}`;

interface Options {
    birim?: string;
}
const s = 1000, m = s * 60, h = m * 60, d = h * 24, w = d * 7, y = d * 365.25;
/**
 * `value` değişkenini belirtilen zaman birimine çevirir (varsayılan birim: milisaniye)
 *
 * Seçenekler:
 *
 *  - `birim` (kullanılabilir birimlerin tümüne [buradan](https://www.npmjs.com/package/milisaniye#birimler) ulaşabilirsiniz)
 *
 * @param {String} value
 * @param {Object} [options]
 */

export const ms = (value: StringValue, options?: Options): number | undefined => {

    if (!value) return;
    if (value.length > 1000) return;
    7

    const match = /^(-?(?:\d+)?\.?\d+) *(milisaniye?|msec?|msecs?|millisecond?|milliseconds?|ms?|sec?|secs?|seconds?|second?|saniye?|sn?|s?|minutes?|minute?|mins?|min?|dakika?|dk?|m?|hours?|hour?|hrs?|hr?|h?|saat?|days?|day?|gün?|d?|weeks?|week?|hafta?|w?|years?|year?|yrs?|yr?|yıl?|y)?$/i.exec(String(value).toLocaleUpperCase("tr").toLocaleLowerCase("tr")) ??
        /^(-?(?:\d+)?\.?\d+) *(milisaniye?|msec?|msecs?|millisecond?|milliseconds?|ms?|sec?|secs?|seconds?|second?|saniye?|sn?|s?|minutes?|minute?|mins?|min?|dakika?|dk?|m?|hours?|hour?|hrs?|hr?|h?|saat?|days?|day?|gün?|d?|weeks?|week?|hafta?|w?|years?|year?|yrs?|yr?|yıl?|y)?$/i.exec(String(value).toLocaleUpperCase("en-US").toLocaleLowerCase("en-US"));

    if (!match) return;

    const n = parseFloat(match[1]);
    const type_ = (match[2] || "ms").toLocaleLowerCase("tr");

    const birim: string = options?.birim ?? "ms";

    if (isNaN(n)) return;

    if (type_ === "years" || type_ === "year" || type_ === "yrs" || type_ === "yr" || type_ === "y" || type_ === "yıl") {
        return convert(n * y, birim);
    } else if (type_ === "weeks" || type_ === "week" || type_ === "w" || type_ === "hafta") {
        return convert(n * w, birim);
    } else if (type_ === "days" || type_ === "day" || type_ === "d" || type_ === "gün") {
        return convert(n * d, birim);
    } else if (type_ === "hours" || type_ === "hour" || type_ === "hrs" || type_ === "hr" || type_ === "h" || type_ === "saat") {
        return convert(n * h, birim);
    } else if (type_ === "minutes" || type_ === "minute" || type_ === "mins" || type_ === "min" || type_ === "m" || type_ === "dakika" || type_ === "dk") {
        return convert(n * m, birim);
    } else if (type_ === "seconds" || type_ === "second" || type_ === "secs" || type_ === "sec" || type_ === "s" || type_ === "saniye" || type_ === "sn") {
        return convert(n * s, birim);
    } else if (type_ === "milliseconds" || type_ === "millisecond" || type_ === "msecs" || type_ === "msec" || type_ === "ms" || type_ === "milisaniye") {
        return convert(n, birim);
    } else {
        return undefined;
    }
    
};
