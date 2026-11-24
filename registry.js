/* =========================================================
   EDIT REGISTRY HERE

   1. Replace every example.com product URL.
   2. Upload authorized product images into:
      images/registry/
   3. Replace image paths and retailer names.
   4. Manually update quantityNeeded, quantityPurchased, and status.
   5. Wedding Fund opens wedding-fund.html.

   Prices verified against the Amazon listings on 2026-11-23.
   Purchase tracking: see PURCHASES_SCRIPT_URL below.
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
        retailer: "Amazon",
        description: "For easy weeknight meals, rice bowls, and homemade comfort food.",
        image: "images/registry/rice-cooker.jpg",
        url: "https://www.amazon.com/dp/B007WQ9YNO",
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
        title: "Shark Steam & Scrub Steam Mop",
        category: "Newlywed Essentials",
        retailer: "Amazon",
        description: "An electric steam mop with rotating scrub pads that scrubs and sanitizes sealed hard floors — no more hand-scrubbing.",
        image: "images/registry/rotating-mop.jpg",
        url: "https://www.amazon.com/dp/B0D1VZVDNM",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "tool-set",
        title: "DEWALT 20V MAX 5-Tool Power Tool Combo Kit",
        category: "Newlywed Essentials",
        retailer: "Amazon",
        description: "A cordless drill/driver, impact driver, reciprocating saw, circular saw, and oscillating multi-tool with batteries and charger — everything we need for projects and our first home together.",
        image: "images/registry/tool-set.jpg",
        url: "https://www.amazon.com/dp/B0858J4BTK",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: false
    },
    {
        id: "pasta-bowl-set",
        title: "Salad Bowl Set",
        category: "Kitchen & Dining",
        retailer: "Amazon",
        description: "A set of salad bowls for fresh salads, pasta, and everyday meals.",
        image: "images/registry/pasta-bowl-set.jpg",
        url: "https://www.amazon.com/dp/B0H333BQBX",
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
        title: "LONG VACATION 6-Piece Luggage Set",
        category: "Experiences",
        retailer: "Amazon",
        description: "A 6-piece hardshell luggage set with spinner wheels and TSA locks for our honeymoon and future adventures together.",
        image: "images/registry/luggage-set.jpg",
        url: "https://www.amazon.com/dp/B0BXCMJPWP",
        status: "available",
        quantityNeeded: 1,
        quantityPurchased: 0,
        featured: true
    },
    {
        id: "throw-blankets",
        title: "Cozy Throw Blankets",
        category: "Home",
        retailer: "Amazon",
        description: "Soft throws for quiet nights, movie marathons, and making our space feel like home.",
        image: "images/registry/throw-blankets.jpg",
        url: "https://www.amazon.com/dp/B0H4GF6N2V",
        status: "available",
        quantityNeeded: 2,
        quantityPurchased: 0,
        featured: false
    }
];


/* =========================================================
   PURCHASE TRACKING

   Guests buy on Amazon, so the site only learns about a
   purchase when the guest says so. This front end talks to
   a Google Apps Script web app ("Wedding Registry Purchase
   Tracker") that records purchases in a sheet.

   TO FINISH SETUP: paste the deployed web app URL below,
   replacing the placeholder. Until then the page keeps
   working on the static quantityPurchased values in the
   item list and never shows an error to guests.

   Backend contract:
     GET  -> {"counts": {"<itemId>": <number>, ...}}
     POST -> JSON body {"itemId", "quantity", "buyerName"}
             returns {"status":"ok","purchased":<new total>,
                      "remaining":<n>}
             or {"status":"error","message":"..."} when the
             item is already fully purchased or the quantity
             is more than what remains.
   The POST is sent as text/plain so the browser does not
   send a CORS preflight request (Apps Script web apps do
   not answer preflights). The body is still JSON; the
   script reads it from e.postData.contents.
   ========================================================= */
const PURCHASES_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_zehwFHCnC6zyEfK5Q2nDNu9JLEvnFjqLpmKit16PBNLgv5cQuj0TgngVWdwFHtQjAQ/exec";

/* Live counts from the backend, or null while they have not
   loaded (or the endpoint is still the placeholder). When
   null, the static quantityPurchased values are used. */
let livePurchaseCounts = null;

function isPurchasesEndpointConfigured() {
    return Boolean(PURCHASES_SCRIPT_URL) &&
        PURCHASES_SCRIPT_URL !== "PASTE_PURCHASES_WEB_APP_URL_HERE";
}

/* Copy live counts into the item list, so rendering, the
   "X of Y purchased" labels, and the purchase button all
   read from one place. Counts are clamped to what is needed. */
