function talk(){
    var know = {
        "Ποιός είσαι;" : "Με λένε Λία",
        "Τι κάνεις;" : "Καλά, εσύ;",
        "Who are you?" : "I am Raf"
    };
    var user = document.getElementById('Box'). value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know [user] + "<br>";
}
else{
    document.getElementById('chatLog').innerHTML = "Sorry, i didn't understand <br>";
}
}