const toggle = document.getElementById("toggle");

chrome.storage.local.get(["enabled"], (res) => {
    toggle.checked = res.enabled ?? false;
});

toggle.addEventListener("change", () => {
    chrome.storage.local.set({ enabled: toggle.checked });
});