function applyLiveCounts(counts) {
    if (!counts || typeof counts !== "object") {
        return;
    }

    registryItems.forEach(function (item) {
        if (item.internal) {
            return;
        }

        const count = counts[item.id];

        if (typeof count !== "number" || Number.isNaN(count)) {
            return;
        }

        item.quantityPurchased = Math.min(
            Math.max(Math.floor(count), 0),
            item.quantityNeeded
        );

        if (item.quantityPurchased >= item.quantityNeeded) {
            item.status = "purchased";
        }
    });
}

/* Fetch live purchase counts on page load. Any failure
   (placeholder URL, network error, bad response) fails
   silently and the page keeps its static counts. */
async function fetchLivePurchaseCounts() {
    if (!isPurchasesEndpointConfigured()) {
        return;
    }

    try {
        const response = await fetch(PURCHASES_SCRIPT_URL);

        if (!response.ok) {
            return;
        }

        const data = await response.json();

        if (!data || typeof data.counts !== "object") {
            return;
        }

        livePurchaseCounts = data.counts;
        applyLiveCounts(livePurchaseCounts);
        renderGifts();
    } catch (error) {
        /* Live counts unavailable: keep the static counts. */
    }
}


/* =========================================================
   PAGE STATE
   ========================================================= */
const categories = [
    "All Gifts",
    "Home",
    "Kitchen & Dining",
    "Experiences",
    "Cash Funds",
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

        /* Fully purchased when the item is marked purchased or
           the live/static count has reached what is needed.
           The purchase button is disabled in this state. */
        const fullyPurchased = purchased || remaining === 0;

        const statusLabel = fullyPurchased
            ? "Purchased"
            : "Still Needed";

        const quantityLabel = item.category === "Cash Funds"
            ? "Choose the contribution method that works best for you."
            : fullyPurchased
                ? "Purchased"
                : `${item.quantityPurchased} of ${item.quantityNeeded} purchased`;

        const linkAttributes = item.internal
            ? ""
            : 'target="_blank" rel="noopener noreferrer"';

        const linkLabel = item.buttonText || "View Gift";

        /* The Wedding Fund is not a countable product: it gets
           no purchase button. Every other card lets a guest
           say they bought it, unless it is fully purchased. */
        const purchaseButton = item.internal
            ? ""
            : `
                    <button
                        class="purchase-btn ${fullyPurchased ? "is-complete" : ""}"
                        type="button"
                        data-purchase-id="${escapeHTML(item.id)}"
                        ${fullyPurchased ? "disabled" : ""}
                        aria-label="Tell Zumi and Morgan you bought ${escapeHTML(item.title)}"
                    >
                        ${fullyPurchased ? "Purchased" : "I bought this"}
                    </button>
                `;

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

                        <span class="status-badge ${fullyPurchased ? "is-purchased" : ""}">
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

                    ${purchaseButton}
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

    document.querySelectorAll(".purchase-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            openPurchaseModal(button.dataset.purchaseId);
        });
    });

    emptyState.hidden = filteredItems.length !== 0;

    resultsStatus.textContent =
        `${filteredItems.length} ${filteredItems.length === 1 ? "gift" : "gifts"} shown.`;
}


/* =========================================================
   PURCHASE MODAL ("I bought this")
   ========================================================= */
let purchaseModalItem = null;
let purchaseModalDone = false;
let purchaseModal = null;
let purchaseModalQuantityWrap = null;
let purchaseModalQuantity = null;
let purchaseModalName = null;
let purchaseModalMessage = null;
let purchaseModalConfirm = null;

