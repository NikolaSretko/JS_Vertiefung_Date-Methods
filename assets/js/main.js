//=========================================================================
//                  Lev1_1_js-vertiefung_date_new-date()
//=========================================================================
// const date1 = new Date("September 2, 2019 09:00:00");
// const date2 = new Date(0);
// const date3 = new Date(31556908800);
// const date4 = new Date(86400000);

// document.body.innerHTML = `${date1}<br>${date2}<br>${date3}<br>${date4}`;
//=========================================================================
//                  Lev1_3_js-vertiefung_date_new-date()
//=========================================================================
// const date1 = new Date(2222, 9, 23, 13, 25, 11);
// console.log(date1);
// const date2 = new Date(2123, 1, 24, 13, 25, 11);
// console.log(date2);
// const date3 = new Date(2123, 2, 24, 13, 25, 11);
// console.log(date3);
// const date5 = new Date(2123, 2, 3, 13, 25, 11);
// console.log(date5);
// const date4 = new Date(2123, 10, 3, 13, 25, 11);
// console.log(date4);

// date5.setDate(2123, 10, 3 + 30, 13, 25, 11);
// console.log(date5);
//=========================================================================
//                  Lev1_5_js-vertiefung_date_new-date()
//=========================================================================

// const monatsName = dateString => {
//     const getMonth = date => date.getMonth() + 1;
//     const date = new Date(dateString);
//     const month = getMonth(date);

//     const monatsNamenListe = [
//         "Januar",
//         "Februar",
//         "März",
//         "April",
//         "Mai",
//         "Juni",
//         "Juli",
//         "August",
//         "September",
//         "Oktober",
//         "November",
//         "Dezember"
//     ];

//     return monatsNamenListe[month - 1];
// };


// console.log(monatsName("2001,3,4")); // Gibt "März" aus
// console.log(monatsName("2019,12,24")); // Gibt "Dezember" aus
// console.log(monatsName("1410,07,15")); // Gibt "Juli" aus
//=========================================================================
//                  Lev1_6_js-vertiefung_date_new-date()
//=========================================================================
// function getAMPM(date) {
//     const hours = date.getHours();
//     const period = hours < 12 ? "AM" : "PM";
//     return period;
// }


// const date1 = new Date(1999, 10, 5, 15);
// const date2 = new Date();
// const date3 = new Date(2019, 12, 3, 12);
// const date4 = new Date(2000, 1, 1, 11);

// console.log(getAMPM(date1)); // Sollte "PM" ausgeben
// console.log(getAMPM(date2)); // Abhängig von der aktuellen Uhrzeit
// console.log(getAMPM(date3)); // Sollte "PM" ausgeben
// console.log(getAMPM(date4)); // Sollte "AM" ausgeben
//=========================================================================
//                  Lev1_7_js-vertiefung_date_new-date()
//=========================================================================
// function istWeekend(dateString) {

//     const parts = dateString.split(", ");
//     const month = parseInt(parts[0], 10) - 1; // Monate in JavaScript sind 0-basiert
//     const day = parseInt(parts[1], 10);
//     const year = parseInt(parts[2], 10);


//     const date = new Date(year, month, day);


//     const dayOfWeek = date.getDay();


//     if (dayOfWeek === 0 || dayOfWeek === 6) {
//         return "Weekend";
//     } else {
//         return "Arbeitstag";
//     }
// }

// console.log(istWeekend("12, 15, 2019"));
// console.log(istWeekend("2, 16, 2001"));
// console.log(istWeekend("2, 1, 2020"));
// console.log(istWeekend("2, 29, 2020"));
//=========================================================================
//                  Lev1_10_js-vertiefung_date_new-date()
//=========================================================================
function aktuellesDatumAnzeigen() {
    // Datumobjekt erstellen
    let heute = new Date();


    let tag = heute.getDate();
    let monat = heute.getMonth() + 1;
    let jahr = heute.getFullYear();


    tag = (tag < 10) ? '0' + tag : tag;
    monat = (monat < 10) ? '0' + monat : monat;


    let ergebnis = tag + '/' + monat + '/' + jahr;


    document.body.innerHTML = ergebnis;
}

aktuellesDatumAnzeigen();
//--------------------------------------------------------------------------
