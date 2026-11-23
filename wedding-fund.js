/* =========================================================
   EDIT PAYMENT METHODS HERE

   Replace each placeholder URL with your real secure link.

   Suggested options:
   - Stripe Payment Link for card / Apple Pay / Google Pay
   - PayPal payment link
   - Venmo payment link
   - Cash App payment link

   Do not collect payment, card, bank, income, or personal
   financial information directly through this website.
   ========================================================= */

const paymentOptions = [
    {
        id: "stripe",
        title: "Pay by Card",
        description: "Use a credit card, debit card, or supported express checkout option.",
        buttonText: "Pay by Card",
        url: "PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE"
    },
    {
        id: "paypal",
        title: "Pay with PayPal",
        description: "Use PayPal or an available debit or credit card checkout option.",
        buttonText: "Open PayPal",
        url: "PASTE_YOUR_PAYPAL_PAYMENT_LINK_HERE"
    },
    {
        id: "venmo",
        title: "Pay with Venmo",
        description: "Send a contribution using Venmo.",
        buttonText: "Open Venmo",
        url: "PASTE_YOUR_VENMO_LINK_HERE"
    },
    {
        id: "cashapp",
        title: "Pay with Cash App",
        description: "Send a contribution using Cash App.",
        buttonText: "Open Cash App",
        url: "PASTE_YOUR_CASH_APP_LINK_HERE"
    }
];

const paymentGrid = document.getElementById("payment-grid");

function escapeHTML(value) {
    const element = document.createElement("div");
    element.textContent = String(value);
    return element.innerHTML;
}

function isConfigured(url) {
    return (
        url &&
        !url.includes("PASTE_YOUR_") &&
        /^https?:\/\//i.test(url)
    );
}

function renderPaymentOptions() {
    paymentGrid.innerHTML = paymentOptions.map(function (option) {
        const configured = isConfigured(option.url);

        return `
            <article class="payment-card ${configured ? "" : "is-disabled"}">
                <h3>${escapeHTML(option.title)}</h3>
                <p>${escapeHTML(option.description)}</p>

                ${
                    configured
                        ? `
                            <a
                                class="fund-payment-link"
                                href="${escapeHTML(option.url)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="${escapeHTML(option.buttonText)} in a new tab"
                            >
                                ${escapeHTML(option.buttonText)}
                            </a>
                        `
                        : `
                            <button
                                class="fund-payment-link"
                                type="button"
                                disabled
                                aria-label="${escapeHTML(option.title)} payment option is not configured yet"
                            >
                                Coming Soon
                            </button>
                        `
                }
            </article>
        `;
    }).join("");
}

renderPaymentOptions();