function buildPurchaseModal() {
    purchaseModal = document.createElement("div");
    purchaseModal.className = "purchase-modal-backdrop";
    purchaseModal.hidden = true;
    purchaseModal.innerHTML = `
        <div class="purchase-modal" role="dialog" aria-modal="true" aria-labelledby="purchase-modal-title">
            <h3 id="purchase-modal-title">You bought this gift?</h3>
            <p class="purchase-modal-item" id="purchase-modal-item"></p>

            <div class="purchase-field" id="purchase-quantity-wrap">
                <label for="purchase-quantity">How many did you buy?</label>
                <select id="purchase-quantity"></select>
            </div>

            <div class="purchase-field">
                <label for="purchase-name">Your name <span class="purchase-optional">(optional)</span></label>
                <input id="purchase-name" type="text" autocomplete="name" placeholder="So we know who to thank">
            </div>

            <p class="purchase-note">
                This only tells Zumi &amp; Morgan you bought it, so nobody buys the same gift twice. It does not place an order — please buy it through the retailer link first.
            </p>

            <p class="purchase-message" id="purchase-message" role="status"></p>

            <div class="purchase-actions">
                <button class="purchase-confirm-btn" id="purchase-confirm" type="button">Confirm purchase</button>
                <button class="purchase-cancel-btn" id="purchase-cancel" type="button">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(purchaseModal);

    purchaseModalQuantityWrap = purchaseModal.querySelector("#purchase-quantity-wrap");
    purchaseModalQuantity = purchaseModal.querySelector("#purchase-quantity");
    purchaseModalName = purchaseModal.querySelector("#purchase-name");
    purchaseModalMessage = purchaseModal.querySelector("#purchase-message");
    purchaseModalConfirm = purchaseModal.querySelector("#purchase-confirm");

    purchaseModal.querySelector("#purchase-cancel").addEventListener("click", closePurchaseModal);

    purchaseModal.addEventListener("click", function (event) {
        if (event.target === purchaseModal) {
            closePurchaseModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && purchaseModal && !purchaseModal.hidden) {
            closePurchaseModal();
        }
    });

    purchaseModalConfirm.addEventListener("click", submitPurchase);
}

function openPurchaseModal(itemId) {
    const item = registryItems.find(function (entry) {
        return entry.id === itemId;
    });

    if (!item || item.internal) {
        return;
    }

    const remaining = Math.max(
        item.quantityNeeded - item.quantityPurchased,
        0
    );

    if (remaining === 0) {
        return;
    }

    purchaseModalItem = item;
    purchaseModalDone = false;

    purchaseModal.querySelector("#purchase-modal-item").textContent = item.title;

    if (remaining > 1) {
        purchaseModalQuantityWrap.hidden = false;
        purchaseModalQuantity.innerHTML = "";

        for (let count = 1; count <= remaining; count += 1) {
            const option = document.createElement("option");
            option.value = String(count);
            option.textContent = String(count);
            purchaseModalQuantity.appendChild(option);
        }
    } else {
        purchaseModalQuantityWrap.hidden = true;
    }

    purchaseModalName.value = "";
    purchaseModalMessage.textContent = "";
    purchaseModalMessage.classList.remove("is-error");
    purchaseModalConfirm.disabled = false;
    purchaseModalConfirm.textContent = "Confirm purchase";

    purchaseModal.hidden = false;
    purchaseModalName.focus();
}

function closePurchaseModal() {
    if (purchaseModal) {
        purchaseModal.hidden = true;
    }

    purchaseModalItem = null;
    purchaseModalDone = false;
}

async function submitPurchase() {
    if (purchaseModalDone) {
        closePurchaseModal();
        return;
    }

    const item = purchaseModalItem;

    if (!item) {
        return;
    }

    if (!isPurchasesEndpointConfigured()) {
        purchaseModalMessage.textContent =
            "Purchase tracking is not set up yet — please let Zumi & Morgan know directly that you bought this gift.";
        purchaseModalMessage.classList.add("is-error");
        return;
    }

    const quantity = purchaseModalQuantityWrap.hidden
        ? 1
        : parseInt(purchaseModalQuantity.value, 10) || 1;
    const buyerName = purchaseModalName.value.trim();

    purchaseModalConfirm.disabled = true;
    purchaseModalConfirm.textContent = "Saving…";
    purchaseModalMessage.textContent = "";
    purchaseModalMessage.classList.remove("is-error");

    try {
        const response = await fetch(PURCHASES_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                itemId: item.id,
                quantity: quantity,
                buyerName: buyerName
            })
        });

        const data = await response.json();

        if (data && data.status === "ok") {
            if (livePurchaseCounts) {
                livePurchaseCounts[item.id] = data.purchased;
            }

            item.quantityPurchased = Math.min(
                data.purchased,
                item.quantityNeeded
            );

            if (data.remaining <= 0) {
                item.status = "purchased";
            }

            renderGifts();

            purchaseModalDone = true;
            purchaseModalMessage.textContent =
                "Thank you! We have marked it as purchased.";
            purchaseModalConfirm.disabled = false;
            purchaseModalConfirm.textContent = "Done";
        } else {
            const message = (data && data.message) ||
                "That gift may already be fully purchased.";
            purchaseModalMessage.textContent = message;
            purchaseModalMessage.classList.add("is-error");
            purchaseModalConfirm.disabled = false;
            purchaseModalConfirm.textContent = "Confirm purchase";

            /* Counts may have moved since the page loaded. */
            await fetchLivePurchaseCounts();
        }
    } catch (error) {
        purchaseModalMessage.textContent =
            "We could not save that right now. Please try again, or let Zumi & Morgan know directly.";
        purchaseModalMessage.classList.add("is-error");
        purchaseModalConfirm.disabled = false;
        purchaseModalConfirm.textContent = "Confirm purchase";
    }
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
buildPurchaseModal();
fetchLivePurchaseCounts();
