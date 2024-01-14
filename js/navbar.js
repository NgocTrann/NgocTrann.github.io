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
    var dropdownContent = document.getElementById("dropdown")

    if (dropdownContent.style.display == "block") {
        dropdownContent.style.display = "none"

    } else {
        dropdownContent.style.display = "block"

        fadeIn(hiddenElementGames)
        fadeIn(hiddenElementScripting)
    }
   
}
