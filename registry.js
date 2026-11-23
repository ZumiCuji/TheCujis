/* =========================================================
   EDIT REGISTRY HERE
   =========================================================

   1. Add or edit gifts inside registryItems.
   2. Update image paths after uploading your own authorized
      product images into images/registry/.
   3. Replace each example.com URL with a real retailer item URL.
   4. Set quantityNeeded and quantityPurchased manually.
   5. Change status to:
      - "available"
      - "purchased"
   6. Add/edit cash funds inside registryFunds.
   7. Replace example fund URLs with a secure external source
      such as Zola, Honeyfund, PayPal, Venmo, etc.
   8. Add/edit external store registry links in registryLinks.

   This static GitHub Pages page does NOT process payments,
   reserve gifts, or automatically update purchase status.
   Retailer pages are the source of truth for inventory and purchases.
   ========================================================= */


/* =========================================================
   CASH / EXPERIENCE FUNDS
   Replace every "url" value before publishing.
   ========================================================= */
const registryFunds = [
    {
        id: "honeymoon-fund",
        title: "Honeymoon Fund",
        description: "Help us make memories as we begin our next chapter together.",
        goal: 3000,
        raised: 0,
        url: "https://example.com/honeymoon-fund"
    },
    {
        id: "first-home-fund",
        title: "First Home Fund",
        description: "A contribution toward making our future home warm, comfortable, and ours.",
        goal: 5000,
        raised: 0,
        url: "https://example.com/first-home-fund"
    },
    {
        id: "date-night-fund",
        title: "Date Night Fund",
        description: "Help us keep celebrating the little moments long after the wedding day.",
        goal: 750,
        raised: 0,
        url: "https://example.com/date-night-fund"
    },
    {
        id: "future-adventures-fund",
        title: "Future Adventures Fund",
        description: "For future road trips, weekend getaways, and new places to explore together.",
        goal: 1500,
        raised: 0,
        url: "https://example.com/future-adventures-fund"
    }
];


/* =========================================================
   EXTERNAL REGISTRY LINKS
   Replace URLs with your real registry pages.
   ========================================================= */
const registryLinks = [
    {
        name: "Crate & Barrel",
        description: "Home and kitchen favorites for the years ahead.",
        url: "https://example.com/crate-barrel-registry"
    },
    {
        name: "Target",
        description: "Everyday essentials and a few fun extras.",
        url: "https://example.com/target-registry"
    },
    {
        name: "Amazon",
        description: "Practical favorites for our new home.",
        url: "https://example.com/amazon-registry"
    },
    {
        name: "Zola",
        description: "Our combined registry and experience funds.",
        url: "https://example.com/zola-registry"
    }
];


/* =========================================================
   GIFT REGISTRY DATA
   Replace examples with your actual items and authorized images.
   ========================================================= */
