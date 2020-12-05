let activeTab = document.getElementById("tabs").firstElementChild.id.slice(4);
document.getElementById("tabs").firstElementChild.style.display = "flex";
let activeTabIndicatorElement = document.getElementById("active-tab-indicator");
let yOfTabSelector = document.getElementById("tab-selector").getBoundingClientRect().y;

getTabElement = (tab) => {
    return document.getElementById("tab-" + tab);
}

getTabSelectorElement = (tab) => {
    return document.getElementById("selector-" + tab);
}

const moveIndicator = (nojump) => {
    let activeSelectorRect = getTabSelectorElement(activeTab).getBoundingClientRect();

    let x = activeSelectorRect.x;
    let y = yOfTabSelector;

    activeTabIndicatorElement.style.transform = `translateX(${x}px) translateY(${y}px)`;

    if (!nojump) window.scrollTo(0, yOfTabSelector);

}

const resizeIndicator = () => {
    let activeSelectorRect = getTabSelectorElement(activeTab).getBoundingClientRect();
    activeTabIndicatorElement.style.width = (activeSelectorRect.width - 22) + 'px';
}

resizeIndicator();
moveIndicator();
document.getElementById("active-tab-indicator").style.display = 'initial';


window.onresize = () => {
    resizeIndicator();
    activeTabIndicatorElement.style.transition = "none";
    moveIndicator(false);
    activeTabIndicatorElement.style.transition = "transform 300ms ease";
}

const switchTab = (tab) => {
    getTabElement(activeTab).style.display = "none";
    activeTab = tab;
    getTabElement(activeTab).style.display = "flex";

    moveIndicator();
}
