function karshilama() {
    // Kullanıcıdan alınan ismi alıyoruz
    const userName = document.getElementById("userName").value;
    
    // Eğer isim boşsa kullanıcıya uyarı verelim
    if (!userName) {
        alert("Lütfen adınızı girin.");
        return;
    }
    
    // Karşılama mesajını ve zamanı güncelleyelim
    document.getElementById("greeting").innerText = `Merhaba, ${userName}!`;

    // Saatin güncellenmesi için fonksiyon
    function updateClock() {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds(); // Saniyeyi alıyoruz
        const day = currentDate.toLocaleString('tr-TR', { weekday: 'long' });
        const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        // Ekrana saati ve günü yansıtalım
        document.getElementById("currentDateTime").innerText = `Bugün ${day}, Saat: ${time}`;
    }

    // Saat her saniye güncellenmeli
    setInterval(updateClock, 1000); // updateClock fonksiyonu her 1000ms (1 saniye) arayla çalışacak

    // Karşılama ekranını gösterelim
    document.getElementById("welcomeMessage").style.display = "block";

    // İlk defa saati hemen güncelleyelim
    updateClock();
}
