document.querySelector("form").addEventListener("submit", () => {
    // avant d'envoyer les données au serveur, on peut faire une étape de validation

    // on n'envoie pas vraiment les données pour l'exercice
    document.querySelector("main").innerHTML = "Vous êtes connecté :)";
});



// function show() {
//     let cx = document.getElementById('toggle-password-visibility');
//     cx.setAttribute('type', 'text');
// }

// function hide() {
//     let cx = document.getElementById('toggle-password-visibility');
//     p.setAttribute('type', 'password');
// }

// let mdpShow = 0;
// document.getElementsById("toggle-password-visibility").addEventListener("click", function() {
//     if (mdpShow == 0) {
//         mdpShow = 1;
//         show();
//     } else {
//         mdpShow = 0;
//         hide();
//     }
// }, false);




// document.write(cx);



// if () {
//   code à exécuter si la condition est true
// } else {
//   sinon exécuter cet autre code à la place
// }


///////////////////////////////////////////////:




// function show() {
//     var p = document.getElementById('pwd');
//     p.setAttribute('type', 'text');
// }

// function hide() {
//     var p = document.getElementById('pwd');
//     p.setAttribute('type', 'password');
// }
// var pwShown = 0;
// document.getElementById("eye").addEventListener("click", function() {
//     if (pwShown == 0) {
//         pwShown = 1;
//         show();
//     } else {
//         pwShown = 0;
//         hide();
//     }
// }, false);

let checkBox = document.getElementById("toggle-password-visibility")
let password = document.getElementById("password")

checkBox.addEventListener('click', function() {
    if (checkBox.checked) {
        password.setAttribute("type", "text")
    } else {
        password.setAttribute("type", "password")
    }
});