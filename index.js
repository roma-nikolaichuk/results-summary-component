const categoriesContainer = document.querySelector(".summary__categories");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.classList.add("summary__category");
      categoryElement.style.backgroundColor = category.backgroundColor;

      const iconElement = document.createElement("img");
      iconElement.classList.add("category__icon");
      iconElement.src = category.icon;
      iconElement.alt = `${category.category} icon`;
      categoryElement.appendChild(iconElement);

      const detailsElement = document.createElement("div");
      detailsElement.classList.add("category__details");

      const nameElement = document.createElement("h3");
      nameElement.classList.add("category__name");
      nameElement.style.color = category.textColor;
      nameElement.textContent = category.category;
      detailsElement.appendChild(nameElement);

      const scoreElement = document.createElement("p");
      scoreElement.classList.add("category__score");
      scoreElement.innerHTML = `<span>${category.score}</span> / 100`;
      detailsElement.appendChild(scoreElement);

      categoryElement.appendChild(detailsElement);

      categoriesContainer.appendChild(categoryElement);
    });
  })
  .catch((error) => console.error(error));
