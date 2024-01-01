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
    var hiddenElementUI = document.getElementById("hidden-ui")
    var hiddenElementGames = document.getElementById("hidden-games")
    var hiddenElementScripting = document.getElementById("hidden-scripting")

    if (hiddenElementUI.style.position == "absolute") {
        hiddenElementUI.style.position = "relative"
        hiddenElementUI.style.visibility = "visible"

        fadeIn(hiddenElementUI)

        hiddenElementGames.style.position = "relative"
        hiddenElementGames.style.visibility = "visible"

        fadeIn(hiddenElementGames)

        hiddenElementScripting.style.position = "relative"
        hiddenElementScripting.style.visibility = "visible"

        fadeIn(hiddenElementScripting)

    } else {
        hiddenElementUI.style.position = "absolute"
        hiddenElementUI.style.visibility = "hidden"
        hiddenElementUI.style.opacity = 0

        hiddenElementGames.style.position = "absolute"
        hiddenElementGames.style.visibility = "hidden"
        hiddenElementUI.style.opacity = 0

        hiddenElementScripting.style.position = "absolute"
        hiddenElementScripting.style.visibility = "hidden"
        hiddenElementUI.style.opacity = 0

    }
}
