/* =========================================================
   EDIT REGISTRY HERE

   1. Replace every example.com product or fund URL.
   2. Upload your authorized product images to:
      images/registry/
   3. Replace each image path below once you add images.
   4. Update quantityNeeded, quantityPurchased, and status
      manually when gifts are purchased.
   5. Do not process payments or collect payment information
      directly through this static GitHub Pages website.
   6. Referral URLs should only be issuer-generated links.
   ========================================================= */


/* =========================================================
   CASH / EXPERIENCE FUNDS
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
   CREDIT CARD / REFERRAL OFFERS

   Referral links are provided by the user. Review each
   issuer-generated landing page and its terms before publishing.
   ========================================================= */
const referralOffers = [
    {
        id: "chase-sapphire",
        issuer: "Chase",
        cardName: "Sapphire Preferred® or Sapphire Reserve®",
        description: "For guests already considering a travel rewards credit card.",
        note: "The referral landing page includes Sapphire Preferred® and Sapphire Reserve® offer options.",
        referralUrl: "https://www.referyourchasecard.com/19y/J1EPDCR9Q0",
        buttonText: "Explore Sapphire Offers"
    },
    {
        id: "amex-blue-cash-everyday",
        issuer: "American Express",
        cardName: "Blue Cash Everyday® Card",
        description: "For guests already considering an everyday cash-back card.",
        note: "Offer details, eligibility, and potential referral benefits are determined by the issuer.",
        referralUrl: "https://americanexpress.com/en-us/referral/blue-cash-everyday-credit-card?ref=ZUMICGAMY&XL=MIANS",
        buttonText: "Explore Amex Offer"
    },
    {
        id: "capital-one-referral",
        issuer: "Capital One",
        cardName: "Capital One Referral Offer",
        description: "For guests already considering a Capital One credit card offer.",
        note: "Offer details, eligibility, and potential referral benefits are determined by the issuer.",
        referralUrl: "https://i.capitalone.com/Jpfn1MDdx",
        buttonText: "Explore Capital One Offer"
    },
    {
        id: "sofi-referral",
        issuer: "SoFi",
        cardName: "SoFi Referral Offer",
        description: "For guests already considering a SoFi money or banking product.",
        note: "Offer details, eligibility, and potential referral benefits are determined by the issuer.",
        referralUrl: "https://www.sofi.com/invite/money?gcp=a422572d-a764-460a-b234-2128c6fa714f&isAliasGcp=false&siid=68d8188b-75aa-4e62-a3c9-45a8fba7dabc",
        buttonText: "Explore SoFi Offer"
    }
];


/* =========================================================
   GIFT REGISTRY ITEMS

   Replace retailer names, prices, image paths, and product URLs
   after selecting the exact products you want.
   ========================================================= */
