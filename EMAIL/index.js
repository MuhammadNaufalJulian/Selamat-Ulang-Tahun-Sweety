// JavaScript
window.onload = function() {
    document.body.classList.add('loaded');
};




// Fungsi untuk menampilkan prompt
function askQuestions() {
    // Tampilkan prompt container
    document.getElementById("prompt-container").style.display = "block";
}

// Fungsi untuk menutup prompt
function answerPrompt() {
    // Sembunyikan prompt container
    document.getElementById("prompt-answer").style.display = "block";
}

//Melanjutkan Pertanyaan ke-dua
function newPrompt() {
    //Tampilkan promt answer
    document.getElementById("prompt-next").style.display ="block";
}


var clickCount = 0; // Variabel untuk menghitung jumlah klik

function askAnswer() {
    clickCount++; // Menambah jumlah klik setiap kali tombol "Dikit" diklik
    if (clickCount === 1) {
        // Jika sudah diklik 1 kali, tampilkan informasi
        alert("Klik 5 kali kalau benar sayang :)");
    } else if (clickCount === 5) {
        alert("Ayo 1 kali lagi!!!");
    } else if (clickCount === 6) {
        // Jika sudah diklik 6 kali, lanjutkan ke pertanyaan berikutnya
        document.getElementById("prompt-answer").style.display = "block"; // Sembunyikan prompt saat ini
        // Tambahkan logika untuk lanjut ke pertanyaan berikutnya di sini
}
}


// MENGUBAH BACKGROUND BODY 

// index.js

// Mendapatkan tombol dan menambahkan event listener
const button = document.getElementById('button-question');
button.addEventListener('click', changeBackground);

// Fungsi untuk mengubah latar belakang body
function changeBackground() {
    document.body.style.backgroundImage = "url('assetss/imgbackgground/flowerview.png')"; // Ganti 'flower.jpg' dengan nama gambar yang ingin Anda gunakan
}


document.querySelector('.trigger-btn').addEventListener('click', function() {
    document.getElementById('alert').classList.toggle('hover');
  });
  



// Fungsi untuk menampilkan gambar berikutnya secara berurutan
function displayNextImage(images, index) {
    // Jika index melebihi jumlah gambar, berhenti
    if (index >= images.length) {
        return;
    }

    // Menampilkan gambar sesuai dengan indeks yang diberikan
    images[index].style.display = "block";

    // Menunggu 0.5 detik sebelum menampilkan gambar berikutnya
    setTimeout(function() {
        // Menyembunyikan gambar sebelumnya
        images[index].style.display = "none";

        // Memanggil rekursif untuk menampilkan gambar berikutnya
        displayNextImage(images, index + 1);
    }, 1000);
}

// Fungsi untuk menampilkan image-container dan memulai tampilan gambar secara berurutan
function startDisplay() {
    const imageContainer = document.getElementById("image-container");
    const imageElements = imageContainer.querySelectorAll('img[class^="image"]');
    const imageArray = Array.from(imageElements);

    imageContainer.style.display = "block"; // Tampilkan image-container
    displayNextImage(imageArray, 0); // Mulai tampilan gambar secara berurutan
}


