

function saveData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const data = { "name": name, "email": email };
    const jsonData = JSON.stringify(data);

    // XMLHttpRequest-Objekt erstellen
    const xhr = new XMLHttpRequest();

    // Öffnen einer neuen Anfrage (HTTP-POST-Methodenaufruf) und Konfigurieren der Anforderung
    xhr.open("POST", "email.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Daten erfolgreich gespeichert!");
        }
    };

    // Senden der Anforderung
    xhr.send(jsonData);
}



// select anchor element
let sound = document.querySelector('.jayButton');
// let jayButton = document.querySelector('.jayButton');
// return array
let audioArr = document.getElementsByTagName('audio');

console.log(audioArr);
// add event Listener

sound.addEventListener('mouseenter', ()=>{
    audioArr[0].play()
});













/*var audio = document.getElementsByTagName("audio")[0];
audio.play();

// or with an ID

var audio = document.getElementById("mySoundClip");
audio.play();

var audio = $("#mySoundClip")[0];
audio.play();*/

/*
var audio = $("#mySoundClip")[0];
$("ac-link").mouseenter(function () {
    audio.play();
});*/


