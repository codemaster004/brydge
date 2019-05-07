const meldunki = ["pas", "1C", "1D", "1H", "1S", "2C", "2D", "2H", "2S", "3C", "3D", "3H", "3S", "4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S"];

function uzupelnij() {
  if (licytacja.length == 1) {
    switch (glos_p) {
      case "1C":
        reka_partnera.punkty = reka_0.g_1_k.min_p;
        reka_partnera.piki = 4;
        reka_partnera.kiery = 4;
        reka_partnera.kara = 4;
        reka_partnera.trefle = 4;
        reka_partnera.honory = "";
        reka_partnera.kolor = "none";
        break;
      case "1D":
        reka_partnera.punkty = reka_0.g_1_k.min_p;
        reka_partnera.kara = reka_0.g_1_k.min_length;
        reka_partnera.honory = 2;
        reka_partnera.kolor = "kara";
        karo = true
        break;
      case "1H":
        reka_partnera.punkty = reka_0.g_1_k.min_p;
        reka_partnera.kiery = reka_0.g_1_k.min_length;
        reka_partnera.honory = 2;
        reka_partnera.kolor = "kiery";
        kier = true
        break;
      case "1S":
        reka_partnera.punkty = reka_0.g_1_k.min_p;
        reka_partnera.piki = reka_0.g_1_k.min_length;
        reka_partnera.honory = 2;
        reka_partnera.kolor = "piki";
        pik = true
        break;
      case "2S":
        reka_partnera.punkty = reka_0.g_2_k.min_p;
        reka_partnera.piki = reka_0.g_2_k.min_length;
        reka_partnera.honory = 3;
        reka_partnera.kolor = "piki";
        pik = true
        break;
      case "2H":
        reka_partnera.punkty = reka_0.g_2_k.min_p;
        reka_partnera.kiery = reka_0.g_2_k.min_length;
        reka_partnera.honory = 3;
        reka_partnera.kolor = "kiery";
        kier = true
        break;
      case "2D":
        reka_partnera.punkty = reka_0.g_2_k.min_p;
        reka_partnera.kara = reka_0.g_2_k.min_length;
        reka_partnera.honory = 3;
        reka_partnera.kolor = "kara";
        karo = true
        break;
      case "2C":
        reka_partnera.punkty = reka_0.g_2_k.min_p;
        reka_partnera.trefle = reka_0.g_2_k.min_length;
        reka_partnera.honory = 3;
        reka_partnera.kolor = "trefle";
        trefl = true
        break;
      case "3C":
        reka_partnera.punkty = reka_0.g_3_k.min_p;
        reka_partnera.trefle = reka_0.g_3_k.min_length;
        reka_partnera.honory = 0;
        reka_partnera.kolor = "trefle";
        break;
      case "3D":
        reka_partnera.punkty = reka_0.g_3_k.min_p;
        reka_partnera.kara = reka_0.g_3_k.min_length;
        reka_partnera.honory = 0;
        reka_partnera.kolor = "kara";
        break;
      case "3H":
        reka_partnera.punkty = reka_0.g_3_k.min_p;
        reka_partnera.kiery = reka_0.g_3_k.min_length;
        reka_partnera.honory = 0;
        reka_partnera.kolor = "kiery";
        break;
      case "3S":
        reka_partnera.punkty = reka_0.g_3_k.min_p;
        reka_partnera.piki = reka_0.g_3_k.min_length;
        reka_partnera.honory = 0;
        reka_partnera.kolor = "piki";
        break;
      case "1BA":
        reka_partnera.punkty = reka_0.g_1_ba.min_p;
        reka_partnera.piki = 4;
        reka_partnera.kiery = 4;
        reka_partnera.kara = 4;
        reka_partnera.trefle = 4;
        reka_partnera.honory = "obstawa";
        reka_partnera.kolor = "none";
        pik = true;
        kier = true;
        karo = true;
        trefl = true;
        break;
      case "2BA":
        reka_partnera.punkty = reka_0.g_2_ba.min_p;
        reka_partnera.piki = 4;
        reka_partnera.kiery = 4;
        reka_partnera.kara = 4;
        reka_partnera.trefle = 4;
        reka_partnera.honory = "obstawa";
        reka_partnera.kolor = "none";
        pik = true;
        kier = true;
        karo = true;
        trefl = true;
        break;
      default:
        reka_partnera.punkty = 0;
        reka_partnera.honory = "";
        reka_partnera.kolor = "none";
    }
  } else if (licytacja.length == 2) {
    if (jego_wybor == "podniesienie") {
      switch (glos_p) {
        case "2D":
          reka_partnera.punkty = reka_1.podniesienie.k2.min_p;
          reka_partnera.kara = reka_1.podniesienie.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "2H":
          reka_partnera.punkty = reka_1.podniesienie.k2.min_p;
          reka_partnera.kiery = reka_1.podniesienie.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "2S":
          reka_partnera.punkty = reka_1.podniesienie.k2.min_p;
          reka_partnera.piki = reka_1.podniesienie.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        case "3C":
          reka_partnera.punkty = reka_1.podniesienie.k3.min_p;
          reka_partnera.trefle = reka_1.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "trefle";
          break;
        case "3D":
          reka_partnera.punkty = reka_1.podniesienie.k3.min_p;
          reka_partnera.kara = reka_1.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "3H":
          reka_partnera.punkty = reka_1.podniesienie.k3.min_p;
          reka_partnera.kiery = reka_1.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "3S":
          reka_partnera.punkty = reka_1.podniesienie.k3.min_p;
          reka_partnera.piki = reka_1.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        case "4C":
          reka_partnera.punkty = reka_1.podniesienie.k4.min_p;
          reka_partnera.trefle = reka_1.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "trefle";
          break;
        case "4D":
          reka_partnera.punkty = reka_1.podniesienie.k4.min_p;
          reka_partnera.kara = reka_1.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "4H":
          reka_partnera.punkty = reka_1.podniesienie.k4.min_p;
          reka_partnera.kiery = reka_1.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "4S":
          reka_partnera.punkty = reka_1.podniesienie.k4.min_p;
          reka_partnera.piki = reka_1.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        default:
          reka_partnera.punkty = 0;
          reka_partnera.honory = "";
          reka_partnera.kolor = "none";
      }
    } else if (jego_wybor == "wlasny") {
      switch (glos_p) {
        case "1D":
          reka_partnera.punkty = reka_1.wlasny.k1.min_p;
          reka_partnera.kara = reka_1.wlasny.k1.min_length;
          reka_partnera.honory = 1;
          reka_partnera.kolor = "kara";
          break;
        case "1H":
          reka_partnera.punkty = reka_1.wlasny.k1.min_p;
          reka_partnera.kiery = reka_1.wlasny.k1.min_length;
          reka_partnera.honory = 1;
          reka_partnera.kolor = "kiery";
          break;
        case "1S":
          reka_partnera.punkty = reka_1.wlasny.k1.min_p;
          reka_partnera.piki = reka_1.wlasny.k1.min_length;
          reka_partnera.honory = 1;
          reka_partnera.kolor = "piki";
          break;
        case "2C":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.trefle = reka_1.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "trefle";
          break;
        case "2D":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.kara = reka_1.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kara";
          break;
        case "2H":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.kiery = reka_1.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kiery";
          break;
        case "2S":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.piki = reka_1.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "piki";
          break;
        case "3C":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.trefle = reka_1.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "trefle";
          break;
        case "3D":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.kara = reka_1.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kara";
          break;
        case "3H":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.kiery = reka_1.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kiery";
          break;
        case "3S":
          reka_partnera.punkty = reka_1.wlasny.k2.min_p;
          reka_partnera.piki = reka_1.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "piki";
          break;
        default:
          reka_partnera.punkty = 0;
          reka_partnera.honory = "";
          reka_partnera.kolor = "none";
      }
    }
  } else {
    if (jego_wybor == "powrot") {
      switch (glos_p) {
        case "2D":
          reka_partnera.punkty = reka_2.powrot.k2.min_p;
          reka_partnera.kara = reka_2.powrot.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "2H":
          reka_partnera.punkty = reka_2.powrot.k2.min_p;
          reka_partnera.kiery = reka_2.powrot.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "2S":
          reka_partnera.punkty = reka_2.powrot.k2.min_p;
          reka_partnera.piki = reka_2.powrot.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        case "3C":
          reka_partnera.punkty = reka_2.powrot.k3.min_p;
          reka_partnera.trefle = reka_2.powrot.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "trefle";
          break;
        case "3D":
          reka_partnera.punkty = reka_2.powrot.k3.min_p;
          reka_partnera.kara = reka_2.powrot.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "3H":
          reka_partnera.punkty = reka_2.powrot.k3.min_p;
          reka_partnera.kiery = reka_2.powrot.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "3S":
          reka_partnera.punkty = reka_2.powrot.k3.min_p;
          reka_partnera.piki = reka_2.powrot.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        case "4C":
          reka_partnera.punkty = reka_2.powrot.k4.min_p;
          reka_partnera.trefle = reka_2.powrot.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "trefle";
          break;
        case "4D":
          reka_partnera.punkty = reka_2.powrot.k4.min_p;
          reka_partnera.kara = reka_2.powrot.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "4H":
          reka_partnera.punkty = reka_2.powrot.k4.min_p;
          reka_partnera.kiery = reka_2.powrot.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "4S":
          reka_partnera.punkty = reka_2.powrot.k4.min_p;
          reka_partnera.piki = reka_2.powrot.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        default:
          reka_partnera.punkty = 0;
          reka_partnera.honory = "";
          reka_partnera.kolor = "none";
      }
    } else if (jego_wybor == "podniesienie") {
      switch (glos_p) {
        case "2D":
          reka_partnera.punkty = reka_2.podniesienie.k2.min_p;
          reka_partnera.kara = reka_2.podniesienie.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "2H":
          reka_partnera.punkty = reka_2.podniesienie.k2.min_p;
          reka_partnera.kiery = reka_2.podniesienie.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "2S":
          reka_partnera.punkty = reka_2.podniesienie.k2.min_p;
          reka_partnera.piki = reka_2.podniesienie.k2.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        case "3C":
          reka_partnera.punkty = reka_2.podniesienie.k3.min_p;
          reka_partnera.trefle = reka_2.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "trefle";
          break;
        case "3D":
          reka_partnera.punkty = reka_2.podniesienie.k3.min_p;
          reka_partnera.kara = reka_2.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "3H":
          reka_partnera.punkty = reka_2.podniesienie.k3.min_p;
          reka_partnera.kiery = reka_2.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "3S":
          reka_partnera.punkty = reka_2.podniesienie.k3.min_p;
          reka_partnera.piki = reka_2.podniesienie.k3.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        case "4C":
          reka_partnera.punkty = reka_2.podniesienie.k4.min_p;
          reka_partnera.trefle = reka_2.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "trefle";
          break;
        case "4D":
          reka_partnera.punkty = reka_2.podniesienie.k4.min_p;
          reka_partnera.kara = reka_2.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kara";
          break;
        case "4H":
          reka_partnera.punkty = reka_2.podniesienie.k4.min_p;
          reka_partnera.kiery = reka_2.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "kiery";
          break;
        case "4S":
          reka_partnera.punkty = reka_2.podniesienie.k4.min_p;
          reka_partnera.piki = reka_2.podniesienie.k4.min_length;
          reka_partnera.honory = 0;
          reka_partnera.kolor = "piki";
          break;
        default:
          reka_partnera.punkty = 0;
          reka_partnera.honory = "";
          reka_partnera.kolor = "none";
      }
    } else if (jego_wybor == "wlasny") {
      switch (glos_p) {
        case "1D":
          reka_partnera.punkty = reka_2.wlasny.k1.min_p;
          reka_partnera.kara = reka_2.wlasny.k1.min_length;
          reka_partnera.honory = 1;
          reka_partnera.kolor = "kara";
          break;
        case "1H":
          reka_partnera.punkty = reka_2.wlasny.k1.min_p;
          reka_partnera.kiery = reka_2.wlasny.k1.min_length;
          reka_partnera.honory = 1;
          reka_partnera.kolor = "kiery";
          break;
        case "1S":
          reka_partnera.punkty = reka_2.wlasny.k1.min_p;
          reka_partnera.piki = reka_2.wlasny.k1.min_length;
          reka_partnera.honory = 1;
          reka_partnera.kolor = "piki";
          break;
        case "2C":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.trefle = reka_2.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "trefle";
          break;
        case "2D":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.kara = reka_2.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kara";
          break;
        case "2H":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.kiery = reka_2.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kiery";
          break;
        case "2S":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.piki = reka_2.wlasny.k2.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "piki";
          break;
        case "3C":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.trefle = reka_2.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "trefle";
          break;
        case "3D":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.kara = reka_2.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kara";
          break;
        case "3H":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.kiery = reka_2.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "kiery";
          break;
        case "3S":
          reka_partnera.punkty = reka_2.wlasny.k2.min_p;
          reka_partnera.piki = reka_2.wlasny.k3.min_length;
          reka_partnera.honory = 2;
          reka_partnera.kolor = "piki";
          break;
        default:
          reka_partnera.punkty = 0;
          reka_partnera.honory = "";
          reka_partnera.kolor = "none";
      }
    }
  }
  console.log(reka_partnera);
}

