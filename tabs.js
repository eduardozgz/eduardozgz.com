let activeTab = document.getElementById("tabs").firstElementChild.id.slice(4);
document.getElementById("tabs").firstElementChild.style.display = "flex";
let activeTabIndicatorElement = document.getElementById("active-tab-indicator");


getTabElement = (tab) => {
    return document.getElementById("tab-" + tab);
}

getTabSelectorElement = (tab) => {
    return document.getElementById("selector-" + tab);
}

const moveIndicator = () => {
    let activeSelectorRect = getTabSelectorElement(activeTab).getBoundingClientRect();

    let x = activeSelectorRect.x;
    let y = activeSelectorRect.y;

    activeTabIndicatorElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
    
}

const resizeIndicator = () => {
    let activeSelectorRect = getTabSelectorElement(activeTab).getBoundingClientRect();
    activeTabIndicatorElement.style.width = (activeSelectorRect.width - 20) + 'px';
}

resizeIndicator();
moveIndicator();
document.getElementById("active-tab-indicator").style.display = 'initial';


window.onresize = () => {
    resizeIndicator();
    activeTabIndicatorElement.style.transition = "none";
    moveIndicator();
    activeTabIndicatorElement.style.transition = "transform 300ms ease";
}

const switchTab = (tab) => {
    getTabElement(activeTab).style.display = "none";
    activeTab = tab;
    getTabElement(activeTab).style.display = "flex";

    moveIndicator();
}
