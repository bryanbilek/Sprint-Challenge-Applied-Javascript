// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerDetails = {
    date: 'SMARCH 28, 2019',
    title: 'Lambda Times',
    temp: '98°'
};
const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header(headerDetails));

function Header(items) {
    const head = document.createElement("div"),
        headDate = document.createElement("span"),
        headTitle = document.createElement("h1"),
        headTemp = document.createElement("span")

    head.classList.add("header");
    headDate.classList.add("date");
    headTemp.classList.add("temp");

    headDate.textContent = items.date;
    headTitle.textContent = items.title;
    headTemp.textContent = items.temp;

    head.append(headDate, headTitle, headTemp);

    return head;
}