const reka_0 = {
  g_1_k: {
    min_p: 12,
    max_p: 17,
    min_length: 5,
    max_length: 6,
    dodatek: "h"
  },
  g_2_k: {
    min_p: 18,
    max_p: 37,
    min_length: 6,
    max_length: 13,
    dodatek: "h"
  },
  g_1_ba: {
    min_p: 16,
    max_p: 18,
    min_length: 2,
    max_length: 4,
    dodatek: "za_w_al_co"
  },
  g_2_ba: {
    min_p: 19,
    max_p: 37,
    min_length: 2,
    max_length: 4,
    dodatek: "za_w_al_co"
  },
  g_3_k: {
    min_p: 7,
    max_p: 11,
    min_length: 7,
    max_length: 13,
    dodatek: false
  }
};

const reka_1 = {
  podniesienie: {
    k2: {
      min_p: 7,
      max_p: 10,
      min_length: 3,
      max_length: 13,
      dodatek: false
    },
    k3: {
      min_p: 10,
      max_p: 14,
      min_length: 4,
      max_length: 13,
      dodatek: false
    },
    k4: {
      min_p: 14,
      max_p: 37,
      min_length: 5,
      max_length: 13,
      dodatek: false
    }
  },
  wlasny: {
    k1: {
      min_p: 6,
      max_p: 9,
      min_length: 4,
      max_length: 13,
      dodatek: "1h"
    },
    k2: {
      min_p: 10,
      max_p: 13,
      min_length: 4,
      max_length: 13,
      dodatek: "2h"
    },
    k3: {
      min_p: 14,
      max_p: 37,
      min_length: 4,
      max_length: 13,
      dodatek: "3h"
    }
  },
  bezatu: {
    ba1: {
      min_p: 6,
      max_p: 9,
      min_length: 2,
      max_length: 5,
      dodatek: "za_w_al_co"
    },
    ba2: {
      min_p: 10,
      max_p: 12,
      min_length: 2,
      max_length: 5,
      dodatek: "za_w_al_co"
    },
    ba3: {
      min_p: 13,
      max_p: 37,
      min_length: 2,
      max_length: 5,
      dodatek: "za_w_al_co"
    }
  }
}

