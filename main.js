const mevalar = ["olma" , "anor" , "uzum" , "shaftoli" , "gilos" , "nok" , "behi"];
const user = prompt("Iltimos biron nma kiriting va F12 bosb consolni ocib oling !");
const tanlash = prompt("1) Array boshidan qoshish (unshift) \n 2) Array oxishidan qoshish (push) \n 3) Arraydagi element oxirida o'chirish (pop) \n 4) Arraydagi elementni boshidan o'chirish (shift)")

if(tanlash == 1) {
    mevalar.unshift(user);
    console.log(mevalar);
    console.log(`Arrayning yangi uzunligi ${mevalar.length}ta bo'ldi. cunki ${user})() qo'shildi`);
}
else if(tanlash == 2) {
    mevalar.push(user);
    console.log(mevalar);
    console.log(`Arrayning yangi uzunligi ${mevalar.length}ta bo'ldi. cunki (${user}) qo'shildi`);
} else if(tanlash == 3) {
    mevalar.pop(mevalar);
    console.log(mevalar);
    console.log(`Arrayning yangi uzunligi ${mevalar.length}ta bo'ldi. cunki oxirgi element o'chirildi`);
} else if(tanlash == 4) {
    mevalar.shift(mevalar);
    console.log(mevalar);
    console.log(`Arrayning yangi uzunligi ${mevalar.length}ta bo'ldi. cunki birinchi element o'chirildi`);
} else {
    console.log("Bunday amal mavjud emas !")
}