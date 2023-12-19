radio.onReceivedString(function (receivedString) {
    if (receivedString == "Da") {
        basic.showString("Da")
    } else if (receivedString == "Nu") {
        basic.showString("Nu")
    }
})
radio.setGroup(1)
