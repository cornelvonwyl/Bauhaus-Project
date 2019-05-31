/*  function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}
*/


/*------------ SEITEN NAVIGATION VORWÄRTS PART 1 ------------*/
var WhenButtonRightClicked = document.querySelector(".nextpage-right");
WhenButtonRightClicked.addEventListener("click", function () {
    const load = document.querySelector(".loader-forward");
    load.classList.add("change-page-forward");

    localStorage.setItem("whichAnimation", "fromright");

    /*const GetClassesToRemove = document.querySelectorAll(".nextpage-left, .nextpage-right, .main-image");
    for (let i = 0; i < GetClassesToRemove.length; i++) {
        GetClassesToRemove[i].classList.add("displaynone-button-image");
    }*/
});




/*------------ SEITEN NAVIGATION RÜCKWÄRTS PART 1 ------------*/
var WhenButtonLeftClicked = document.querySelector(".nextpage-left");
WhenButtonLeftClicked.addEventListener("click", function () {
    const load = document.querySelector(".loader-back");
    load.classList.add("change-page-back");

    localStorage.setItem("whichAnimation", "fromleft");

    const GetClassesToRemove = document.querySelectorAll(".nextpage-left, .nextpage-right, .main-image");
    for (let i = 0; i < GetClassesToRemove.length; i++) {
        GetClassesToRemove[i].classList.add("displaynone-button-image");
    }
});

/*------------ SEITEN NAVIGATION RÜCKWÄRTS PART 2 ------------*/
function LoadIndex() {
    const loader = document.querySelector(".loader-back-nextpage");
    loader.classList.add("change-page-back2");
}


function createTimedLink(element, callback, timeout) {
    setTimeout(function () {
        callback(element);
    }, timeout);
    return false;
}

function myFunction(element) {
    /* Block of code, with no 'return false'. */
    window.location = element.href;
}







if (localStorage.getItem("whichAnimation") === "fromright") {
    const loader = document.querySelector(".loader-forward-nextpage");
    loader.classList.add("change-page-forward2");

    const removeit = document.querySelector(".loader-back-nextpage");
    removeit.classList.add("displaynone");

}


if (localStorage.getItem("whichAnimation") === "fromleft") {
    const loader = document.querySelector(".loader-back-nextpage");
    loader.classList.add("change-page-back2");

    const removeit = document.querySelector(".loader-forward-nextpage");
    removeit.classList.add("displaynone");

}



/*window.addEventListener('scroll', () => {
    if (isElementInViewport(tryout)) {
        const animationfire = document.querySelector("#tryout");
        animationfire.classList.add("resize");
    }
  })



function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )


}*/

/*
window.addEventListener('scroll', () => {
    if (isElementInViewport(tryout)) {
        var animationfire = document.querySelectorAll(".loadanimation");

        for(let i = 0; i < animationfire.length; i++){
        animationfire[i].classList.add("loadandanimationit");
        }
    }
  })



function isElementInViewport (.el) {

   for(let i = 0; i < 100; i++){
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )

}
}*/


window.addEventListener('scroll', () => {
   for (let x = 0; x < positions.length; x++){
    if (positions[x] < 0) {
        var animationfire = document.querySelectorAll(".loadanimation");

        for(let i = 0; i < animationfire.length; i++){
        animationfire[i].classList.add("loadandanimationit");
        }
    }
}
  })



  var apps = document.querySelectorAll(".loadanimation"),
  positions = [];

Array.prototype.forEach.call(apps, function (app, index) {
  var positionInfo = app.getBoundingClientRect();

  positions.push(positionInfo);
  console.log(index + ":" + positionInfo.top + ":" + positionInfo.left);
});

console.log(positions);














/*
var rect = document.querySelector(".loadanimation").getBoundingClientRect();

let top1 = rect.top;
let bottom = rect.bottom;

if (rect.top > 20) {
    rect.classList.add("loadandanimationit")
}

console.log(rect);*/



/*
window.addEventListener("scroll", () => {
    if (top1 > 0) {
        const animationfire = document.querySelector("#tryout");
        animationfire.classList.add("resize");
    }
})*/