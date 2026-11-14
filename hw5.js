const drink = "Кава";

switch (drink) {
  case "Кава":
    console.log("vi vibrali kavu.");
    break;
  case "Чай":
    console.log("vi vibrali 4ai.");
    break;
  case "Сік":
    console.log("vi vibrali sik.");
    break;
  default:
    console.log("takogo ne ma.");
}

const day = "Субота";

switch (day.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log("robo4i den'.");
    break;
  case "субота":
  case "неділя":
    console.log("vihidni.");
    break;
  default:
    console.log("takogo ne ma.")
}

const month = 10;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("zima");
    break;
  case 3:
  case 4:
  case 5:
    console.log("vesna");
    break;
  case 6:
  case 7:
  case 8:
    console.log("lito");
    break;
  case 9:
  case 10:
  case 11:
    console.log("osin");
    break;
  default:
    console.log("da takogo nema.");
}