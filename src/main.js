import SliderItems from "./js/SliderItems";
console.clear();
const refs = {
  mapNav: document.querySelector(".header_navigate-JS"),
  cities: document.querySelector(".cities-JS"),
  softlineOffice: document.querySelector(".office-softline-JS"),
  softlineOfficeInner: document.querySelector(".office__inner"),
};
const slider = {
  img: document.querySelector(".section-gallery__center"),
  buttons: document.querySelector(".section-gallery__buttons"),
  navigation: document.querySelector(".section-gallery__bottom"),
};

refs.mapNav.addEventListener("click", switchMapLocation);
refs.softlineOffice.addEventListener("click", showOffice);
slider.navigation.addEventListener("click", slideNavigate);
slider.buttons.addEventListener("click", sliderSwitchBtn);

// const imageUrl = new URL('../../public/slide5.svg', import.meta.url).href

slider.img.style.backgroundImage = `url(https://pro-dachnikov.com/uploads/posts/2021-10/1634075867_13-p-planirovka-otkritogo-ofisa-dizain-foto-13.jpg)`;
// slider.img.style.backgroundImage = `${imageUrl}`;
SliderItems.forEach((item) => {
  slider.navigation.insertAdjacentHTML(
    "beforeend",
    `<div class="pagination-item ${
      item.id == "0" ? "active-pagination" : ""
    }" data-id="${item.id}"></div>`
  );
});
function sliderSwitchBtn(event) {
  event.preventDefault();
  const arr = Array.from(slider.navigation.children);
  for (let i = 0; i < arr.length; i += 1) {
    let newValue = event.target.dataset.btn === "right" ? i + 1 : i - 1;
    newValue =
      newValue === -1 && event.target.dataset.btn === "left"
        ? arr.length-1
        : newValue;
    newValue =
      newValue === arr.length && event.target.dataset.btn === "right"
        ? 0
        : newValue;
    if (arr[i].classList.contains("active-pagination")) {
      arr[i].classList.remove("active-pagination");
      arr[newValue].classList.add("active-pagination");
      switchTo(`${newValue}`)
      break;
    }
  }

}

function slideNavigate(event) {
  if (typeof event === "string") {
    Array.from(slider.navigation.children).forEach((item) => {
      item.classList.remove("active-pagination");
      if (event === item.dataset.id) {
        item.classList.add("active-pagination");
        switchTo(event);
      }
    });
    return;
  } else if (event.target.dataset.id !== undefined) {
    Array.from(slider.navigation.children).forEach((item) => {
      item.classList.remove("active-pagination");
      if (event.target.dataset.id === item.dataset.id) {
        item.classList.add("active-pagination");
        switchTo(event.target.dataset.id);
        return;
      }
    });
    return;
  }
}

function switchTo(value) {
  SliderItems.forEach((item) => {
    if (item.id === value) {
      slider.img.style.backgroundImage = `url(${item.path})`;
    }
  });
}

function switchMapLocation(event) {
  event.preventDefault();
  if (event.target.tagName === "A") {
    Array.from(event.currentTarget.children).forEach((item) =>
      item.firstElementChild.classList.remove("navigate__link--active")
    );
    event.target.classList.add("navigate__link--active");
    Array.from(refs.cities.children).forEach((city) => {
      city.dataset.location.includes(event.target.text)
        ? city.classList.add("map__city-active")
        : city.classList.remove("map__city-active");
    });
  }
}

function showOffice(event) {
  event.preventDefault();
  event.currentTarget.children[1].classList.toggle(
    "office-softline__icon--active"
  );
  if (
    Array.from(event.currentTarget.children[1].classList).includes(
      "office-softline__icon--active"
    )
  ) {
    return refs.softlineOfficeInner.classList.remove("hide");
  }
  return refs.softlineOfficeInner.classList.add("hide");
}
