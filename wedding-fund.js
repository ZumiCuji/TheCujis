/* =========================================================
   PAYMENT METHODS

   Live links for the wedding fund. Card payments are not
   set up (no Stripe link), so that option is not shown.

   Do not collect payment, card, bank, income, or personal
   financial information directly through this website.
   ========================================================= */

const paymentOptions = [
    {
        id: "paypal",
        title: "Pay with PayPal",
        description: "Use PayPal or an available debit or credit card checkout option.",
        buttonText: "Open PayPal",
        url: "https://paypal.me/ZumiCuji"
    },
    {
        id: "venmo",
        title: "Pay with Venmo",
        description: "Send a contribution using Venmo.",
        buttonText: "Open Venmo",
        url: "https://venmo.com/u/Zumi-Cuji"
    },
    {
        id: "cashapp",
        title: "Pay with Cash App",
        description: "Send a contribution using Cash App.",
        buttonText: "Open Cash App",
        url: "https://cash.app/$ZumiCuji"
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
