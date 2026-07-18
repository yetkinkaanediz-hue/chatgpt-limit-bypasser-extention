# ChatGPT Limit Bypasser

A lightweight, privacy-focused browser extension designed to eliminate front-end UI frustrations, prevent button lockouts, and keep your AI-assisted workflow moving without interruption.

---

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
- [Installation](#installation)
  - [Google Chrome / Chromium Browsers](#google-chrome--chromium-browsers)
  - [Mozilla Firefox](#mozilla-firefox)
- [Privacy & Security](#privacy--security)
- [Disclaimer](#disclaimer)
- [License](#license)

---

## Overview

During high-intensity sessions, ChatGPT's official web interface occasionally disables the message submit button. This can happen due to minor front-end script lags, client-side cooling periods, or temporary UI freezes after receiving a response. 

**ChatGPT Limit Bypasser** fixes this flaw. It actively watches the webpage's Document Object Model (DOM) and ensures that the submit button remains fully operational, saving you from unnecessary page refreshes and lost momentum.

---

## Key Features

* **Continuous DOM Monitoring:** Runs silently in the background, instantly lifting any `disabled` attributes or CSS styles applied to the send button.
* **On/Off Toggle Switch:** Features a clean extension popup interface that allows you to easily enable or disable the bypass logic on the fly.
* **Privacy by Design:** Zero external dependencies. The extension runs entirely locally, meaning no analytics tracking, no remote logging, and absolutely no data harvesting.
* **Resource Efficient:** Written in pure, vanilla JavaScript with highly optimized mutation observers, ensuring zero impact on your CPU or RAM usage.

---

## How It Works

The extension utilizes a `MutationObserver` targeting the specific selectors of the ChatGPT text entry and submission container. When the web app updates its state and marks the button as disabled, the extension immediately intercepts the mutation event and reverts the element back to its enabled state.

---

## Installation

### Google Chrome / Chromium Browsers
1. Clone or download this repository as a ZIP file and extract it.
2. Navigate to `chrome://extensions/` in your browser URL bar.
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the root folder containing the extension files (where the `manifest.json` is located).

### Mozilla Firefox
You can install the extension directly from the official store or load it manually for development.

#### Method 1: Install from Firefox Add-ons (Recommended)
1. Visit the [ChatGPT Limit Bypasser on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/chatgpt-limit-bypasser/).
2. Click **Add to Firefox** to install instantly.

#### Method 2: Manual Installation (Development)
1. Clone or download this repository.
2. Navigate to `about:debugging#/runtime/this-firefox` in Firefox.
3. Click **Load Temporary Add-on...**.
4. Select the `manifest.json` file from your local directory.

---

## Privacy & Security

We believe in absolute transparency:
* **No Outbound Requests:** The extension does not connect to any servers outside of the active ChatGPT tab.
* **No Content Inspection:** The code does not read, log, or parse the text prompts you send or the responses you receive.

---

## Disclaimer

This extension is a **frontend UI utility only**. It overrides client-side interface freezes and button state attributes. It **cannot and does not** bypass backend server-side limitations, rate caps, token rules, or subscription boundaries set by OpenAI. If your account hits an official server-side throttling limit, OpenAI's backend will reject the request normally.

---

## License

This project is open-source software licensed under the [MIT License](LICENSE).
