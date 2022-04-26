const timer = document.getElementById('Kronometre');

var saat = 0;
var dakika = 0;
var saniye = 0;
var zamanıDurdur = true;

function Baslat() {
  if (zamanıDurdur == true) {
    zamanıDurdur = false;
        zamanDongusu();
    }
}
function Durdur() {
  if (zamanıDurdur == false) {
    zamanıDurdur = true;
  }
}

function zamanDongusu() {
    if (zamanıDurdur == false) {
      saniye = parseInt(saniye);
    dakika = parseInt(dakika);
    saat = parseInt(saat);

    saniye = saniye + 1;

    if (saniye == 60) {
      dakika = dakika + 1;
      saniye = 0;
    }
    if (dakika == 60) {
      saat = saat + 1;
      dakika = 0;
      saniye = 0;
    }

    if (saniye < 10 || saniye == 0) {
      saniye = '0' + saniye;
    }
    if (dakika < 10 || dakika == 0) {
      dakika = '0' + dakika;
    }
    if (saat < 10 || saat == 0) {
      saat = '0' + saat;
    }

    timer.innerHTML = saat + ':' + dakika + ':' + saniye;

    setTimeout("zamanDongusu()", 1000);
  }
}

function Sıfırla() {
  timer.innerHTML = "00:00:00";
  zamanıDurdur = true;
  saat = 0;
  saniye = 0;
  dakika = 0;
}