const registryItems = [
    {
        id: "rice-cooker",
        title: "Rice Cooker",
        category: "Kitchen & Dining",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "For easy weeknight meals, rice bowls, and homemade comfort food.",
        image: "images/registry/rice-cooker.jpg",
        url: "https://example.com/rice-cooker",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "king-size-comforter",
        title: "King-Size Comforter Set",
        category: "Home",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A comfortable, beautiful bedding set for our newlywed home.",
        image: "images/registry/king-size-comforter.jpg",
        url: "https://example.com/king-size-comforter",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "picture-frames",
        title: "Picture Frame Collection",
        category: "Home",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A collection of frames for wedding photos, family memories, and future adventures.",
        image: "images/registry/picture-frames.jpg",
        url: "https://example.com/picture-frames",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "rotating-mop",
        title: "Rotating Mop System",
        category: "Newlywed Essentials",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A practical cleaning essential for keeping our future home fresh and comfortable.",
        image: "images/registry/rotating-mop.jpg",
        url: "https://example.com/rotating-mop",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "robot-vacuum-mop",
        title: "Vacuuming & Mopping Robot",
        category: "Newlywed Essentials",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A helpful home upgrade for vacuuming and mopping while we focus on life together.",
        image: "images/registry/robot-vacuum-mop.jpg",
        url: "https://example.com/robot-vacuum-mop",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "tool-set",
        title: "Home Tool Set",
        category: "Newlywed Essentials",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A reliable tool kit for little fixes, projects, and our first home together.",
        image: "images/registry/tool-set.jpg",
        url: "https://example.com/tool-set",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "pasta-bowl-set",
        title: "Wide Shallow Pasta Bowl Set",
        category: "Kitchen & Dining",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "Wide, shallow bowls with raised edges for pasta, rice bowls, saucy dishes, soups, salads, and everyday dinners.",
        image: "images/registry/pasta-bowl-set.jpg",
        url: "https://example.com/pasta-bowl-set",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "luggage-set",
        title: "Luggage Set",
        category: "Experiences",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A durable luggage set for our honeymoon and future adventures together.",
        image: "images/registry/luggage-set.jpg",
        url: "https://example.com/luggage-set",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "throw-blankets",
        title: "Cozy Throw Blankets",
        category: "Home",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "Soft throws for quiet nights, movie marathons, and making our space feel like home.",
        image: "images/registry/throw-blankets.jpg",
        url: "https://example.com/throw-blankets",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "cookware-set",
        title: "Cookware Set",
        category: "Kitchen & Dining",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "A versatile set for learning recipes, hosting dinners, and cooking together.",
        image: "images/registry/cookware-set.jpg",
        url: "https://example.com/cookware-set",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "bath-towel-set",
        title: "Bath Towel Set",
        category: "Newlywed Essentials",
        retailer: "Add Retailer",
        price: "Add Price",
        description: "An everyday home essential in a soft, neutral style.",
        image: "images/registry/bath-towel-set.jpg",
        url: "https://example.com/bath-towel-set",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "restaurant-gift-card",
        title: "Restaurant Gift Card",
        category: "Gift Cards",
        retailer: "Local Favorite",
        price: "$25–$100",
        description: "A thoughtful way to help us enjoy a newlywed date night.",
        image: "images/registry/restaurant-gift-card.jpg",
        url: "https://example.com/restaurant-gift-card",
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
const referralGrid = document.getElementById("referral-grid");
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
        const savedFavorites = localStorage.getItem("cujisRegistryFavorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
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
        /* The page remains functional if storage is unavailable. */
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
    const element = document.createElement("div");
    element.textContent = String(value);
    return element.innerHTML;
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

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(amount);
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

                <div class="amount-options" role="group" aria-label="Choose an amount for ${escapeHTML(fund.title)}">
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
}


/* =========================================================
   REFERRAL OFFER RENDERING
   ========================================================= */
function renderReferralOffers() {
    referralGrid.innerHTML = referralOffers.map(function (offer) {
        return `
            <article class="referral-card">
                <span class="referral-label">Referral Offer</span>
                <p class="referral-issuer">${escapeHTML(offer.issuer)}</p>
                <h3>${escapeHTML(offer.cardName)}</h3>
                <p>${escapeHTML(offer.description)}</p>
                <p>${escapeHTML(offer.note)}</p>

                <a
                    class="referral-link"
                    href="${escapeHTML(offer.referralUrl)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="${escapeHTML(offer.buttonText)} for ${escapeHTML(offer.cardName)} in a new tab"
                >
                    ${escapeHTML(offer.buttonText)}
                </a>
            </article>
        `;
    }).join("");
}


/* =========================================================
   CATEGORY FILTER RENDERING
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

            if (activeCategory === "Cash Funds") {
                document.getElementById("cash-funds").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                resultsStatus.textContent =
                    "Cash funds are available in the Featured Funds section above.";

                return;
            }

            renderGifts();
        });
    });
}


/* =========================================================
   SEARCH / FILTERING
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
    if (activeCategory === "Cash Funds") {
        giftGrid.innerHTML = "";
        emptyState.hidden = true;
        return;
    }

    const filteredItems = getFilteredItems();

    giftGrid.innerHTML = filteredItems.map(function (item) {
        const purchased = item.status === "purchased";
        const favorite = isFavorite(item.id);

        const remaining = Math.max(
            item.quantityNeeded - item.quantityPurchased,
            0
        );

        const statusLabel = purchased
            ? "Purchased"
            : remaining > 0
                ? "Still Needed"
                : "Completed";

        const quantityLabel = purchased
            ? "Purchased"
            : `${item.quantityPurchased} of ${item.quantityNeeded} purchased`;

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

    if (activeCategory === "Cash Funds") {
        activeCategory = "All Gifts";
        renderCategoryFilters();
    }

    renderGifts();
});

clearSearchButton.addEventListener("click", function () {
    searchInput.value = "";
    searchTerm = "";
    searchInput.focus();

    if (activeCategory === "Cash Funds") {
        activeCategory = "All Gifts";
        renderCategoryFilters();
    }

    renderGifts();
});


/* =========================================================
   INITIAL RENDER
   ========================================================= */
renderFunds();
renderReferralOffers();
renderCategoryFilters();
renderGifts();
