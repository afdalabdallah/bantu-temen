var dataArr = [
  {
    judul: "PEMBANTAI SAMPAH",
    member: "1.321 Members",
    lokasi: "Malang",
  },
  {
    judul: "Bite the dust",
    member: "1.318 Members",
    lokasi: "Surabaya",
  },
  {
    judul: "Bantar Gebang Solid",
    member: "1.234 Members",
    lokasi: "Pasuruan",
  },
  {
    judul: "TPS Berkah Ibu",
    member: "1.221 Members",
    lokasi: "Solo",
  },
  {
    judul: "Electro Trash",
    member: "1.220 Members",
    lokasi: "Mojokerto",
  },
  {
    judul: "Recycle ElTrash",
    member: "1.118 Members",
    lokasi: "Sidoarjo",
  },
  {
    judul: "Safe World",
    member: "1.114 Members",
    lokasi: "Kepanjen",
  },
  {
    judul: "E-Trash",
    member: "1.110 Members",
    lokasi: "Kediri",
  },
  {
    judul: "Drop Electronic",
    member: "1.005 Members",
    lokasi: "Lamongan",
  },
  {
    judul: "El-Keep",
    member: "950 Members",
    lokasi: "Semarang",
  },
  {
    judul: "YUK RECYCLE",
    member: "875 Members",
    lokasi: "Tasikmalaya",
  },
  {
    judul: "Jogja Safe World",
    member: "800 Members",
    lokasi: "Yogyakarta",
  },
  {
    judul: "Keputih Aman",
    member: "1.234 Members",
    lokasi: "Surabaya",
  },
];

var main = document.getElementById("mainGrid");
dataArr.forEach((data) => {
  var cardWrap = document.createElement("div");
  cardWrap.classList.add("card-wrap");

  var cardFill = document.createElement("div");
  cardFill.classList.add("card-fill");

  var imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");

  var img = document.createElement("img");
  img.src = "assets/community_card.png";

  var circle = document.createElement("div");
  circle.classList.add("card-circle");

  imgWrap.appendChild(img);
  imgWrap.appendChild(circle);

  var cardText = document.createElement("div");
  cardText.classList.add("card-text");

  var title = document.createElement("h3");
  title.innerHTML = data.judul;
  var members = document.createElement("p");
  members.innerHTML = data.member;
  var lokasi = document.createElement("p");
  lokasi.innerHTML = data.lokasi;

  cardText.appendChild(title);
  cardText.appendChild(members);
  cardText.appendChild(lokasi);

  cardFill.appendChild(imgWrap);
  cardFill.appendChild(cardText);

  cardWrap.appendChild(cardFill);

  var btnWrap = document.createElement("div");
  btnWrap.classList.add("ikut-btn-wrap");
  var btn = document.createElement("button");
  btn.classList.add("ikut-btn");
  btn.innerHTML = "Ikut";
  btnWrap.appendChild(btn);

  cardWrap.appendChild(btnWrap);
  main.appendChild(cardWrap);
});
