var showcaseElement = document.getElementsByClassName('showcase-bttn')

function fadeIn(el) {
    el.style.opacity = 0
    var opacity = 0;
    var interval = setInterval(function() {
       if (opacity < 1) {
          opacity += 0.1;
          el.style.opacity = opacity;
       }
    }, 50);
 }

function toggleHidden() {
    var hiddenElementGames = document.getElementById("hidden-games")
    var hiddenElementScripting = document.getElementById("hidden-scripting")

    if (hiddenElementGames.style.position == "absolute") {
        hiddenElementGames.style.position = "relative"
        hiddenElementGames.style.visibility = "visible"

        fadeIn(hiddenElementGames)

        hiddenElementScripting.style.position = "relative"
        hiddenElementScripting.style.visibility = "visible"

        fadeIn(hiddenElementScripting)

    } else {
        hiddenElementGames.style.position = "absolute"
        hiddenElementGames.style.visibility = "hidden"
        hiddenElementUI.style.opacity = 0

        hiddenElementScripting.style.position = "absolute"
        hiddenElementScripting.style.visibility = "hidden"
        hiddenElementUI.style.opacity = 0

    }
}
