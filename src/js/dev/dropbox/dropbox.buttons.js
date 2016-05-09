function toggleButton(action, button) {
    document.getElementById(`js-${button}`).classList[action]("show");
}

function showButton(button) {
    toggleButton("add", button);
}

function hideButton(button) {
    toggleButton("remove", button);
}

export {
    showButton as show,
    hideButton as hide
};