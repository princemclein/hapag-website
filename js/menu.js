const filterButton = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".menu-card");

// Functions for filtering;
filterButton.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    products.forEach((product) => {
      const category = product.dataset.category;
      if (filter === "all" || category === filter) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Hover on active filter button;
filterButton.forEach((button) => {
  button.addEventListener("click", () => {
    filterButton.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});
