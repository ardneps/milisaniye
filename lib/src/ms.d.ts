declare type Unit = "Years" | "Year" | "Yrs" | "Yr" | "Y" | "Yıl" | "Weeks" | "Week" | "W" | "Hafta" | "Days" | "Day" | "D" | "Gün" | "Hours" | "Hour" | "Hrs" | "Hr" | "H" | "Saat" | "Minutes" | "Minute" | "Mins" | "Min" | "M" | "Dakika" | "Dk" | "Seconds" | "Second" | "Secs" | "Sec" | "s" | "Saniye" | "Sn" | "Milliseconds" | "Millisecond" | "Msecs" | "Msec" | "Ms";
declare type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;
export declare type StringValue = `${number}` | `${number}${UnitAnyCase}` | `${number} ${UnitAnyCase}`;
interface Options {
    birim?: string;
}
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
export declare const ms: (value: StringValue, options?: Options) => number | undefined;
export {};
//# sourceMappingURL=ms.d.ts.map