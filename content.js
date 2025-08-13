console.log('Zonaprop Property Extractor: content.js loaded.');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "extractData") {
        const data = {};
        data.url = window.location.href;

        // Property Type & Basic Info
        const propertyTypeElement = document.querySelector('h2.title-type-sup-property');
        if (propertyTypeElement) {
            data.propertyType = propertyTypeElement.textContent.trim();
        }

        // Price
        const priceElement = document.querySelector('.price-value span span');
        if (priceElement) {
            data.price = priceElement.textContent.trim();
        }

        // Address
        const addressElement = document.querySelector('.section-location-property h4');
        if (addressElement) {
            data.address = addressElement.textContent.trim();
        }

        // Detailed Features
        const features = {};
        document.querySelectorAll('#section-icon-features-property li.icon-feature').forEach(li => {
            const text = li.textContent.trim().replace(/\s\s+/g, ' '); // Replace multiple spaces with single space
            if (text.includes('m² tot.')) {
                features.totalArea = text;
            } else if (text.includes('m² cub.')) {
                features.coveredArea = text;
            } else if (text.includes('amb.')) {
                features.ambientes = text;
            } else if (text.includes('baño')) {
                features.bathrooms = text;
            } else if (text.includes('dorm.')) {
                features.bedrooms = text;
            } else if (text.includes('años')) {
                features.age = text;
            } else if (text.includes('Interno') || text.includes('Frente') || text.includes('Contrafrente')) { // Add other dispositions if known
                features.disposition = text;
            } else if (text.length === 1 && ['N', 'S', 'E', 'O'].includes(text)) { // Basic check for orientation
                features.orientation = text;
            } else if (text.includes('luminoso')) {
                features.luminosity = text;
            }
        });
        data.features = features;

        // Description
        const descriptionElement = document.querySelector('#longDescription .description-module__wrapper-description___2rEoY');
        if (descriptionElement) {
            data.description = descriptionElement.textContent.trim();
        }

        // Advertiser Code
        const advertiserCodeElement = document.evaluate("//span[contains(text(), 'Cód. del anunciante:')]/following-sibling::text()", document, null, XPathResult.STRING_TYPE, null).stringValue;
        if (advertiserCodeElement) {
            data.advertiserCode = advertiserCodeElement.trim();
        }

        // Zonaprop Code
        const zonapropCodeElement = document.evaluate("//span[contains(text(), 'Cód. Zonaprop:')]/following-sibling::text()", document, null, XPathResult.STRING_TYPE, null).stringValue;
        if (zonapropCodeElement) {
            data.zonapropCode = zonapropCodeElement.trim();
        }

        // Days Published
        const daysPublishedElement = document.querySelector('.userViews-module__post-antiquity-views___8Zfch');
        if (daysPublishedElement) {
            data.daysPublished = daysPublishedElement.textContent.trim();
        }

        // Views
        const viewsElement = document.querySelector('.tooltip-module__tooltipButton___3CqEF p.userViews-module__post-antiquity-views___8Zfch');
        if (viewsElement) {
            data.views = viewsElement.textContent.trim();
        }

        sendResponse({ data: data });
    }
});