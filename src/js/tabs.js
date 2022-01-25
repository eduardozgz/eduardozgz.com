const activeTabIndicatorEl = document.getElementById("active-tab-indicator");
const hoverTabIndicatorEl = document.getElementById("hover-tab-indicator");
const tabSelectorEl = document.getElementById('tab-selector');
const tabsEl = document.getElementById('tabs');
const gblurFilterEl = document.getElementById('gblur');
let currentTab = 'social';

function getTabElement(tabName) {
    for (const tabEl of tabsEl.children) {
        const attTabName = tabEl.attributes?.getNamedItem('tab')?.value;
        if (attTabName === tabName) return tabEl;
    }
    throw new Error("The specified tab doesn't exists")
}

function getTabButtonElement(tabName) {
    for (const buttonEl of tabSelectorEl.children) {
        const attTabName = buttonEl.attributes?.getNamedItem('tab')?.value;
        if (attTabName === tabName) return buttonEl;
    }
    throw new Error("The specified tab doesn't exists")
}

function moveActiveTabIndicator(tabName, windowIsResizing = false) {
    const activeButtonRect = getTabButtonElement(tabName).getBoundingClientRect();
    const tabSelectorRect = tabSelectorEl.getBoundingClientRect();

    // Resize to fit the button
    activeTabIndicatorEl.style.width = (activeButtonRect.width - 22) + 'px';

    if (windowIsResizing) activeTabIndicatorEl.style.transition = "none";
    // Move to the new coords
    const x = activeButtonRect.x - tabSelectorRect.x;

    activeTabIndicatorEl.style.transform = `translateX(${x}px)`;

    if (windowIsResizing) {
        activeTabIndicatorEl.style.transition = "transform 300ms ease";
    }
}

function showHoverTabIndicator(tabName) {
    const hoverButtonRect = getTabButtonElement(tabName).getBoundingClientRect();
    const tabSelectorRect = tabSelectorEl.getBoundingClientRect();
    hoverTabIndicatorEl.style.display = 'initial';

    // Resize to fit the button
    hoverTabIndicatorEl.style.width = (hoverButtonRect.width - 22) + 'px';

    // Move to the new coords
    const x = hoverButtonRect.x - tabSelectorRect.x;

    hoverTabIndicatorEl.style.left = x + 'px';
    hoverTabIndicatorEl.classList.add('visible');
}

function hideHoverTabIndicator() {
    hoverTabIndicatorEl.style.display = 'none';
    hoverTabIndicatorEl.classList.remove('visible');
}

function switchTab(tabName) {
    // Display tab
    getTabElement(currentTab).style.display = "none";
    currentTab = tabName;
    getTabElement(tabName).style.display = "flex";

    moveActiveTabIndicator(tabName);
}

if (window.location.hash) {
    currentTab = window.location.hash.slice(1);
}

switchTab(currentTab)

for (const buttonEl of tabSelectorEl.children) {
    const attTabName = buttonEl.attributes.getNamedItem('tab').value;
    buttonEl.addEventListener('click', () => {
        window.location.hash = attTabName;
        switchTab(attTabName);
    })
    buttonEl.addEventListener('onfocus', () => showHoverTabIndicator(attTabName))
    buttonEl.addEventListener('mouseover', () => showHoverTabIndicator(attTabName))
    buttonEl.addEventListener('mouseout', () => hideHoverTabIndicator())
}

window.onresize = () => {
    // re-draw the active tab indicator again
    moveActiveTabIndicator(currentTab, true);
}