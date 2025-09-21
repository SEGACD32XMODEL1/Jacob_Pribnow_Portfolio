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
    "4th_Street_Festival_No_Saturday_Night_Worship",
    "Plarn_Slide_September_2025",
    "ROOF_SIMPLE_DONATE",
    "Trinity_Shirt_Sale_3_September_2025",
    "Anny_Farewell_Reception_2025_Slide",
    "Columbarium_Beautification_Meeting_4_6_2025",
    "Cornhusker_Sunday_2025",
    "DisasterResponseTraining2025",
    "FallWorship",
    "Fishing_Tournament_Donations_Needed_2025",
    "GoodFridaySlide",
    "GreeceTripInformationMeeting2025",
    "HospitalityTraining2025SLIDE2",
    "Last_Summer_Meal",
    "Patriotic_Sunday",
    "Project_Connect_Donations_2025_Slide",
    "RedCrossTraining2025",
    "Sharing Our Life Stories Fall 2024 Sky",
    "SodaParty2025",
    "SummerMeals2025",
    "UglySweaterSunday2024",
    "WatchParty_Season1",
    "WatchParty_Season2",
    "Watch_Party_Season_3",
    "Watch_Party_Season_4",
    "WordShortPhraseContest2025",
    "YouthConferenceFeb2025",
    "Youth_Bowling_2025",
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
