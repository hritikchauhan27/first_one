// single program explaining single threading, non blocking, event driven, dynamic typing
let name = "Rishi";
let age = 21;
let fav_anime ="one piece";

console.log(name);
setTimeout(() => {
    console.log(age);
}, 1500);

console.log(fav_anime);