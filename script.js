$(window).on("load", function () {
    // PAGE IS FULLY LOADED
    // FADE OUT YOUR OVERLAYING DIV
    $("#overlay").fadeOut();
});

const imgs = [
    "4-20-2025_Easter_Sunrise_Service",
    "AshWednesday2025",
    "ballice",
    "basklove",
    "boards",
    "coffee",
    "doorpolicy",
    "EasterSunday2025",
    "empwomen",
    "eployparty",
    "fallback",
    "fallcross",
    "GoodFriday2025",
    "gradsun",
    "greens",
    "HolySaturday2025",
    "HolyWeek2025",
    "kitchenshow",
    "kolaches",
    "lifeneon",
    "MaundyThursday2025",
    "ophouse",
    "PalmSunday2025",
    "pecan",
    "Plarnathon_March_2025",
    "SpringFeverSunday2025",
    "Trinity_Logo_Emblem_Circle_1",
    "Trinity_Logo_Emblem_Circle_2",
    "Trinity_Logo_Emblem_Circle_3",
    "wayseek",
    "wedmeal",
];

shuffle(imgs);

const imgFolder = "./img/";
const thumsFolder = "./thumbs/";
const dotPng = ".png";
const dotJpg = ".jpg";

for (let i = 0; i < imgs.length; i++) {
    let aTag = document.createElement("a");
    aTag.href = imgFolder + imgs[i] + dotPng;
    aTag.dataset.fslightbox = "gallery";
    aTag.style.backgroundColor = "#fff";

    let imgTag = document.createElement("img");
    imgTag.src = thumsFolder + imgs[i] + dotJpg;
    imgTag.className = "thum";
    imgTag.setAttribute("rel", "preload");
    imgTag.setAttribute("as", "image");
    imgTag.style.backgroundColor = "rgba(255,255,255,0) !important";

    aTag.appendChild(imgTag);
    document.getElementById("divGrid").appendChild(aTag);
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}

/*
<a href="./img/SpringFeverSunday2025.png"
data-fslightbox="gallery">
    <img src="./img/SpringFeverSunday2025.png"
    class="thum" />
</a>
*/
