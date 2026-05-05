let $P = document.querySelector("p");
let $TEXT = $P.innerText;
let $LIST = $TEXT.split(" ");
let $WORDS = $LIST.length;
let $TIME = $WORDS / 250;
$P.innerText += " (Reading Time: " + $TIME + " minutes)";
