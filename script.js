function init() {
    const backgrounds = [
        "url(resources/blue.jpg)",
        // "url(resources/red.jpg)",
        // "url(resources/purple.jpg)",
        // "url(resources/orange-pink.jpg)",
        // "url(resources/pink-blue.jpg)",
        // "url(resources/blurry.jpg)",
        // "url(resources/blue-pink.jpg)",
    ];
    var bgImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = bgImage;
    document.getElementById("link").style.backgroundImage = bgImage;
}

function hover() {
    document.getElementById("link").innerHTML = "Portfolio";
    document.getElementById("link").style.fontSize = "9vw";
}

function noHover() {
    document.getElementById("link").innerHTML = "Matt";
    document.getElementById("link").style.fontSize = "20vw";
}
