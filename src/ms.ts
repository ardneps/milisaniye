import { convert } from "../util/convert";

declare type Unit = "Years" | "Year" | "Yrs" | "Yr" | "Y" | "Yıl" | "Weeks" | "Week" | "W" | "Hafta" | "Days" | "Day" | "D" | "Gün" | "Hours" | "Hour" | "Hrs" | "Hr" | "H" | "Saat" | "Minutes" | "Minute" | "Mins" | "Min" | "M" | "Dakika" | "Dk" | "Seconds" | "Second" | "Secs" | "Sec" | "s" | "Saniye" | "Sn" | "Milliseconds" | "Millisecond" | "Msecs" | "Msec" | "Ms";
declare type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;
export declare type StringValue = `${number}` | `${number}${UnitAnyCase}` | `${number} ${UnitAnyCase}`;

interface Options {
    birim?: string;
};

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
    if (value.length > 1000) return;7

    const match = /^(-?(?:\d+)?\.?\d+) *(milisaniye?|msec?|msecs?|millisecond?|milliseconds?|ms?|sec?|secs?|seconds?|second?|saniye?|sn?|s?|minutes?|minute?|mins?|min?|dakika?|dk?|m?|hours?|hour?|hrs?|hr?|h?|saat?|days?|day?|gün?|d?|weeks?|week?|hafta?|w?|years?|year?|yrs?|yr?|yıl?|y)?$/i.exec(String(value).toLocaleUpperCase("tr").toLocaleLowerCase("tr")) ??
        /^(-?(?:\d+)?\.?\d+) *(milisaniye?|msec?|msecs?|millisecond?|milliseconds?|ms?|sec?|secs?|seconds?|second?|saniye?|sn?|s?|minutes?|minute?|mins?|min?|dakika?|dk?|m?|hours?|hour?|hrs?|hr?|h?|saat?|days?|day?|gün?|d?|weeks?|week?|hafta?|w?|years?|year?|yrs?|yr?|yıl?|y)?$/i.exec(String(value).toLocaleUpperCase("en-US").toLocaleLowerCase("en-US"));

    if (!match) return;

    const n = parseFloat(match[1]);
    const type_ = (match[2] || "ms").toLocaleLowerCase("tr");

    const birim = options?.birim ?? "ms";

    if (isNaN(n)) return;

    switch (type_) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
        case "yıl":
            return convert(n * y, birim);
        case "weeks":
        case "week":
        case "w":
        case "hafta":
            return convert(n * w, birim);
        case "days":
        case "day":
        case "d":
        case "gün":
            return convert(n * d, birim);
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
        case "saat":
            return convert(n * h, birim);
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
        case "dakika":
        case "dk":
            return convert(n * m, birim);
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
        case "saniye":
        case "sn":
            return convert(n * s, birim);
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
        case "milisaniye":
            return convert(n, birim);
        default:
            return undefined;
    };
};