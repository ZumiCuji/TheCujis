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
        title: "Give with PayPal",
        description: "Use PayPal or an available debit or credit card checkout option.",
        buttonText: "Open PayPal",
        url: "https://paypal.me/ZumiC"
    },
    {
        id: "venmo",
        title: "Give with Venmo",
        description: "Send a contribution using Venmo.",
        buttonText: "Open Venmo",
        url: "https://venmo.com/u/Zumi-Cuji"
    },
    {
        id: "cashapp",
        title: "Give with Cash App",
        description: "Send a contribution using Cash App.",
        buttonText: "Open Cash App",
        url: "https://cash.app/$ZumiCuji"
    },
    {
        id: "zelle",
        title: "Give with Zelle",
        description: "Send a contribution through your bank's Zelle using the number below.",
        buttonText: "Copy number",
        url: "",
        contact: "(910) 508-2478",
        copyText: "9105082478"
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
        const hasContact = Boolean(option.contact);

        let action;
        if (configured) {
            action = `
                <a
                    class="fund-payment-link"
                    href="${escapeHTML(option.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="${escapeHTML(option.buttonText)} in a new tab"
                >
                    ${escapeHTML(option.buttonText)}
                </a>
            `;
        } else if (hasContact) {
            action = `
                <p class="fund-contact">${escapeHTML(option.contact)}</p>
                <button
                    class="fund-payment-link"
                    type="button"
                    data-copy="${escapeHTML(option.copyText || option.contact)}"
                    aria-label="Copy ${escapeHTML(option.title)} number"
                >
                    ${escapeHTML(option.buttonText)}
                </button>
            `;
        } else {
            action = `
                <button
                    class="fund-payment-link"
                    type="button"
                    disabled
                    aria-label="${escapeHTML(option.title)} payment option is not configured yet"
                >
                    Coming Soon
                </button>
            `;
        }

        return `
            <article class="payment-card ${configured || hasContact ? "" : "is-disabled"}">
                <h3>${escapeHTML(option.title)}</h3>
                <p>${escapeHTML(option.description)}</p>

                ${action}
            </article>
        `;
    }).join("");

    paymentGrid.querySelectorAll("[data-copy]").forEach(function (button) {
        button.addEventListener("click", function () {
            const text = button.getAttribute("data-copy");
            const original = button.textContent;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function () {
                    button.textContent = "Copied!";
                    setTimeout(function () { button.textContent = original; }, 2000);
                });
            }
        });
    });
}

renderPaymentOptions();
