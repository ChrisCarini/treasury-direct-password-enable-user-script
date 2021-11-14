// ==UserScript==
// @name        TreasuryDirect Password + Autocomplete Enable
// @namespace   chriscarini.com
// @description A userscript to enable user input (and autocomplete for password managers) on the Treasury Direct website (treasurydirect.gov).
// @author      Chris Carini (https://github.com/ChrisCarini)
// @match       https://www.treasurydirect.gov/RS/PW-Display.do
// @version     0.0.2
// @grant       none
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVQ4jdWTsUrDUBSGv7ShWrBUF4kOFoKCm4KDUzMIHXwAR4U8gU9QEBzc+wIZHLt1UXRLJwuaKjiIJZAimg6SlAZ6Sws6SEKiCNG6eKbL+fm/e+5/75XKx5dvTFGZacx/ApDDxWZpISEEYozrC1aVQtRrO973gNr+VkKwHA/DtL/061ddDNMmGE0AyJZ2Do5CA8CaUqB28UDj5omcnGV3Y5mz22fqrS5KMU95fZGcnKFlvwKxDNqOh9sXAHR6AZ1eEO3q9gXndy8cnl4zEGP2tleYm5GTgDQVjCYROMzmx7egFGc/pvKHQCzENEZdU1maz2PFjpsKoGsquqYC8OgOOGncR1oCYDkemHY0nusPMUw7oX9+C9L//gvNakX6NaBZrUgA71kJbfLg49+MAAAAAElFTkSuQmCC
// @license     https://github.com/ChrisCarini/treasury-direct-password-enable-user-script/blob/main/LICENSE
// @updateURL   https://raw.githubusercontent.com/ChrisCarini/treasury-direct-password-enable-user-script/main/treasury-direct-password-enable.user.js
// @downloadURL https://raw.githubusercontent.com/ChrisCarini/treasury-direct-password-enable-user-script/main/treasury-direct-password-enable.user.js
// ==/UserScript==

Array.from(document.getElementsByClassName('pwordinput'))
    .forEach((elem) => {
            elem.removeAttribute('readonly');
            elem.setAttribute('autocomplete', 'on');
        }
    );