const registryItems = [
    {
        id: "example-item-1",
        title: "Everyday Dinnerware Set",
        category: "Kitchen & Dining",
        retailer: "Crate & Barrel",
        price: "$89.95",
        description: "A timeless set for weeknight meals, celebrations, and hosting the people we love.",
        image: "images/registry/placeholder-dinnerware.jpg",
        url: "https://example.com/product-link-1",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "example-item-2",
        title: "Glassware Collection",
        category: "Kitchen & Dining",
        retailer: "Crate & Barrel",
        price: "$44.95",
        description: "Classic glassware for shared dinners, toast-worthy moments, and future gatherings.",
        image: "images/registry/placeholder-glassware.jpg",
        url: "https://example.com/product-link-2",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-3",
        title: "Cookware Set",
        category: "Kitchen & Dining",
        retailer: "Target",
        price: "$129.99",
        description: "A practical kitchen upgrade for cooking new recipes together.",
        image: "images/registry/placeholder-cookware.jpg",
        url: "https://example.com/product-link-3",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "example-item-4",
        title: "Soft Throw Blanket",
        category: "Home",
        retailer: "Target",
        price: "$39.99",
        description: "A cozy finishing touch for quiet nights at home.",
        image: "images/registry/placeholder-throw.jpg",
        url: "https://example.com/product-link-4",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-5",
        title: "Framed Wall Mirror",
        category: "Home",
        retailer: "Amazon",
        price: "$74.99",
        description: "A simple, versatile piece for helping our first home feel complete.",
        image: "images/registry/placeholder-mirror.jpg",
        url: "https://example.com/product-link-5",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-6",
        title: "Linen Sheet Set",
        category: "Newlywed Essentials",
        retailer: "Crate & Barrel",
        price: "$109.95",
        description: "Comfortable linens for a restful and welcoming home.",
        image: "images/registry/placeholder-linens.jpg",
        url: "https://example.com/product-link-6",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "example-item-7",
        title: "Bath Towel Set",
        category: "Newlywed Essentials",
        retailer: "Target",
        price: "$35.00",
        description: "An everyday essential for our newlywed home.",
        image: "images/registry/placeholder-towels.jpg",
        url: "https://example.com/product-link-7",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-8",
        title: "Coffee Maker",
        category: "Kitchen & Dining",
        retailer: "Amazon",
        price: "$99.99",
        description: "For slow mornings, busy mornings, and everything in between.",
        image: "images/registry/placeholder-coffee.jpg",
        url: "https://example.com/product-link-8",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "example-item-9",
        title: "Local Restaurant Gift Card",
        category: "Gift Cards",
        retailer: "Local Favorite",
        price: "$25–$100",
        description: "A thoughtful way to help us enjoy a newlywed date night.",
        image: "images/registry/placeholder-gift-card.jpg",
        url: "https://example.com/product-link-9",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-10",
        title: "Museum Membership",
        category: "Experiences",
        retailer: "Local Experience",
        price: "$75",
        description: "For future weekends exploring, learning, and making memories together.",
        image: "images/registry/placeholder-museum.jpg",
        url: "https://example.com/product-link-10",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-11",
        title: "Picnic Basket Set",
        category: "Experiences",
        retailer: "Amazon",
        price: "$59.99",
        description: "For dates in the park, weekend adventures, and long sunny afternoons.",
        image: "images/registry/placeholder-picnic.jpg",
        url: "https://example.com/product-link-11",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "example-item-12",
        title: "Tool Kit for the Home",
        category: "Newlywed Essentials",
        retailer: "Target",
        price: "$49.99",
        description: "A practical starter kit for the projects and little fixes ahead.",
        image: "images/registry/placeholder-tools.jpg",
        url: "https://example.com/product-link-12",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    }
];


/* =========================================================
   PAGE STATE
   ========================================================= */
const categories = [
    "All Gifts",
    "Home",
    "Kitchen & Dining",
    "Experiences",
    "Cash Funds",
    "Gift Cards",
    "Newlywed Essentials",
    "Favorites"
];

let activeCategory = "All Gifts";
let searchTerm = "";
let favoriteIds = loadFavorites();


/* =========================================================
   DOM REFERENCES
   ========================================================= */
const fundGrid = document.getElementById("fund-grid");
const registryLinkGrid = document.getElementById("registry-link-grid");
const categoryFilters = document.getElementById("category-filters");
const giftGrid = document.getElementById("gift-grid");
const searchInput = document.getElementById("registry-search");
const clearSearchButton = document.getElementById("clear-search");
const resultsStatus = document.getElementById("results-status");
const emptyState = document.getElementById("empty-state");


/* =========================================================
   FAVORITES / LOCAL STORAGE
   ========================================================= */
function loadFavorites() {
    try {
        const storedFavorites = localStorage.getItem("cujisRegistryFavorites");

        return storedFavorites
            ? JSON.parse(storedFavorites)
            : [];
    } catch (error) {
        return [];
    }
}

function saveFavorites() {
    try {
        localStorage.setItem(
            "cujisRegistryFavorites",
            JSON.stringify(favoriteIds)
        );
    } catch (error) {
        /* Favorites remain session-only if localStorage is unavailable. */
    }
}

function isFavorite(itemId) {
    return favoriteIds.includes(itemId);
}

function toggleFavorite(itemId) {
    if (isFavorite(itemId)) {
        favoriteIds = favoriteIds.filter(function (favoriteId) {
            return favoriteId !== itemId;
        });
    } else {
        favoriteIds.push(itemId);
    }

    saveFavorites();
    renderGifts();
}


/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */
function escapeHTML(value) {
    const temporaryElement = document.createElement("div");
    temporaryElement.textContent = value;
    return temporaryElement.innerHTML;
}

