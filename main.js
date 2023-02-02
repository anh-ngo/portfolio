const imageDictionary = {
    "archives": "./assets/img/archives.png",
    "cookie-jar": "./assets/img/cookie-jar.png",
    "hesburger": "./assets/img/hesburger.png",
    "mend-map": "./assets/img/mend-map.png",
    "sensory-stitching": "./assets/img/sensory-stitching.png",
    "vfcd": "./assets/img/vfcd.png"
};
    
const defaultImage = "./assets/img/sensory-stitching-1.png";
const displayImage = document.getElementById("display-img");
displayImage.classList.remove("hide");
displayImage.setAttribute("src", defaultImage);
    
Object.keys(imageDictionary).forEach(key => {
    const parentElement = document.getElementById(key);
    const element = parentElement.querySelector("a");
    element.addEventListener("mouseenter", () => {
        displayImage.setAttribute("src", imageDictionary[key]);
        displayImage.classList.remove("hide");
    });
});