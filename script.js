function init() {
    const backgrounds = [
        "url(resources/blue.jpg)",
        "url(resources/red.jpg)",
        "url(resources/purple.jpg)",
        "url(resources/orange-pink.jpg)",
        "url(resources/pink-blue.jpg)",
        "url(resources/blurry.jpg)",
        "url(resources/blue-pink.jpg)",
    ];
    var bgImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = bgImage;
    document.getElementById("link").style.backgroundImage = bgImage;
}