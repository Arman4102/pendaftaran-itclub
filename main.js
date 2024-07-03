document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const angkaElements = document.querySelectorAll(".angka"); // Select all elements with class "angka"
    const hyperSatu = document.querySelector(".satu");
    const hyperDua = document.querySelector(".dua");
    const hyperTiga = document.querySelector(".tiga");
    const hyperEmpat = document.querySelector(".empat");
    const hyperLima = document.querySelector(".lima");
  
    // Pilih semua elemen gambar dan video
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');
  
    // Buat array untuk menyimpan semua promise pemuatan
    let assetPromises = [];
  
    // Tambahkan promise untuk setiap gambar
    images.forEach(img => {
      assetPromises.push(new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = resolve; // Anggap gagal sebagai selesai
      }));
    });
  
    // Tambahkan promise untuk setiap video
    videos.forEach(video => {
      assetPromises.push(new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = resolve; // Anggap gagal sebagai selesai
      }));
    });
  
    // Fungsi untuk memeriksa apakah semua aset telah dimuat
    function checkAllAssetsLoaded() {
      console.log(`Assets loaded: ${assetPromises.length}`);
      // Sembunyikan loader
      document.querySelector('.bg-loader').classList.add('fade-out');
      setTimeout(() => {
        document.querySelector('.bg-loader').style.display = 'none';
      }, 500);
    }
  
    // Tampilkan loader saat halaman dimuat
    document.querySelector('.bg-loader').style.display = 'flex'; // Atau 'block'
  
    // Jika tidak ada aset, sembunyikan loader segera
    if (assetPromises.length === 0) {
      checkAllAssetsLoaded();
    } else {
      // Tunggu hingga semua aset selesai dimuat
      Promise.all(assetPromises).then(() => {
        checkAllAssetsLoaded();
      });
    }
  
    // Juga pastikan untuk menangani kasus ketika seluruh window telah dimuat
    window.addEventListener('load', () => {
      const loader = document.querySelector('.bg-loader');
      if (loader && loader.style.display !== 'none') {
        checkAllAssetsLoaded();
      }
    });


angkaElements.forEach(angka => {
    angka.addEventListener("click", () => {
        const video = angka.querySelector(".programming"); // Find the video inside the clicked "angka" element
        if (video) {
            video.autoplay = true; // Start playing automatically
            video.loop = true;     // Loop the video
            video.play();          // Start playback
        }
    });
});

hyperSatu.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperDua.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperTiga.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperEmpat.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})

hyperLima.addEventListener("click", () => {
    const programming = "https://www.instagram.com"
    setTimeout(() => {
        window.location.href = programming
    }, 5000)
})
  });
  