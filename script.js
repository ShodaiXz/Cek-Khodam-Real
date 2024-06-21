const animals = [
    "Raja Jawa",
    "Raja Sunda",
    "Lengkuas bakar",
    "Jembut Kuda",
    "Laba-Laba Jawa",
    "Laba-Laba Sunda",
    "Ketumbar Bubuk",
    "Fuso Hedon",
    "Temu Lawack",
    "bekicot Ngawi",
    "Jahe Madura Maknyos",
    "Kapal Karam",
    "Badak Jawa",
    "Raja Jomok",
    "Kapten Suki",
    "Nigga Platinum",
    "Biji Ketapang",
    "Ujang Pipa"
];

function showLoading() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Silakan masukkan nama Anda!");
        return;
    }
    
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').innerText = '';
    
    setTimeout(generateRandomAnimal, 2000); // Penundaan 2 detik sebelum menampilkan hasil
}

function generateRandomAnimal() {
    const name = document.getElementById('nameInput').value;
    const randomIndex = Math.floor(Math.random() * animals.length);
    const randomAnimal = animals[randomIndex];
    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').innerText = `${name} Memiliki Khodam:` ;
    document.getElementById('hasil').innerHTML =  `${randomAnimal}`;
}

document.getElementById('resetButton').addEventListener('click', function() {
    location.reload(); // Mereset dan me-restart halaman
});