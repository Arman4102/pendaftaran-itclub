document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const angkaElements = document.querySelectorAll(".angka"); 
  const hyperSatu = document.querySelector(".satu");
  const hyperDua = document.querySelector(".dua");
  const hyperTiga = document.querySelector(".tiga");
  const hyperEmpat = document.querySelector(".empat");
  const hyperLima = document.querySelector(".lima");

  const images = document.querySelectorAll('img');
  const videos = document.querySelectorAll('video');

  let assetPromises = [];

  images.forEach(img => {
    assetPromises.push(new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = resolve; 
    }));
  });

  videos.forEach(video => {
    assetPromises.push(new Promise((resolve, reject) => {
      video.onloadeddata = resolve;
      video.onerror = resolve; 
    }));
  });

  function checkAllAssetsLoaded() {
    console.log(`Assets loaded: ${assetPromises.length}`);

    document.querySelector('.bg-loader').classList.add('fade-out');
    setTimeout(() => {
      document.querySelector('.bg-loader').style.display = 'none';
    }, 500);
  }

  document.querySelector('.bg-loader').style.display = 'flex'; 

  if (assetPromises.length === 0) {
    checkAllAssetsLoaded();
  } else {

    Promise.all(assetPromises).then(() => {
      checkAllAssetsLoaded();
    });
  }

  window.addEventListener('load', () => {
    const loader = document.querySelector('.bg-loader');
    if (loader && loader.style.display !== 'none') {
      checkAllAssetsLoaded();
    }
  });

angkaElements.forEach(angka => {
  angka.addEventListener("click", () => {
      const video = angka.querySelector(".programming"); 
      if (video) {
          video.autoplay = true; 
          video.loop = true;     
          video.play();          
      }
  });
});

hyperSatu.addEventListener("click", () => {
  const programming = "https://tally.so/r/w5k0Vo"
  setTimeout(() => {
      window.location.href = programming
  }, 5000)
})

hyperDua.addEventListener("click", () => {
  const programming = "https://tally.so/r/3jM4va"
  setTimeout(() => {
      window.location.href = programming
  }, 5000)
})

hyperTiga.addEventListener("click", () => {
  const programming = "https://tally.so/r/wzzBKE"
  setTimeout(() => {
      window.location.href = programming
  }, 5000)
})

hyperEmpat.addEventListener("click", () => {
  const programming = "https://tally.so/r/n0MYx9"
  setTimeout(() => {
      window.location.href = programming
  }, 5000)
})

hyperLima.addEventListener("click", () => {
  const programming = "https://tally.so/r/mYOBkB"
  setTimeout(() => {
      window.location.href = programming
  }, 5000)
})
});