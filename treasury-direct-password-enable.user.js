// ==UserScript==
// @name        TreasuryDirect Password + Autocomplete Enable
// @namespace   chriscarini.com
// @description A userscript to enable user input (and autocomplete for password managers) on the Treasury Direct website (treasurydirect.gov).
// @author      Chris Carini (https://github.com/ChrisCarini)
// @match       https://www.treasurydirect.gov/RS/PW-Display.do
// @version     0.0.3
// @grant       none
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVQ4jdWTsUrDUBSGv7ShWrBUF4kOFoKCm4KDUzMIHXwAR4U8gU9QEBzc+wIZHLt1UXRLJwuaKjiIJZAimg6SlAZ6Sws6SEKiCNG6eKbL+fm/e+5/75XKx5dvTFGZacx/ApDDxWZpISEEYozrC1aVQtRrO973gNr+VkKwHA/DtL/061ddDNMmGE0AyJZ2Do5CA8CaUqB28UDj5omcnGV3Y5mz22fqrS5KMU95fZGcnKFlvwKxDNqOh9sXAHR6AZ1eEO3q9gXndy8cnl4zEGP2tleYm5GTgDQVjCYROMzmx7egFGc/pvKHQCzENEZdU1maz2PFjpsKoGsquqYC8OgOOGncR1oCYDkemHY0nusPMUw7oX9+C9L//gvNakX6NaBZrUgA71kJbfLg49+MAAAAAElFTkSuQmCC
// @license     https://github.com/ChrisCarini/treasury-direct-password-enable-user-script/blob/main/LICENSE
// @updateURL   https://raw.githubusercontent.com/ChrisCarini/treasury-direct-password-enable-user-script/main/treasury-direct-password-enable.user.js
// @downloadURL https://raw.githubusercontent.com/ChrisCarini/treasury-direct-password-enable-user-script/main/treasury-direct-password-enable.user.js
// ==/UserScript==


/*****************************************************************************************************************
* NOTICE!!! This repository is archived and no longer maintained.
* 
* In 2023, TreasuryDirect announced: 
*     "The Virtual Keyboard will be removed the week of May 7th to improve the customer experience."
*     
* Since the virtual keyboard has been removed, this userscript is no longer necessary.
* 
* As of September 7, 2026, TreasuryDirect also notes:
*     "On September 13, 2026, we’re introducing a more secure login experience through ID.me for TreasuryDirect!"
* 
* To wrap up the utility of this repo, the final code is being commented out
* below to become a `noop` for those that may still have this installed.
*/

// Array.from(document.getElementsByClassName('pwordinput'))
//     .forEach((elem) => {
//             elem.removeAttribute('readonly');
//             elem.setAttribute('autocomplete', 'on');
//         }
//     );