const reka_2 = {
  powrot: {
    k2: {
      min_p: 12,
      max_p: 17,
      min_length: 6,
      max_length: 13,
      dodatek: false
    },
    k3: {
      min_p: 17,
      max_p: 22,
      min_length: 7,
      max_length: 13,
      dodatek: false
    },
    k4: {
      min_p: 22,
      max_p: 36,
      min_length: 8,
      max_length: 13,
      dodatek: false
    },
  },
  podniesienie: {
    k2: {
      min_p: 7,
      max_p: 10,
      min_length: 3,
      max_length: 13,
      dodatek: false
    },
    k3: {
      min_p: 11,
      max_p: 14,
      min_length: 4,
      max_length: 13,
      dodatek: false
    },
    k4: {
      min_p: 15,
      max_p: 37,
      min_length: 5,
      max_length: 13,
      dodatek: false
    }
  },
  wlasny: {
    k1: {
      min_p: 6,
      max_p: 9,
      min_length: 4,
      max_length: 13,
      dodatek: "1h"
    },
    k2: {
      min_p: 10,
      max_p: 13,
      min_length: 4,
      max_length: 13,
      dodatek: "2h"
    },
    k3: {
      min_p: 14,
      max_p: 37,
      min_length: 4,
      max_length: 13,
      dodatek: "3h"
    }
  },
  bezatu: {
    ba1: {
      min_p: 6,
      max_p: 9,
      min_length: 2,
      max_length: 5,
      dodatek: "za_w_al_co"
    },
    ba2: {
      min_p: 10,
      max_p: 12,
      min_length: 2,
      max_length: 5,
      dodatek: "za_w_al_co"
    },
    ba3: {
      min_p: 13,
      max_p: 37,
      min_length: 2,
      max_length: 5,
      dodatek: "za_w_al_co"
    }
  }
}

