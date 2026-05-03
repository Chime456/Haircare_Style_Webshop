/* Cart System - localStorage based */

function getCart() {
    try { return JSON.parse(localStorage.getItem('cts-cart')) || []; }
    catch { return []; }
}

function saveCart(cart) {
    localStorage.setItem('cts-cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, name, price) {
    var cart = getCart();
    var qtyEl = document.getElementById('qty-' + productId);
    var qty = qtyEl ? (parseInt(qtyEl.value) || 1) : 1;
    var existing = cart.find(function(item) { return item.id === productId; });
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, name: name, price: parseFloat(price), qty: qty });
    }
    saveCart(cart);
    var btn = document.getElementById('add-btn-' + productId);
    if (btn) {
        btn.textContent = 'Hinzugefügt ✓';
        btn.disabled = true;
        setTimeout(function() { btn.textContent = 'In den Warenkorb'; btn.disabled = false; }, 1500);
    }
}

function removeFromCart(productId) {
    var cart = getCart().filter(function(item) { return item.id !== productId; });
    saveCart(cart);
    renderCartPage();
}

function updateQty(productId, delta) {
    var cart = getCart();
    var item = cart.find(function(i) { return i.id === productId; });
    if (item) {
        item.qty += delta;
        if (item.qty < 1) item.qty = 1;
        saveCart(cart);
        renderCartPage();
    }
}

function setQty(productId, val) {
    var qty = parseInt(val) || 1;
    if (qty < 1) qty = 1;
    var cart = getCart();
    var item = cart.find(function(i) { return i.id === productId; });
    if (item) { item.qty = qty; saveCart(cart); renderCartPage(); }
}

function updateCartBadge() {
    var cart = getCart();
    var count = cart.reduce(function(sum, item) { return sum + item.qty; }, 0);
    var badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
}

function renderCartPage() {
    var container = document.getElementById('cart-items');
    if (!container) return;
    var cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = '<div class="cart-empty"><p>Dein Warenkorb ist leer.</p><a href="products.html" class="btn btn-primary">Produkte ansehen</a></div>';
        return;
    }
    var html = '';
    var total = 0;
    cart.forEach(function(item) {
        var subtotal = item.price * item.qty;
        total += subtotal;
        html += '<div class="cart-item">' +
            '<div class="cart-item-info">' +
                '<h3>' + item.name + '</h3>' +
                '<span class="cart-item-price">CHF ' + item.price.toFixed(2) + '</span>' +
            '</div>' +
            '<div class="cart-item-controls">' +
                '<button class="qty-btn" onclick="updateQty(\'' + item.id + '\', -1)">−</button>' +
                '<span class="qty-display">' + item.qty + '</span>' +
                '<button class="qty-btn" onclick="updateQty(\'' + item.id + '\', 1)">+</button>' +
            '</div>' +
            '<div class="cart-item-subtotal">CHF ' + subtotal.toFixed(2) + '</div>' +
            '<button class="cart-remove" onclick="removeFromCart(\'' + item.id + '\')" aria-label="Entfernen">×</button>' +
        '</div>';
    });
    html += '<div class="cart-total"><span>Gesamt</span><span>CHF ' + total.toFixed(2) + '</span></div>';
    html += '<div class="cart-actions"><a href="products.html" class="btn btn-outline">Weiter einkaufen</a><a href="thankyou.html" class="btn btn-primary" id="checkout-btn">Bestellen</a></div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    renderCartPage();
    var popup = document.getElementById('newsletter-popup');
    if (popup && !sessionStorage.getItem('cts-popup-dismissed')) {
        setTimeout(function() { popup.classList.add('active'); }, 800);
    }
    var popupForm = document.getElementById('newsletter-popup-form');
    if (popupForm) {
        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            popupForm.style.display = 'none';
            document.getElementById('popup-success').style.display = 'block';
        });
    }
    var inlineForm = document.getElementById('newsletter-inline-form');
    if (inlineForm) {
        inlineForm.addEventListener('submit', function(e) {
            e.preventDefault();
            inlineForm.style.display = 'none';
            document.getElementById('inline-success').style.display = 'block';
        });
    }
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactForm.style.display = 'none';
            document.getElementById('contact-success').style.display = 'block';
        });
    }
});

function closeNewsletterPopup() {
    var popup = document.getElementById('newsletter-popup');
    if (popup) { popup.classList.remove('active'); }
    sessionStorage.setItem('cts-popup-dismissed', '1');
}
