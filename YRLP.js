// client.lua

let chatInputActive = false;

function startChat() {
    chatInputActive = true;
    DisplayOnscreenKeyboard(1, "FMMC_KEY_TIP8", "", "", "", "", "", 128 + 1);
}

function stopChat() {
    chatInputActive = false;
    DisplayOnscreenKeyboard(1, "FMMC_KEY_TIP8", "", "", "", "", "", 0);
}

function isChatInputActive() {
    return chatInputActive;
}

function chatMessage(author, message) {
    let playerName = GetPlayerName(PlayerId());
    let chatMessage = "[" + author + "]: " + message;

    if (author === playerName) {
        chatMessage = "[me]: " + message;
    }

    AddTextEntry("chatMessage", chatMessage);
    BeginTextCommandThefeedPost("chatMessage");
    EndTextCommandThefeedPostTicker(false, false);
}
