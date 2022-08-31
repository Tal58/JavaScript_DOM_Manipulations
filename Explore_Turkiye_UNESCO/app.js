//* Variables
let btn = document.querySelector("#new-place");
let quote = document.querySelector(".quote");
let Image = document.querySelector("body");

const quotes = [
  {
    quote: "Patara Ancient City,Antalya",
    Image: "./images/1-patara-ancient-cityantalya.jpg"
  },
  {
    quote: "Termessos Ancient City, Antalya",
    Image: "./images/2-termessos-ancient-city-antalya.jpg"
  },
  {
    quote: "Aspendos Ancient City, Antalya",
    Image: "./images/aspendos-ancient-city-antalya-9.jpg"
  },
  {
    quote: "Alanya Castle, Antalya",
    Image: "./images/alanya-castle-antalya.jpg"
  },
  {
    quote: "Frig Valley Yazılıkaya, Eskişehir",
    Image: "./images/frig-valley-yazilikaya-eskisehir-2.jpg"
  },
  {
    quote: "Odunpazarı Houses, Eskişehir",
    Image: "./images/odunpazari-houses-eskisehir-3.jpg"
  },
  {
    quote: "Ancient Roman Bath, Yozgat",
    Image: "./images/ancient-roman-bath-yozgat.jpg"
  },
  {
    quote: "Salt Lake",
    Image: "./images/salt-lake.jpg"
  },
  {
    quote: "Ruins of Ani, Kars",
    Image: "./images/ruins-of-ani-kars-2.jpg"
  },
  {
    quote: "Akdamar Church, Van",
    Image: "./images/akdamar-church-van-2.jpg"
  },
  {
    quote: "Hierapolis Ancient City Pamukkale, Denizli",
    Image: "./images/hierapolis-ancient-city-pamukkale-denizli-1.jpg"
  },
  {
    quote: "Aphrodisias Ancient City, Aydın",
    Image: "./images/aphrodisias-ancient-city-aydin-2.jpg"
  },
  {
    quote: "Ephesus, İzmir",
    Image: "./images/ephesus-izmir-5.jpg"
  },
  {
    quote: "Aphrodisias Ancient City, Aydın",
    Image: "./images/aphrodisias-ancient-city-aydin-1.jpg"
  },
  {
    quote: "Selimiye Mosque, Edirne",
    Image: "./images/selimiye-mosque-edirne.jpg"
  },
  {
    quote: "Ayasofya Mosque, İstanbul",
    Image: "./images/ayasofya-mosque-istanbul-6.jpg"
  },
  {
    quote: "Antique Amphitheatre in the Ruins of the Ancient City of Assos, Çanakkale",
    Image: "./images/1-antique-amphitheatre-in-the-ruins-of-the-ancient-city-of-assos-canakkale.jpg"
  },
  {
    quote: "Mount Harsena and the Rock Tombs of the Pontic Kings, Amasya",
    Image: "./images/mount-harsena-and-the-rock-tombs-of-the-pontic-kings-amasya.jpg"
  }
 ];
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  document.body.style.background = `url(${(quotes[random].Image)}) no-repeat center center/ cover`;
  document.getElementById("header").style.color = "white"
});