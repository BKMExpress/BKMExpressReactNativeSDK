# BKM EXPRESS REACT NATIVE SDK PLUGIN

## NE İŞE YARAR?

> BKM Express React Native SDK, kullanıcının BKMExpress ile yapacağı ödemeler için, işyeri uygulamasından çıkmadan, kart eşleme, kart değiştirme ve güvenli ödeme yapma seçeneklerini sunmaktadır.

## NASIL ÇALIŞIR?

BKM Express React Native SDK paketinin kullanılabilmesi için işyerleri BKM Express entegrasyonlarını tamamlaması
gerekmektedir. Daha sonra işyeri servis uygulamaları BKMExpress core servislerine bağlanarak kendilerine verilen **
TOKEN**'ı SDK tarafından sunulan methodlara parametrik olarak ileterek kart eşleştirme, değiştirme ve güvenli ödeme
akışını başlatabilirler.

## ORTAMLAR

Kart eşleme paketi iki farklı ortamda çalışmaktadır.

* PROD
* PREPROD

**NOT:** Entegrasyon sırasında işyerlerine verilen anahtarların sorumluluğu, **işyerine** aittir.

## Kurulum

BKM Express React Native SDK kullanmak için sırası ile aşağıdaki adımlar izlenmelidir.

* Kurulum için;

      npm install --save bkm-express-react-native-sdk


* Projenin Android entegrasyonu için lütfen size sunmuş olduğumuz kullanıcı adı ve şifreyi, Android projesinde bulunan
  local.properties dosyasına aşağıdaki gibi ekleyiniz.

      bkm_username=<<YOUR_USERNAME>>
      bkm_password=<<YOUR_PASSWORD>>
      bkm_maven_url = http://54.174.1.67/artifactory/bexandroidsdk-release-android

**NOT:** Android veya iOS özelinde herhangi bir entegrasyon gerekmemektedir.

### React Native Entegrasyonu

Kurulumu tamamladıktan sonra pakete ait kütüphaneyi kodunuza ekleyiniz.

    import BkmExpressReactNativeSdk from "bkm-express-react-native-sdk";

Paketi PreProd ortamda kullanabilmek için aşağıdaki fonksiyonu çağırmalısınız. Aşağıdaki fonksiyonu kullanmazsanız SDK
Prod ortamda çalışacaktır.

     BkmExpressReactNativeSdk.setDebugMode(true); // PreProd

### Örnek Ödeme Akışı

    BkmExpressReactNativeSdk.startBexPayment("Token will be given by BKM after the merchant integration",
        (posResult) => {
            console.log("Payment Success - token: " + posResult.token)
        },
        (errorId, errorMsg) => {
            console.log("Failure - errorId: " + errorId + " errorMsg: " + errorMsg)
        }
    );

### Örnek Kart Eşleştirme Akışı

    BkmExpressReactNativeSdk.submitConsumer("Token will be given by BKM after the merchant integration",
        (first6, last2) => {
            console.log("Payment Success - first6: " + first6 + " last2: " + last2)
        },
        (errorId, errorMsg) => {
            console.log("Failure - errorId: " + errorId + " errorMsg: " + errorMsg)
        }
    );

### Örnek Kart Değiştirme Akışı

    BkmExpressReactNativeSdk.resubmitConsumer("Ticket will be given by BKM after the merchant integration",
        (first6, last2) => {
            console.log("Payment Success - first6: " + first6 + " last2: " + last2)
        },
        (errorId, errorMsg) => {
            console.log("Failure - errorId: " + errorId + " errorMsg: " + errorMsg)
        }
    );