function getInitials(title) {
    return title
        .split(" ")
        .slice(0, 2)
        .map(function (word) {
            return word.charAt(0);
        })
        .join("")
        .toUpperCase();
}

function calculateFundProgress(fund) {
    if (!fund.goal || fund.goal <= 0) {
        return 0;
    }

    return Math.min(
        100,
        Math.round((fund.raised / fund.goal) * 100)
    );
}

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(amount);
}


/* =========================================================
   FUNDS RENDERING
   ========================================================= */
function renderFunds() {
    fundGrid.innerHTML = registryFunds.map(function (fund) {
        const progress = calculateFundProgress(fund);

        return `
            <article class="fund-card">
                <h3>${escapeHTML(fund.title)}</h3>
                <p>${escapeHTML(fund.description)}</p>

                <div class="fund-meta">
                    <span>${formatCurrency(fund.raised)} gifted</span>
                    <span>Goal: ${formatCurrency(fund.goal)}</span>
                </div>

                <div
                    class="progress-track"
                    role="progressbar"
                    aria-label="${escapeHTML(fund.title)} progress"
                    aria-valuemin="0"
                    aria-valuemax="${fund.goal}"
                    aria-valuenow="${fund.raised}"
                >
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>

                <div class="amount-options" role="group" aria-label="Choose a contribution amount for ${escapeHTML(fund.title)}">
                    <button class="amount-btn" type="button" data-fund-id="${fund.id}" data-amount="25">$25</button>
                    <button class="amount-btn" type="button" data-fund-id="${fund.id}" data-amount="50">$50</button>
                    <button class="amount-btn" type="button" data-fund-id="${fund.id}" data-amount="100">$100</button>
                    <button class="amount-btn" type="button" data-fund-id="${fund.id}" data-amount="custom">Custom</button>
                </div>

                <a
                    class="fund-link"
                    href="${escapeHTML(fund.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-fund-link="${fund.id}"
                >
                    Contribute
                </a>
            </article>
        `;
    }).join("");

    document.querySelectorAll(".amount-btn").forEach(function (button) {
        button.addEventListener("click", handleAmountSelection);
    });
}

function handleAmountSelection(event) {
    const clickedButton = event.currentTarget;
    const fundId = clickedButton.dataset.fundId;
    let selectedAmount = clickedButton.dataset.amount;

    if (selectedAmount === "custom") {
        selectedAmount = window.prompt(
            "Enter a contribution amount in dollars:"
        );

        if (!selectedAmount) {
            return;
        }

        selectedAmount = selectedAmount.replace(/[^0-9.]/g, "");

        if (!selectedAmount || Number(selectedAmount) <= 0) {
            window.alert("Please enter a valid amount.");
            return;
        }
    }

    document.querySelectorAll(
        `.amount-btn[data-fund-id="${fundId}"]`
    ).forEach(function (button) {
        button.classList.remove("is-selected");
        button.setAttribute("aria-pressed", "false");
    });

    clickedButton.classList.add("is-selected");
    clickedButton.setAttribute("aria-pressed", "true");

    const fundLink = document.querySelector(
        `[data-fund-link="${fundId}"]`
    );

    if (fundLink) {
        fundLink.dataset.selectedAmount = selectedAmount;
    }
}


/* =========================================================
   EXTERNAL REGISTRY LINKS
   ========================================================= */
function renderRegistryLinks() {
    registryLinkGrid.innerHTML = registryLinks.map(function (link) {
        return `
            <article class="registry-link-card">
                <h3>${escapeHTML(link.name)}</h3>
                <p>${escapeHTML(link.description)}</p>

                <a
                    href="${escapeHTML(link.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Shop Zumi and Morgan's ${escapeHTML(link.name)} registry in a new tab"
                >
                    Shop Registry
                </a>
            </article>
        `;
    }).join("");
}


/* =========================================================
   CATEGORY FILTERS
   ========================================================= */
function renderCategoryFilters() {
    categoryFilters.innerHTML = categories.map(function (category) {
        const isActive = category === activeCategory;

        return `
            <button
                class="filter-btn ${isActive ? "is-active" : ""}"
                type="button"
                data-category="${escapeHTML(category)}"
                aria-pressed="${isActive ? "true" : "false"}"
            >
                ${escapeHTML(category)}
            </button>
        `;
    }).join("");

    document.querySelectorAll(".filter-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            activeCategory = button.dataset.category;
            renderCategoryFilters();
            renderGifts();
        });
    });
}


