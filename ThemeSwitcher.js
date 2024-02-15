let bgContainerE1 = document.getElementById("bgContainer");
let headingE1 = document.getElementById("heading");
let themeUserInputE1 = document.getElementById("themeUserInput");

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputValue = themeUserInputE1.value;

        if (themeUserInputValue === "Light") {
            bgContainerE1.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';
            headingE1.style.color = "#014d40";
        } else if (themeUserInputValue === "Dark") {
            bgContainerE1.style.backgroundImage = 'url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';
            headingE1.style.color = "#ffffff";
        } else {
            alert("Enter valid theme");
        }
    }
}

themeUserInputE1.addEventListener("keydown", changeTheme);