// ---------------------------------------------------Build the navigation menu
let sections = document.querySelectorAll("section");

let sections_name = document.querySelectorAll("h1");
let list = document.getElementById("navbar__list");

for (let i = 0; i < sections.length; i++) {
  let noua_lista = document.createElement("li");
  let j = i + 1;
  noua_lista.innerHTML = `<li> <a href="#section${j}"> ${sections_name[i].innerHTML} </a></li>`;
  noua_lista.id = `listItem${j}`;
  list.appendChild(noua_lista);
}
// ---------------------------------------------------Smooth scrolling functionality
for (let i = 0; i < sections.length; i++) {
  let j = i + 1;
  let element_section = document.getElementById(`section${j}`);
  let element_list = document.getElementById(`listItem${j}`);
  // console.log( element_section, element_list);
  element_list.addEventListener("click", function (elem) {
    elem.preventDefault();
    element_section.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
}
// ---------------------------------------------------Build the list id's to add and remove active class

let buildListID = (x) => {
  let sectionIdString = String(x.id);
  let lastChar = sectionIdString.substr(sectionIdString.length - 1);
  let listIdBuild = `listItem${lastChar}`;
  let naviList = document.getElementById(listIdBuild);
  return naviList;
};
// ---------------------------------------------------Add functionality to distinguish the section in view

let makeActive = () => {
  for (const section of sections) {
    const box = section.getBoundingClientRect();

    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 250 && box.bottom >= 250) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("your-active-class");

      let listId = buildListID(section);
      listId.classList.add("list-active-class");
    } else {
      section.classList.remove("your-active-class");

      let listId = buildListID(section);
      listId.classList.remove("list-active-class");
    }
  }
};

// // ----------------------------------------Make sections active
document.addEventListener("scroll", function () {
  makeActive();
});
