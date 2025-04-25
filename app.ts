// 1-mashq

// type User =  {
//     id : number,
//     name: string,
//     email: string,
//     yosh:number
// }

// const user :User = {
//     id: 1,
//     name: "ali",
//     email: "salom@gmail.com",
//     yosh:18
// }

// console.log(user);

// 2-mashq

// type Product = {
//   nomi: string;
//   narxi: number;
//   mavjud: boolean;
// };

// const telefon: Product = {
//   nomi: "redmi",
//   narxi: 123,
//   mavjud: true,
// };

// const laptop: Product = {
//   nomi: "Laptop",
//   narxi: 23456,
//   mavjud: false,
// };

// 3-mashq

// type Amal = "qoshish" | "ayirish" | "kopaytirish" | "bolish";

// function hisoblash(amal: Amal, a: number, b: number): number {
//   switch (amal) {
//     case "qoshish":
//       return a + b;
//     case "ayirish":
//       return a - b;
//     case "kopaytirish":
//       return a * b;
//     case "bolish":
//       return a / b;
//     default:
//       throw new Error("notogri amal");
//   }
// }

// console.log(hisoblash("qoshish", 10, 5));
// console.log(hisoblash("ayirish", 10, 5));
// console.log(hisoblash("kopaytirish", 10, 5));
// console.log(hisoblash("bolish", 10, 5));

// 4-mashq

// type Talaba = {
//   id: number;
//   ism: string;
//   kurs: number;
// };

// const TalabarRoyhati: Talaba[] = [
//   { id: 1, ism: "ali", kurs: 2 },
//   { id: 2, ism: "vali", kurs: 3 },
// ];

// const TalabaniTop = (id: number) => {
//   for (let i of TalabarRoyhati) {
//     if (i.id == id) {
//       console.log(i);
//     }
//   }
// };
// TalabaniTop(1);

// 5-mashq

// type Status = "faol" | "nofaol" | "blok";
// type User = {
//   id: number;
//   ism: string;
//   status: Status;
// };

// function statusniTekshir(user: User): string {
//   return `Foydalanuvchi hozir ${user.status}`;
// }

// console.log(statusniTekshir({ id: 1, ism: "ali", status: "faol" }));

// 6-mashq

// type XabarTuri = "email" | "sms" | "telegram";

// function xabarYuborish(
//   xabarTuri: XabarTuri,
//   kontakt: string,
//   xabarmatn: string
// ): string {
//   return `Sizni ${kontakt} ga ${xabarTuri} dan ${xabarmatn} yuborildi`;
// }

// console.log(xabarYuborish("email", "+998959531221", "salomat"));

// 7-mashq

// type Mahsulot = {
//   id: number;
//   nomi: string;
//   narxi: number;
// };

// const savatchaItemlari: Mahsulot[] = [
//   { id: 1, nomi: "notebook", narxi: 120312 },
//   { id: 2, nomi: "daftar", narxi: 12 },
// ];

// const umomiyNarx = (abc: Mahsulot[]): number => {
//   let sum: number = 0;
//   for (let i of abc) {
//     sum += i.narxi;
//   }
//   return sum;
// };

// console.log(umomiyNarx(savatchaItemlari));

// 8-mashq

// type TolovUsuli = "naqd" | "karta" | "click";

// const tolovQilish = (usul: TolovUsuli, summa: number): string => {
//   return `Sizga ${usul} orqali ${summa} siz o'tdi !`;
// };

// console.log(tolovQilish("naqd", 123));

// 9-mashq

// type Account = {
//   id: number;
//   login: string;
//   password: number;
//   active: boolean;
// };

// const accountniTekshir = (account: Account) => {
//   if (account.active == true) {
//     return `Account faol`;
//   } else {
//     return `Accountt nofaol`;
//   }
// };

// console.log(
//   accountniTekshir({ id: 1, login: "salom", password: 23, active: false })
// );

// 10-mashq

// type TaomTuri = "yevropa" | "osy" | "milliy";
// type Taom = {
//   nomi: string;
//   narxi: number;
//   turi: TaomTuri;
// };

// let taomlarRoyxati: Taom[] = [
//   { nomi: "osh", narxi: 21424, turi: "osy" },
//   { nomi: "osh", narxi: 21424, turi: "osy" },
// ];

// const taomlarniFiltr = (turi: TaomTuri): Taom[] => {
//     const taomlar = taomlarRoyxati.filter(element => element.turi === turi);
//     return taomlar
// };
// console.log(taomlarniFiltr("osy"));
