// 1. Create and inject the UI panel
const panel = document.createElement("div");
panel.id = "my-extension-panel";
panel.innerHTML = "Uzantı Aktif";

Object.assign(panel.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "12px 16px",
    background: "#09d64f",
    color: "white",
    fontSize: "14px",
    borderRadius: "10px",
    zIndex: "999999",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "none"
});

document.body.appendChild(panel);


let intervalId = null;

function setExtensionState(isActive) {
    panel.style.display = isActive ? "block" : "none";

    if (isActive) {
        if (!intervalId) {
            intervalId = setInterval(() => {
                const submitButton = document.getElementById("composer-submit-button");
                if (submitButton) submitButton.disabled = false;
            }, 10);
        }
    } else {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
}


chrome.storage.local.get(["enabled"], (res) => {
    setExtensionState(res.enabled ?? false);
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled) {
        setExtensionState(changes.enabled.newValue);
    }
});