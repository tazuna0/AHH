var input = document.querySelector(".inputbox")
var searchbutton = document.querySelector(".searchbutton")
var container = document.querySelector(".container")
var container_img = document.querySelector(".container_img")
var container_info = document.querySelector(".container_info")
var swordName = document.querySelector("#swordName")
var swordDate = document.querySelector("#swordDate")
var swordInfo = document.querySelector("#swordInfo")

// create image
var img = document.createElement('img');
container_img.appendChild(img); 

var swordTypes = [

    {
        swordId: 1,

        swordName: "Sword",

        swordImg: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQEZG345DJPn7kbMiDdwStzqtUJh6PvP8TRyfw3TES1XslVRBWXdPavgpKMG9xv8iII4fmMhDjhjcmlQUc9QAU",

        swordDate: "3300 BC",

        swordInfo: "A weapon with a long metal blade and a hilt with a hand guard, used for thrusting or striking and now typically worn as part of ceremonial dress."
    },

    {
        swordId: 2,

        swordName: "Claymore",

        swordImg: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Two-handed_Highland_sword.JPG",

        swordDate: "c. 1400-1700",

        swordInfo: "A claymore is either the Scottish variant of the late medieval two-handed sword or the Scottish variant of the basket-hilted sword. The former is characterised as having a cross hilt of forward-sloping quillons with quatrefoil terminations and was in use from the 15th to 17th centuries.",
    },

    {
        swordId: 3,

        swordName: "Katana",

        swordImg: "https://nygameon-i04.mycdn.no/mysimgprod/nygameon_mystore_no/images/23924_Turkey_Creek_Trading_CO._Klassisk_H_ndlaget__2.jpg/w1200h1157.jpg",

        swordDate: "around 700 CE",

        swordInfo: "A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands. Developed later than the tachi, it was used by samurai in feudal Japan and worn with the edge facing upward.",
    },

    {
        swordId: 4,

        swordName: "Zweihander",

        swordImg: "https://www.gn.no/uploads/5490/3/CS88WGS%201.png",

        swordDate: "1500-present",

        swordInfo: "The Zweihänder, also Doppelhänder, Beidhänder, Bihänder or Bidenhänder, is a large two-handed sword of german descent primarily in use during the 16th century.",
    },

    {
        swordId: 5,

        swordName: "Rapier",

        swordImg: "https://gn.no/uploads/4973/1/CN926849%201.jpg",

        swordDate: "1500-1600",

        swordInfo: "A rapier or espada ropera is a type of sword with a slender and sharply-pointed two-edged blade that was popular in Western Europe, both for civilian use and as a military side arm, throughout the 16th and 17th centuries. ",
    },



];


searchbutton.addEventListener("click", function(){
    img.src = " "
    swordName.innerHTML = " "
    swordDate.innerHTML = " "
    swordInfo.innerHTML = " "
    if (input.value == "Sword" || input.value == "sword") {
        // add image source
        img.src = swordTypes[0].swordImg

        // add name
        swordName.innerHTML = swordTypes[0].swordName

        // add date
        swordDate.innerHTML = swordTypes[0].swordDate

        // add info
        swordInfo.innerHTML = swordTypes[0].swordInfo

    }
    else if (input.value == "Claymore" || input.value == "claymore") {
        img.src = swordTypes[1].swordImg
        swordName.innerHTML = swordTypes[1].swordName
        swordDate.innerHTML = swordTypes[1].swordDate
        swordInfo.innerHTML = swordTypes[1].swordInfo
    }
    else if (input.value == "Katana" || input.value == "katana") {
        img.src = swordTypes[2].swordImg
        swordName.innerHTML = swordTypes[2].swordName
        swordDate.innerHTML = swordTypes[2].swordDate
        swordInfo.innerHTML = swordTypes[2].swordInfo
    }
    else if (input.value == "Zweihander" || input.value == "zweihander") {
        img.src = swordTypes[3].swordImg
        swordName.innerHTML = swordTypes[3].swordName
        swordDate.innerHTML = swordTypes[3].swordDate
        swordInfo.innerHTML = swordTypes[3].swordInfo
    }
    else if (input.value == "Rapier" || input.value == "rapier") {
        img.src = swordTypes[4].swordImg
        swordName.innerHTML = swordTypes[4].swordName
        swordDate.innerHTML = swordTypes[4].swordDate
        swordInfo.innerHTML = swordTypes[4].swordInfo
    }
    else if (input.value != " ") {
    input.value = ""
    }

})