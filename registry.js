/* =========================================================
   EDIT REGISTRY HERE

   1. Replace every example.com product URL.
   2. Upload authorized product images into:
      images/registry/
   3. Replace image paths, prices, and retailer names.
   4. Manually update quantityNeeded, quantityPurchased, and status.
   5. Wedding Fund opens wedding-fund.html.
   ========================================================= */


/* =========================================================
   CREDIT CARD / REFERRAL OFFERS
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
   REGISTRY ITEMS
   ========================================================= */
const registryItems = [
    {
        id: "wedding-fund",
        title: "Wedding Fund",
        category: "Cash Funds",
        retailer: "Zumi & Morgan",
        price: "Any Amount",
        description: "A contribution toward our future home, honeymoon, and adventures as newlyweds.",
        image: "images/registry/wedding-fund.jpg",
        url: "wedding-fund.html",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true,
        internal: true,
        buttonText: "Contribute to Our Wedding Fund"
    },
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
        id: "gold-picture-frames",
        title: "Gold 18×24 Picture Frame Set",
        category: "Home",
        retailer: "Amazon",
        price: "Add Price",
        description: "Gold display frames for wedding portraits, artwork, favorite memories, and future family photographs.",
        image: "images/registry/gold-picture-frames.jpg",
        url: "https://www.amazon.com/ENJOYBASICS-Picture-Display-Without-Gallery/dp/B0CKLFNZ1R/ref=sr_1_1_sspa?crid=30SUKMVZYPB18&dib_tag=se&keywords=18x24%2Bframes%2Bgold&qid=1795460211&sprefix=18x24%2Bframes%2Bgol%2Caps%2C156&sr=8-1-spons&th=1",
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
        id: "serving-platter-set",
        title: "Serving Platter Set",
        category: "Kitchen & Dining",
        retailer: "Amazon",
        price: "Add Price",
        description: "A set of serving platters in multiple sizes for hosting, holidays, dinner parties, and family gatherings.",
        image: "images/registry/serving-platter-set.jpg",
        url: "https://www.amazon.com/Famiware-Serving-Platters-Set-Sizes/dp/B0C88R51G4/ref=sr_1_20_sspa?crid=11SZB43LM7EK&dib_tag=se&keywords=serving%2Bset&qid=1795460938&sprefix=serving%2Bset%2Caps%2C165&sr=8-20-spons&th=1",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "food-storage-containers",
        title: "Airtight Food Storage Container Set",
        category: "Kitchen & Dining",
        retailer: "Amazon",
        price: "Add Price",
        description: "A practical airtight container set for pantry organization, meal preparation, leftovers, and everyday storage.",
        image: "images/registry/food-storage-containers.jpg",
        url: "https://www.amazon.com/KOMUEE-Storage-Containers-Airtight-Microwave/dp/B0DLB57XWW/ref=sr_1_3_sspa?crid=35JKABGF6HRAI&dib_tag=se&keywords=food%2Bcontainers&qid=1795461180&sprefix=food%2Bcontainers%2Caps%2C229&sr=8-3-spons&th=1",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
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

const referralGrid = document.getElementById("referral-grid");
const categoryFilters = document.getElementById("category-filters");
const giftGrid = document.getElementById("gift-grid");
const searchInput = document.getElementById("registry-search");
const clearSearchButton = document.getElementById("clear-search");
const resultsStatus = document.getElementById("results-status");
const emptyState = document.getElementById("empty-state");


/* =========================================================
   FAVORITES
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
        /* Registry remains usable when localStorage is unavailable. */
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


/* =========================================================
   REFERRAL OFFERS
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
   FILTERING
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
   GIFT RENDERING
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

        const statusLabel = purchased
            ? "Purchased"
            : remaining > 0
                ? "Still Needed"
                : "Completed";

        const quantityLabel = item.category === "Cash Funds"
            ? "Choose the contribution method that works best for you."
            : purchased
                ? "Purchased"
                : `${item.quantityPurchased} of ${item.quantityNeeded} purchased`;

        const linkAttributes = item.internal
            ? ""
            : 'target="_blank" rel="noopener noreferrer"';

        const linkLabel = item.buttonText || "View Gift";

        return `
            <article class="gift-card ${item.id === "wedding-fund" ? "is-wedding-fund" : ""}">
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

                    <p class="quantity-note">${escapeHTML(quantityLabel)}</p>

                    <a
                        class="gift-link"
                        href="${escapeHTML(item.url)}"
                        ${linkAttributes}
                        aria-label="${escapeHTML(linkLabel)}: ${escapeHTML(item.title)}"
                    >
                        ${escapeHTML(linkLabel)}
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
   SEARCH
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
   INITIAL RENDER
   ========================================================= */
renderReferralOffers();
renderCategoryFilters();
renderGifts();
