import React from 'react'
import { View, StyleSheet, Text,  ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Book = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ScrollView style={styles.view}>
    <Text style={styles.text} h4>ÖNEMLİ KRİPTO PARALAR</Text>
     <Text style={{fontWeight: "bold"}}>Bitcoin</Text>
    <Text>"Güvenli" kelimesini kullanmak bir kripto para birimi için kolay değildir. Yine de Bitcoin,
     Ethereum ve Dogecoin'den oluşan üçlü içinde Bitcoin, bu kelimeyi diğerlerine göre biraz daha fazla 
     hak etmektedir. Fakat bu, Bitcoin’in de tüm kripto paraların sahip olduğu riskleri taşımadığı anlamına gelmez.
      Ancak rakiplerine göre belki bazı avantajlara sahip olduğu söylenebilir.
    Bitcoin, orijinal kripto para birimidir ve tüm kripto para birimleri içinde en fazla bilinirlik ve itibara sahip
     olandır. Örneğin, kripto paraları bir ödeme şekli olarak kabul eden kurum veya tacirlerin Bitcoin'i kabul etme 
     olasılığı diğer dijital para birimlerinden daha fazladır. Yaygın olarak benimsenmesi, bu dijital para biriminin 
     uzun vadeli başarısının anahtarı olacak gibi görünmektedir. Bu nedenle Bitcoin’in rakiplerine göre bir adım önde
      olduğu söylenebilir. Buna ek olarak sınırlı sayıda üretilebilecek olması nedeniyle Bitcoin'e genellikle "dijital
       altın" da denmektedir. Üretimdeki bu kıtlık, Bitcoin'in değerini artıran ve bu artışın gelecekte de sürebileceğini 
       gösteren bir özelliktir.</Text>
       <Text style={{fontWeight: "bold"}}>Ethereum</Text>
    <Text>Ethereum, Bitcoin'in ardından en popüler kripto para birimidir. Teknik olarak, Ethereum bir tür blok zinciri
     teknolojisidir ve Ether, Ethereum blok zincirinde barındırılan bir “coin”dir.
    Bitcoin veya Dogecoin ile yatırım yapmak gibi coin satın alarak Ether'e yatırım yapabilirsiniz. Ethereum blok zinciri
     teknolojisine doğrudan yatırım yapmak bugün için mümkün değildir. Fakat Ether satın aldığınızda arkasındaki blok zincir 
     temelini de desteklemiş olursunuz. Farklı bir seçenek olarak ise Ethereum blok zincirini kullanan şirketlere yatırım
      yapabilirsiniz. Ethereum büyümeye devam ederse, bu şirketler de gelişecektir.
    Ethereum'un en büyük avantajı, bir kripto para birimi olmasının ötesinde farklı uygulamalara sahip olmasıdır. Örneğin, 
    Ethereum; bir Non-Fungible Token (NFT), yani en kısa tanımıyla bir eşi daha bulunmayan dijital varlıkların arkasındaki 
    blok zinciridir ve merkezi olmayan finansın temelidir. NFT’ler, koleksiyoner ürünlerinden sanal oyun içeriklerine ve 
    dijital mülklere kadar, bir benzeri daha olmayan dijital varlıkları temsil etmektedir. Blockchain teknolojisi, birçok
     iş alanında devrim yaratma potansiyeline sahiptir ve Ethereum, blockchain alanındaki en büyük oyunculardan biridir.
    Ether, Bitcoin kadar popüler olmasa da, destekçilerinin gözünde büyük bir potansiyele sahiptir. Aynı geçmişe sahip
     olmadığı için Bitcoin'den daha riskli kabul edilmeli ancak sahip olduğu bu risk nedeniyle daha yüksek getiri potansiyelinin
      olduğu da akılda tutulmalıdır.</Text>


       
       <Text style={{fontWeight: "bold"}}>Dogecoin</Text>
    <Text>Dogecoin’in bu yıl inanılmaz bir çıkış yaşadığı biliniyor. Günlük yüzde 29 yükselişle ilk kez 0.49 Amerikan dolarını 
    aşan Dogecoin’in fiyatı yılbaşından bu yana da yüzde 10 binden fazla arttı. Bununla birlikte Dogecoin, bu üçlü listedeki en
     riskli kripto para birimi olma özelliğini de korumakta. Bunun öncelikli nedeni Dogecoin’in, Bitcoin ve Ethereum'dan farklı
      olarak, kripto endüstrisinde önemli bir rekabet avantajına sahip olmaması. Çünkü Dogecoin, başlangıçta gıda ve yiyecek
       odaklı kripto para projelerini tiye almak için piyasaya sürülen meme coin üzerine kurulu bir şaka olarak yaratıldı
        ve bu da Dogecoin’in güvenilirliğini zedeledi. Dogecoin'in fiyatının yükselmesine temel neden olarak ise internet 
        ortamında aldığı övgüler gösterilebilir. Çevrimiçi yatırımcıların, hızla kâra geçmek için Dogecoin’in fiyatını artırması
         ve özellikle Elon Musk gibi ünlü milyarderlerin sosyal medyada Dogecoin'i tanıtması bu yükselişin nedenlerinden. Ancak
          herhangi bir yatırımın fiyatının altında yatan temellerle eşleşmediğinde, hızlı bir düşüş yaşamasının yalnızca bir zaman
           meselesi olduğu unutulmamalıdır. Dolayısıyla Dogecoin'e yatırım yapmayı seçerseniz, yalnızca kaybetmeyi göze alabileceğiniz
            kadar yatırım yapmaya özen göstermelisiniz.</Text>
  </ScrollView>  
  </View>
)

const BookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  )
}

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

export default BookStackNavigator