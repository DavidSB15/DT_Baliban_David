//console.log("Client statuis ...");
var socket = io.connect ('127.0.0.1:8000');

try {

    socket.on('connect', function (data) {
        socket.emit("message-from-client", "Hello to everyone from " + checkBrowser());
		console.log("client started");
    });

    socket.on('message-from-server', function (message) {
        console.log("received message: "+message);
    });

}
catch (err) {
    alert('ERROR: socket.io encountered a problem:\n\n' + err);
}

function checkBrowser() {
    var browser = 'Noname browser';
    if (navigator.userAgent.search("Chrome") > -1) {
        browser = "Chrome";
    }
    if (navigator.userAgent.search("Firefox") > -1) {
        browser = "Firefox";
    }
    return browser;
}

document.getElementById("send").addEventListener("click", sendMessage);
function sendMessage() {
    var message = document.getElementById("message").value;
    socket.emit("message-from-client", message);
	console.log("sent message: "+message);

    return message;
}
