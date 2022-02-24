/*
BOOKMARKLET: javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://zution.github.io/Bookmarklet/bookmarklet.js';el.onerror=function(){alert("Due to the Content Security Policy, this bookmarklet is unable to run. There is nothing you can do. If you are the owner and are a developer, consider going here: \n\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP");};document.getElementsByTagName('body')[0].appendChild(el);})();

List of functions:
 - calc: calculates two-number equations, supporting addition, subtraction, multiplication, division, modulus, and power
 - srch: searches google
 - dark: enables dark mode (does not work on some sites, on others it may look ugly)
   CREDIT: https://forum.duolingo.com/comment/39222130/GUIDE-How-to-get-features-like-DarkMode-and-Font-Style-using-Bookmarklets
 - revert dark: reverts dark mode if activated via bookmarklet
   CREDIT: https://forum.duolingo.com/comment/39222130/GUIDE-How-to-get-features-like-DarkMode-and-Font-Style-using-Bookmarklets (modified code from here)
 - remove cookies: clears cookies on page
   CREDIT: https://github.com/timothybrady/Clear-cookies-bookmarklet
 - shorten url: shortens the current URL with is.gd URL shortener
 - edit page: edits the page (for coders mainly; usable by most people with a bit of experimenting and guessing)
CREDIT: https://x-ray-goggles.mouse.org/
 - performance: shows EXTREMELY technical statistics, most will not understand
   CREDIT: https://github.com/micmro/performance-bookmarklet
*/
var answer = prompt("What do you need?");
switch(answer) {
    case "calc":
        let num1 = Number(prompt("Number 1"));
        let opr = String(prompt("Operator"));
        let num2 = Number(prompt("Number 2"));
        switch(opr) {
            case "+":
                alert(num1 + num2);
                break;
            case "-":
                alert(num1 - num2);
                break;
            case "*":
                alert(num1 * num2);
                break;
            case "/":
                alert(num1 / num2);
                break;
            case "%":
                alert(num1 % num2);
                break;
            case "^":
                alert(Math.pow(num1, num2));
                break;
            default:
                alert("Invalid answer.");
        }
        break;
    case "srch":
        window.open("https://www.google.com/search?q=" + prompt("Search Google"), "_blank");
        break;
    case "dark":
        javascript:(d=>{d.head.appendChild(d.createElement('style')).innerText='html,img,video{filter:invert(1)hue-rotate(180deg)sepia(0)grayscale(0.05);filter:invert(0.8)hue-rotate(180deg)sepia(0)grayscale(0.05))}';})(document);
        alert("Dark mode activated! Note that some websites may break, and websites already in dark mode will turn to light mode.");
        break;
    case "revert dark":
        javascript:(d=>{d.head.appendChild(d.createElement('style')).innerText='html,img,video{filter:invert(0)hue-rotate(0deg)sepia(0)grayscale(0);filter:invert(0)hue-rotate(0deg)sepia(0)grayscale(0))}';})(document);
        alert("Dark mode reverted! Broken websites will now appear normal, and all websites with dark mode activated using this will be in dark mode.");
        break;
    case "remove cookies":
        var numCookies=0; var cookieArray=document.cookie.split("; "); for(var i=0; i<cookieArray.length && cookieArray[i]; i++) {numCookies++; for(var subDomain= "." + location.host; subDomain; subDomain=subDomain.replace(/^(?:%5C.|[^%5C.]+)/, "")){ for(var curPath =location.pathname; curPath; curPath=curPath.replace(/.$/,"")){document.cookie=(cookieArray[i] + "; domain=" + subDomain + "; path=" + curPath + "; expires="+new Date((new Date()).getTime()-1e11).toGMTString());}}} alert(numCookies + " cookies were removed."); window.location.href = "http://" + window.location.host + window.location.pathname;
        break;
    case "edit page":
        var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);
        break;
    case "shorten url":
        window.open("https://is.gd/create.php?longurl=" + encodeURIComponent(location.href), "_blank");
        break;
    case "performance":
        javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js';el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js");};document.getElementsByTagName('body')[0].appendChild(el);})();
        break;
    case "joke":
        var jokes = ["What do you call a bagel that can fly?", "Why can't a nose be 12 inches long?", "If you're American when you go in and when you go out, what are you when you're inside the bathroom?", "What do you call a can opener that can't open cans?", "Did you hear about the Italian chef that passed away?", "I sold my vacuum cleaner.", "What do you call an alligator in a vest?", "The wedding was so beautiful.", "What did the janitor say when he jumped out of the closet?", "What did the bison say to his son when he left?", "What did the pirate say when he turned 80?", "That's a pretty good ceiling.", "Did you hear about the kidnapping at the school?", "I hate Russian dolls."];
        var answers = ["A plane bagel!", "Then it would be a foot.", "European (try to understand it)", "A can't opener", "He pasta-way", "All it did was collecting dust.", "An in-vest-i-gator", "Even the cake was in tiers.", "Supplies!", "Bison.", "Aye, matey!", "It's not the best, but it's certainly up there!", "He woke up eventually.", "They're so full of themselves."];
        var randNum = Math.floor(Math.random() * (14));
        alert(jokes[randNum]);
        alert(answers[randNum]);
        break;
    case "convert temp":
        var ans = prompt("C to F or F to C?");
        if (ans == 1 || ans == "C to F" || ans == "one" || ans == "first") {
            alert(Math.round(Number(prompt("temperature?")) * 1.8 + 32) + "° F");
        } else if (ans == 2 || ans == "F to C" || ans == "two" || ans == "second") {
            alert(Math.round((prompt("temperature?") - 32) * 5 / 9) + "° C");
        } else {
            alert("Invalid answer.");
        }
        break;
    case "news":
        alert("")// es, I fully intend to manually update this.
    default:
        alert("Sorry, please enter another command. That command is not recognized.");
}
