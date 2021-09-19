# milisaniye

Zaman bildiren çeşitli yazılı ifadeleri milisaniyeye çevirmek için bu paketi kullanabilirsiniz.

## Örnekler

```js
ms("2 days") // 172800000
ms("1d") // 86400000
ms("10h") // 36000000
ms("2.5 hrs") // 9000000
ms("5 saat") // 18000000
ms("2h") // 7200000
ms("10 dakika") // 600000
ms("1m") // 60000
ms("5s") // 5000
ms("1y") // 31557600000
ms("2.5 saniye") // 2500
ms("100") // 100
ms("-3 days") // -259200000
ms("-1h") // -3600000
ms("-200") // -200
```

### Birimini belirterek çevirme işlemi

```js
ms("10 dakika", { birim: "saniye" }) // 600
ms("2.5 saat", { birim: "dakika" }) // 150
ms("-5 gün", { birim: "saat" }) // -120
ms("1 yıl", { birim: "sn" }) // 31557600
```

## Birimler

| milisaniye (varsayılan birim) | saniye | dakika | saat | gün | hafta | yıl | 
|:-------- |:-------|:----------- |:------- |:----- |:----- |:------ |
| milliseconds,<br>millisecond,<br>msecs,<br>msec,<br>ms,<br>milisaniye | seconds,<br>second,<br>secs,<br>sec,<br>s,<br>saniye,<br>sn | minutes,<br>minute,<br>mins,<br>min,<br>m,<br>dakika,<br>dk | hours,<br>hour,<br>hrs,<br>hr,<br>h,<br>saat | days,<br>day,<br>d,<br>gün | weeks,<br>week,<br>w,<br>hafta | years,<br>year,<br>yrs,<br>yr,<br>y,<br>yıl |

## Lisans

MIT

Bu paket yine MIT lisansına sahip olan `ms` paketinden büyük ölçüde esinlenerek yapılmıştır. Eğer milisaniyeleri
yazılı ifadelere dönüştürmek istiyorsanız o pakete de bir göz atmanızı öneririm.