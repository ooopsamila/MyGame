window.addEventListener('keypress', keyPressListener, true);

function keyPressListener(evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 38:
            /* Up arrow was pressed */
            break;
        case 40:
            /* Down arrow was pressed */
            break;
        case 37:
            /* Left arrow was pressed */
            break;
        case 39:
            /* Right arrow was pressed */
            break;
        default:
            console.log(evt.keyCode);
    }
}