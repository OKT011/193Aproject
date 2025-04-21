function showAlert() {
    alert("Hello, world!");
}

function biggerText() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancyShmancy() {
    var textArea = document.getElementById("textArea");

    // Make the text bold, blue, and underlined
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function boringBetty() {
    var textArea = document.getElementById("textArea");

    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function LeMoo() {
    var textArea = document.getElementById("textArea");

    // Get the current text from the text area
    var text = textArea.value;

    // Uppercase the entire text
    text = text.toUpperCase();

    // Split the text into sentences based on the period character.
    var sentences = text.split('.');

    // For each sentence, add "-Moo" to the last word.
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence) {
            var words = sentence.split(" ");
            words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
            sentences[i] = words.join(" "); // Rejoin the sentence with the modified last word
        }
    }

    // Join the sentences back together with a period and space in between.
    text = sentences.join('. ') + ".";

    // Set the modified text back to the textarea
    textArea.value = text;
}