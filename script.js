document.getElementById('modoOscuroBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});




window.onload = function() {
    var bannerImage = document.getElementById("bannerImage");
    var images = ["./img/looney.jpg", "./img/23.jpg", "./img/3.jpg"]; // Agrega las rutas de tus imágenes aquí
    var currentImageIndex = 0;

    function changeBannerImage() {
        bannerImage.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBannerImage, 3000); // Cambio de imagen cada 3 segundos
};






document.addEventListener('DOMContentLoaded', function() {
    const gameCatalog = document.getElementById('gameCatalog');

    const juegos = [
        { title: 'Lollipop Chainsaw', platform: 'PS3', icon: 'https://i.ebayimg.com/images/g/OFkAAOSwAM5e1RPJ/s-l1600.jpg' },
        { title: 'The Legend of Zelda', platform: 'PS3', icon: 'https://acdn.mitiendanube.com/stores/095/446/products/the-last-of-us-221649143c8f39c33715122012420769-1024-1024.jpg' },
        { title: 'Metal Gear Solid', platform: 'PS3', icon: 'https://fusiongames.com.ar/wp-content/uploads/2024/04/metal-gear-solid-ps3.webp' },
        { title: 'Borderlands 2', platform: 'PS3', icon: 'https://dixgamer.com/wp-content/uploads/2019/03/Borderlands-2-1.jpg' },
        { title: 'Crash of the titans', platform: 'PS2', icon: 'https://http2.mlstatic.com/D_NQ_NP_816928-MLA70008344326_062023-O.webp' },
        { title: 'Haunting Ground', platform: 'PS2', icon: 'https://http2.mlstatic.com/D_NQ_NP_684299-MLA71279342963_082023-O.webp' },
        { title: 'Resident evil 4', platform: 'PS2', icon: 'https://static1-es.millenium.gg/articles/5/49/87/5/@/273100-re4-orig-1-article_m-1.jpg' },
        { title: 'God of war', platform: 'PS2', icon: 'https://www.eltiempo.com/loencontrasteguiasdecompra/_next/image?url=https%3A%2F%2Feltiempo.revoou.com%2Fwp-content%2Fuploads%2F2023%2F07%2FGod-of-War.jpg&w=640&q=75' },
        { title: 'Bioshock', platform: 'PC', icon: 'https://media.vandal.net/m/3990/bioshock-201429143616_1.jpg' },
        { title: 'Left for dead 2', platform: 'PC', icon: 'https://http2.mlstatic.com/D_NQ_NP_908485-MLA75099906236_032024-O.webp' },
        { title: 'Fallout New Vegas', platform: 'PC', icon: 'https://cdn.originalky.cz/images/0/eb21d8a9fe51062e/2/fallout-new-vegas-pc.jpg?hash=261024160' },
        { title: 'Sims Castaway', platform: 'PC', icon: 'https://media.vandal.net/m/7483/los-sims-2-historias-de-naufragos-2014416134822_1.jpg' },
        // Agrega más juegos aquí
    ];

    function renderCatalogo() {
        gameCatalog.innerHTML = '';
        juegos.forEach(juego => {
            const juegoElement = document.createElement('div');
            juegoElement.classList.add('juego');
            juegoElement.innerHTML = `
                <img src="${juego.icon}" alt="${juego.title}">
                <div class="info">
                    <h2>${juego.title}</h2>
                    <p>Plataforma: ${juego.platform}</p>
                </div>
            `;
            gameCatalog.appendChild(juegoElement);
        });
    }

    renderCatalogo();
});
