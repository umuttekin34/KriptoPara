
import React from 'react';
import { Text,StyleSheet, View, ScrollView } from 'react-native';
//import { Text, useTheme } from 'react-native-elements';

type TextComponentProps = {};
const TextComponent = () => {
  //const { theme } = useTheme();

  return (
    <>
      <ScrollView style={styles.view}>
            <Text style={styles.text} h4>KRİPTO PARA NEDİR?</Text>
            
            <Text>Öncelikle kripto para nedir? Adını şifreleme birimi olan kriptografiden alan kripto para, sanal ve dijital bir
                para birimidir. Herhangi bir merkezi otoriteye bağlı olmayan bu para birimini, herhangi bir kurum veya
                kuruluş yönetemez. Sanal para birimi olan kripto paranın üretiminde, kullanıcı ve hesap bilgilerini bir
                koda dönüştüren <Text style={{fontWeight: "bold"}}> kriptoloji</Text> biliminden faydalanılır. Kripto parada 
                sanal cüzdanlar ve şifreler oluşturulur. Her bir bilgiye ulaşmak ve işlem yapmak için ise sanal kodlar oluşturulur
                ve güvenlik çemberi bu şekilde sağlanır. Matematik temelli şifrelenen dijital paralar, organik yapıdadır ve hiçbir
                kurum veya kuruluş tarafından takip edilemez. Bireysel kullanıcıların ürettiği kripto paraların, değer kaybı veya
                değer kazanması yine bireylerin tekelindedir ve arz talep dengesine göre bir paranın değeri değişebilir.</Text>

            <Text style={styles.text} h4>KRİPTO PARA NASIL ÜRETİLİR?</Text>
            <Text>Peki, kripto para nasıl üretilir?  Şifreleme bilimi kriptografi kullanılarak matematiksel veriler eşliğinde üretilen
            kripto para çeşitleri, sanal ortamda kullanıcılar ile buluşur. Kripto paranın üretim işlemi ise kullanıcıların kazım yapması
            yoluyla olur. <Text style={{fontWeight: "bold"}}>Kripto para madenciliği </Text> olarak da bilinen bu işlem birden fazla kullanıcının
             birim üretmesi ile olur. Üretilen 
            kripto para çeşitlerinin birçoğunda üst sınır bulunur ve üretimde üst sınıra yaklaştıkça işlemler zorlaşarak üretim yavaşlar.
            Matematik bilgisine dayanan üretim aşamasında ihtiyaç duyulan <Text style={{fontWeight: "bold"}}>ekipmanlar ise işlem gücü yüksek bir
             bilgisayar ve bir de internet
            bağlantısıdır.</Text> Bu ekipmanlara sahip birçok kullanıcı kripto para üretiminde aktif rol oynayabilir.</Text>

            <Text style={styles.text} h4>KRİPTO PARA NASIL ALINIR?</Text>
            <Text>Kripto para nasıl alınır? sorusu da kripto parayla yeni tanışanlar tarafından merak edilen bir konu.
            Dijital para olarak kullanıcıların hayatında yer edinen kripto para, gerçek para birimleri ile alım-satım platformlarından
            satın alınır. <Text style={{fontWeight: "bold"}}>Başka bir kullanıcı cüzdanında bulunan kripto parayı devredebilir veya satabilir ve kullanıcılar bu yolla da
            kripto para satın alabilir.</Text> Güçlü işletim sistemine sahip olan kullanıcılar ise matematiksel işlemler çözerek ve kazım
            yaparak kripto para sahibi olabilir. Platformlar aracılığıyla kripto para satın almak için önce hesap, sonra<Text style={{fontWeight: "bold"}}> sanal bir
            cüzdan</Text> oluşturulur. Bu sanal cüzdana gerçek para birimine sahip para yatırılır ve bu para ile dijital para satın alınır.
            Kripto paraların değer kazanması veya kaybetmesi ise arz talep dengesine bağlıdır.</Text>

            <Text style={styles.text} h4>KRİPTO PARA PİYASASI</Text>
            <Text>Kripto para çeşitlerinin adlarının, alım-satım gibi verilerinin, anlık yükseliş ve düşünün takip edilmesi gibi işlemler kripto
             para piyasasını oluşturur.<Text style={{fontWeight: "bold"}}> Dijital para birimi olan kripto paranın sanal ortamdaki maddi değeri ve
             paranın alım-satım işlemleri de kripto borsası olarak adlandırılır.</Text>
             Dijital değeri olan kripto paraların tanımı ve ürün hakkındaki bilgiler de kripto piyasasını oluştururken kripto para piyasasında yapılan
             tüm işlemler piyasayı oluşturan değerlerdir. Sanal ortamlarda bu işlemleri yapmak için ise sanal cüzdanlar oluşturulur. Sanal cüzdan oluşturma, 
             kazanç sağlamak için izlenmesi gereken yol gibi alt başlıklarda kripto para piyasası içinde yer alır.</Text>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    textAlign: 'center',
    padding: 5,
    color: 'blue',
  },
  more: {
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default TextComponent;

