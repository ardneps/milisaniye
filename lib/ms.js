"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ms = void 0;
var convert_1 = require("./convert");
;
var s = 1000, m = s * 60, h = m * 60, d = h * 24, w = d * 7, y = d * 365.25;
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
var ms = function (value, options) {
    var _a, _b;
    if (!value)
        return;
    if (value.length > 1000)
        return;
    var match = (_a = /^(-?(?:\d+)?\.?\d+) *(milisaniye?|msec?|msecs?|millisecond?|milliseconds?|ms?|sec?|secs?|seconds?|second?|saniye?|sn?|s?|minutes?|minute?|mins?|min?|dakika?|dk?|m?|hours?|hour?|hrs?|hr?|h?|saat?|days?|day?|gün?|d?|weeks?|week?|hafta?|w?|years?|year?|yrs?|yr?|yıl?|y)?$/i.exec(value.toLocaleUpperCase("tr").toLocaleLowerCase("tr"))) !== null && _a !== void 0 ? _a : /^(-?(?:\d+)?\.?\d+) *(milisaniye?|msec?|msecs?|millisecond?|milliseconds?|ms?|sec?|secs?|seconds?|second?|saniye?|sn?|s?|minutes?|minute?|mins?|min?|dakika?|dk?|m?|hours?|hour?|hrs?|hr?|h?|saat?|days?|day?|gün?|d?|weeks?|week?|hafta?|w?|years?|year?|yrs?|yr?|yıl?|y)?$/i.exec(value.toLocaleUpperCase("en-US").toLocaleLowerCase("en-US"));
    if (!match)
        return;
    var n = parseFloat(match[1]);
    var type_ = (match[2] || "ms").toLocaleLowerCase("tr");
    var birim = (_b = options === null || options === void 0 ? void 0 : options.birim) !== null && _b !== void 0 ? _b : "ms";
    if (isNaN(n))
        return;
    switch (type_) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
        case "yıl":
            return (0, convert_1.convert)(n * y, birim);
        case "weeks":
        case "week":
        case "w":
        case "hafta":
            return (0, convert_1.convert)(n * w, birim);
        case "days":
        case "day":
        case "d":
        case "gün":
            return (0, convert_1.convert)(n * d, birim);
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
        case "saat":
            return (0, convert_1.convert)(n * h, birim);
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
        case "dakika":
        case "dk":
            return (0, convert_1.convert)(n * m, birim);
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
        case "saniye":
        case "sn":
            return (0, convert_1.convert)(n * s, birim);
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
        case "milisaniye":
            return (0, convert_1.convert)(n, birim);
        default:
            return undefined;
    }
    ;
};
exports.ms = ms;
//# sourceMappingURL=ms.js.map