function pomocy() {
  moj_glos = "";
  if (licytacja.length == 0) {
    if (punkty >= 12) {
      // Gra Bez Atu
      if (moje_karty.moje_S.length <= 4 && moje_karty.moje_H.length <= 4 && moje_karty.moje_D.length <= 4 && moje_karty.moje_C.length <= 4) {
        pik = za_w_al_co("S");
        kier = za_w_al_co("H");
        karo = za_w_al_co("D");
        trefl = za_w_al_co("C");
        //console.log("pik: " + pik + ", kier: " + kier + ", karo: " + karo + ", trefl: " + trefl);
        if (pik == true && kier == true && karo == true && trefl == true) {
          for (let i = 1; i <= 2; i++) {
            if (punkty >= eval("reka_0.g_" + i + "_ba.min_p")) {
              wysokosc_glosu = "1";
              kolor_glosu = "BA";
              moj_glos = wysokosc_glosu + kolor_glosu;
            } else {
              wysokosc_glosu = "1";
              kolor_glosu = "C";
              moj_glos = wysokosc_glosu + kolor_glosu;
            }
          }
        } else {
          wysokosc_glosu = "1";
          kolor_glosu = "C";
          moj_glos = wysokosc_glosu + kolor_glosu;
        }
      } else { //Gra z trąfem
        for (let i = 1; i <= 3; i++) {
          if (punkty >= eval("reka_0.g_" + i + "_k.min_p")) {
            if (i == 1) {
              for (let j = 2; j >= 0; j--) {
                if (eval("moje_karty.moje_" + kolorki[j] + ".length") >= eval("reka_0.g_" + i + "_k.min_length")) {
                  wysokosc_glosu = String(i);
                  kolor_glosu = kolorki[j];
                  moj_glos = wysokosc_glosu + kolor_glosu;
                }
              }
            } else {
              for (let j = 3; j >= 0; j--) {
                if (eval("moje_karty.moje_" + kolorki[j] + ".length") >= eval("reka_0.g_" + i + "_k.min_length")) {
                  wysokosc_glosu = String(i);
                  kolor_glosu = kolorki[j];
                  moj_glos = wysokosc_glosu + kolor_glosu;
                }
              }
            }
          }
        }
      }
    } else {
      for (let j = 3; j >= 0; j--) {
        if (punkty >= 7) {
          if (eval("moje_karty.moje_" + kolorki[j] + ".length") >= reka_0.g_3_k.min_length) {
            wysokosc_glosu = "3";
            kolor_glosu = kolorki[j];
            moj_glos = wysokosc_glosu + kolor_glosu;
          }
        } else {
          moj_glos = "pas";
        }
      }
    }
  } else if (licytacja.length == 1) { // Odpowiedz
    if (punkty >= 7) {
      if (glos_p == "pas") {
        if (moje_karty.moje_S.length >= 4 || moje_karty.moje_H.length >= 4 || moje_karty.moje_D.length >= 3 || moje_karty.moje_C.length >= 4) {
          for (let i = 3; i >= 0; i--) {
            for (let j = 1; j <= 3; j++) {
              if (eval("moje_karty.moje_" + kolorki[i] + ".length") >= 5) {
                if (punkty >= eval("reka_1.wlasny.k" + j + ".min_p")) {
                  wysokosc_glosu = String(j);
                  kolor_glosu = kolorki[i];
                  if (melduje(wysokosc_glosu + kolor_glosu) > meldunek) {
                    moj_glos = wysokosc_glosu + kolor_glosu;
                    moj_wybor = "wlasny"
                    console.log(moj_wybor)
                  } else {
                    moj_glos = "pas";
                  }
                }
              }
            }
          }
        } else {
          moj_glos = "pas";
        }
      } else if (moje_karty.moje_S.length >= 4 || moje_karty.moje_H.length >= 4 || moje_karty.moje_D.length >= 4 || moje_karty.moje_C.length >= 4) {
        for (let i = 3; i >= 0; i--) {
          for (let j = 1; j <= 3; j++) {
            if (eval("moje_karty.moje_" + kolorki[i] + ".length") >= 5) {
              if (punkty >= eval("reka_1.wlasny.k" + j + ".min_p")) {
                wysokosc_glosu = String(j);
                kolor_glosu = kolorki[i];
                if (melduje(wysokosc_glosu + kolor_glosu) > meldunek) {
                  moj_glos = wysokosc_glosu + kolor_glosu;
                  moj_wybor = "wlasny"
                  console.log(moj_wybor)
                } else {
                  moj_glos = "pas";
                }
              }
            }
          }
        }
      } else {
        moj_glos = "pas";
      }
    }
  } else {
    if (punkty >= 7) {
      if ((eval("moje_karty.moje_" + p_m_model + ".length") + eval("reka_1.wlasny.k" + String(p_m_wysokosc) + ".min_length")) >= 8) {
        bilans()
        for (let i = 2; i <= 4; i++) {
          if (eval("moje_karty.moje_" + p_m_model + ".length") >= eval("reka_1.podniesienie.k" + i + ".min_length")) {
            if (punkty >= eval("reka_1.podniesienie.k" + i + ".min_p")) {
              kolor_glosu = p_m_model;
              wysokosc_glosu = i;
              if (melduje(wysokosc_glosu + kolor_glosu) > meldunek) {
                moj_glos = wysokosc_glosu + kolor_glosu;
                moj_wybor = "podniesienie";
                console.log(moj_wybor);
              }
            }
          }
        }
      } else if (moje_karty.moje_S.length >= 4 || moje_karty.moje_H.length >= 4 || moje_karty.moje_D.length >= 3 || moje_karty.moje_C.length >= 4) {
        for (let i = 3; i >= 0; i--) {
          for (let j = 1; j <= 3; j++) {
            if (eval("moje_karty.moje_" + kolorki[i] + ".length") >= 5) {
              if (punkty >= eval("reka_1.wlasny.k" + j + ".min_p")) {
                wysokosc_glosu = String(j);
                kolor_glosu = kolorki[i];
                if (melduje(wysokosc_glosu + kolor_glosu) > meldunek) {
                  moj_glos = wysokosc_glosu + kolor_glosu;
                  moj_wybor = "wlasny"
                  console.log(moj_wybor)
                } else {
                  moj_glos = "pas";
                }
              }
            }
          }
        }
      } else {
        moj_glos = "pas";
      }
    }
  }
  if (moj_glos == "") {
    moj_glos = "pas";
  }
  console.log("mam " + punkty + "pkt");
  console.log("glosuje w " + moj_glos);
  licytacja.push(moj_glos);
  document.getElementById("rozmowa").innerHTML = "Powinieneś grać w " + moj_glos;
}