/* =========================================================
   GIFT FILTERING / SEARCH
   ========================================================= */
function getFilteredItems() {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return registryItems.filter(function (item) {
        const matchesCategory =
            activeCategory === "All Gifts" ||
            (activeCategory === "Favorites" && isFavorite(item.id)) ||
            item.category === activeCategory;

        const searchableText = [
            item.title,
            item.category,
            item.retailer,
            item.description
        ].join(" ").toLowerCase();

        const matchesSearch =
            normalizedSearch === "" ||
            searchableText.includes(normalizedSearch);

        return matchesCategory && matchesSearch;
    });
}


/* =========================================================
   GIFT CARD RENDERING
   ========================================================= */
function renderGifts() {
    const filteredItems = getFilteredItems();

    giftGrid.innerHTML = filteredItems.map(function (item) {
        const purchased = item.status === "purchased";
        const favorite = isFavorite(item.id);
        const remaining = Math.max(
            item.quantityNeeded - item.quantityPurchased,
            0
        );

        const quantityLabel = purchased
            ? "Purchased"
            : `${item.quantityPurchased} of ${item.quantityNeeded} purchased`;

        const statusLabel = purchased
            ? "Purchased"
            : remaining > 0
                ? "Still Needed"
                : "Completed";

        return `
            <article class="gift-card">
                <div class="gift-image-wrap">
                    <img
                        class="gift-image"
                        src="${escapeHTML(item.image)}"
                        alt="${escapeHTML(item.title)}"
                        loading="lazy"
                    >

                    <div class="gift-image-fallback" aria-hidden="true">
                        ${escapeHTML(getInitials(item.title))}
                    </div>

                    <button
                        class="favorite-btn ${favorite ? "is-favorite" : ""}"
                        type="button"
                        data-favorite-id="${item.id}"
                        aria-label="${favorite ? "Remove" : "Save"} ${escapeHTML(item.title)} ${favorite ? "from" : "to"} favorites"
                        aria-pressed="${favorite ? "true" : "false"}"
                    >
                        ${favorite ? "♥" : "♡"}
                    </button>
                </div>

                <div class="gift-content">
                    <div class="gift-topline">
                        <span class="category-label">${escapeHTML(item.category)}</span>
                        <span class="status-badge ${purchased ? "is-purchased" : ""}">
                            ${statusLabel}
                        </span>
                    </div>

                    ${item.featured ? '<span class="featured-badge">Most Wanted</span>' : ""}

                    <h3>${escapeHTML(item.title)}</h3>

                    <p class="gift-description">
                        ${escapeHTML(item.description)}
                    </p>

                    <div class="gift-meta">
                        <span>${escapeHTML(item.retailer)}</span>
                        <span>${escapeHTML(item.price)}</span>
                    </div>

                    <p class="quantity-note">${quantityLabel}</p>

                    <a
                        class="gift-link"
                        href="${escapeHTML(item.url)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View ${escapeHTML(item.title)} at ${escapeHTML(item.retailer)} in a new tab"
                    >
                        View Gift
                    </a>
                </div>
            </article>
        `;
    }).join("");

    document.querySelectorAll(".gift-image").forEach(function (image) {
        image.addEventListener("error", function () {
            const imageWrap = image.closest(".gift-image-wrap");

            if (imageWrap) {
                imageWrap.classList.add("is-fallback");
            }
        });
    });

    document.querySelectorAll(".favorite-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            toggleFavorite(button.dataset.favoriteId);
        });
    });

    emptyState.hidden = filteredItems.length !== 0;

    resultsStatus.textContent =
        `${filteredItems.length} ${filteredItems.length === 1 ? "gift" : "gifts"} shown.`;
}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */
searchInput.addEventListener("input", function () {
    searchTerm = searchInput.value;
    renderGifts();
});

clearSearchButton.addEventListener("click", function () {
    searchInput.value = "";
    searchTerm = "";
    searchInput.focus();
    renderGifts();
});


/* =========================================================
   INITIAL PAGE RENDER
   ========================================================= */
renderFunds();
renderRegistryLinks();
renderCategoryFilters();
renderGifts();
