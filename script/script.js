// const card = document.getElementById('card');
// card.addEventListener('click', function(){
//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);
//     card.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
// });

// function ubahWarnaNav() {
//     const nav = document.getElementById('nav');

//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);
//     nav.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
// }

// setInterval(ubahWarnaNav, 1000);


// function tampilkanWaktu() {
//     const sekarang = new Date();
//     const jam = sekarang.getHours();
//     const menit = sekarang.getMinutes();
//     const detik = sekarang.getSeconds();

//     const jamFormat = jam.toString().padStart(2, '0');
//     const menitFormat = menit.toString().padStart(2, '0');
//     const detikFormat = detik.toString().padStart(2, '0');

//     var format = "AM";
//     if (jam >= 12) {
//         format = "PM";
//     }
//     // jam = jam % 12 || 12;

//     document.getElementById('jam').textContent = ''+ jamFormat +' '+ menitFormat +' '+ detikFormat +' '+ format +'';
// }

// setInterval(tampilkanWaktu, 1000);


// function ubahWarna() {
//     const nav = document.getElementById('card');

//     const r = Math.round(Math.random() * 255 + 1);
//     const g = Math.round(Math.random() * 255 + 1);
//     const b = Math.round(Math.random() * 255 + 1);
//     nav.style.boxShadow = 'rgb('+ r +', '+ g +', '+ b +') 0px 5px 15px';
// }

// setInterval(ubahWarna, 1000);