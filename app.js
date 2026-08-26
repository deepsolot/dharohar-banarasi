// ===== DHAROHAR BANARASI - COMPLETE E-COMMERCE APP =====

// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: 'Royal Shikargah Katan Silk',
    category: 'katan-silk',
    price: 18500,
    original: 24000,
    image: 'images/katan_silk_saree.jpg',
    fabric: 'Pure Katan Silk',
    color: 'Royal Blue with Gold Zari',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 124,
    featured: true,
    description: 'A magnificent Katan Silk saree with intricate Shikargah (hunting scene) motifs in heavy gold zari. Made on traditional handloom using pure mulberry silk threads. The dense weaving creates a luxurious weight perfect for weddings and grand occasions.',
    attributes: { fabric: 'Pure Katan Silk', zari: 'Real Gold Zari', length: '6.5 meters', occasion: 'Wedding / Festival', weave: 'Handloom', care: 'Dry Clean Only' }
  },
  {
    id: 2,
    name: 'Blossom Organza Banarasi',
    category: 'organza',
    price: 8900,
    original: 12000,
    image: 'images/organza_saree.jpg',
    fabric: 'Pure Organza Silk',
    color: 'Blush Pink with Antique Gold',
    badge: 'New',
    rating: 4.8,
    reviews: 86,
    featured: true,
    description: 'A delicate organza saree with floral jaal weaving in antique gold zari. The lightweight, sheer fabric drapes beautifully for celebrations and evening wear. Each motif is individually woven by skilled artisans.',
    attributes: { fabric: 'Pure Organza Silk', zari: 'Antique Gold Zari', length: '6.5 meters', occasion: 'Party / Festival', weave: 'Handloom', care: 'Dry Clean Only' }
  },
  {
    id: 3,
    name: 'Emerald Peacock Georgette',
    category: 'georgette',
    price: 11200,
    original: 15000,
    image: 'images/georgette_saree.jpg',
    fabric: 'Pure Georgette Silk',
    color: 'Emerald Green with Silver Zari',
    badge: 'New',
    rating: 4.7,
    reviews: 62,
    featured: true,
    description: 'An exquisite Georgette Banarasi saree featuring peacock motifs in pure silver zari against an emerald green ground. The georgette base gives this saree a flowing, soft drape ideal for formal occasions.',
    attributes: { fabric: 'Pure Georgette Silk', zari: 'Pure Silver Zari', length: '6.5 meters', occasion: 'Formal / Festive', weave: 'Handloom', care: 'Dry Clean Only' }
  },
  {
    id: 4,
    name: 'Crimson Bridal Dupatta',
    category: 'dupatta',
    price: 6500,
    original: 8500,
    image: 'images/bridal_dupatta.jpg',
    fabric: 'Pure Silk',
    color: 'Crimson Red with Antique Gold',
    badge: 'Bridal',
    rating: 4.9,
    reviews: 201,
    featured: true,
    description: 'A breathtaking bridal dupatta with heavy zari work and traditional Banarasi border. Hand-woven with intricate bootis and a magnificent pallu. This dupatta pairs perfectly with any lehenga or saree for bridal occasions.',
    attributes: { fabric: 'Pure Silk', zari: 'Heavy Antique Gold', length: '2.5 meters', occasion: 'Bridal / Wedding', weave: 'Handloom', care: 'Dry Clean Only' }
  },
  {
    id: 5,
    name: 'Saffron Cotton Everyday Saree',
    category: 'cotton',
    price: 3200,
    original: 4200,
    image: 'images/cotton_saree.jpg',
    fabric: 'Pure Cotton with Silk Border',
    color: 'Saffron Orange with Gold',
    badge: null,
    rating: 4.6,
    reviews: 178,
    featured: false,
    description: 'A beautiful everyday cotton saree with a silk zari border. Light, breathable, and perfect for daily wear, festive occasions, and summer events. Hand-woven in Varanasi with traditional patterns.',
    attributes: { fabric: 'Cotton with Silk Border', zari: 'Gold Zari Border', length: '6.5 meters', occasion: 'Daily / Casual / Festival', weave: 'Handloom', care: 'Hand Wash / Dry Clean' }
  },
  {
    id: 6,
    name: 'Plum Royal Banarasi Suit Set',
    category: 'suits',
    price: 9800,
    original: 13500,
    image: 'images/banarasi_suit.jpg',
    fabric: 'Pure Silk Unstitched',
    color: 'Deep Plum with Gold Zari',
    badge: 'New',
    rating: 4.8,
    reviews: 45,
    featured: false,
    description: 'A gorgeous unstitched Banarasi silk suit set including top fabric, salwar, and matching dupatta. All three pieces feature intricate Banarasi zari weaving. Perfect for creating a bespoke ethnic ensemble.',
    attributes: { fabric: 'Pure Silk (Unstitched)', zari: 'Heavy Gold Zari', includes: 'Top + Salwar + Dupatta', occasion: 'Festival / Wedding', weave: 'Handloom', care: 'Dry Clean Only' }
  },
  {
    id: 7,
    name: 'Midnight Tanchoi Silk Saree',
    category: 'katan-silk',
    price: 22000,
    original: 28000,
    image: 'images/katan_silk_saree.jpg',
    fabric: 'Pure Tanchoi Silk',
    color: 'Midnight Blue with Gold Brocade',
    badge: 'Premium',
    rating: 5.0,
    reviews: 38,
    featured: false,
    description: 'A masterpiece of Tanchoi weaving — a complex technique where the pattern is created using multiple colored silks in a satin weave, creating a three-dimensional brocade effect. Reserved for the most discerning connoisseurs.',
    attributes: { fabric: 'Pure Tanchoi Silk', zari: 'Gold Brocade Work', length: '6.5 meters', occasion: 'Wedding / Grand Events', weave: 'Handloom', care: 'Dry Clean Only' }
  },
  {
    id: 8,
    name: 'Peach Chanderi Organza',
    category: 'organza',
    price: 7200,
    original: 9500,
    image: 'images/organza_saree.jpg',
    fabric: 'Organza Silk',
    color: 'Peach with Silver Zari',
    badge: null,
    rating: 4.7,
    reviews: 53,
    featured: false,
    description: 'A soft and sheer organza saree with delicate silver zari jaal. The peach color with silver creates a timeless, elegant look perfect for afternoon ceremonies, receptions, and festivals.',
    attributes: { fabric: 'Organza Silk', zari: 'Pure Silver Zari', length: '6.5 meters', occasion: 'Reception / Festival', weave: 'Handloom', care: 'Dry Clean Only' }
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('dharohar_cart') || '[]');
let maxPrice = 50000;
let currentCategory = 'all';
let currentSort = 'default';
let gridColumns = 4;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderShopProducts();
  updateCartUI();
  initScrollHeader();
});

// ===== PAGE NAVIGATION =====
function showPage(page) {
  document.getElementById('homePage').style.display = page === 'home' ? 'block' : 'none';
  document.getElementById('shopPage').style.display = page === 'shop' ? 'block' : 'none';
  document.getElementById('productPage').style.display = page === 'product' ? 'block' : 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterProducts(cat) {
  currentCategory = cat;
  showPage('shop');
  // Update filter checkboxes
  document.querySelectorAll('.shop-sidebar input[type="checkbox"]').forEach(cb => {
    cb.checked = cb.value === cat || (cat === 'all' && cb.value === 'all');
  });
  renderShopProducts();
}

// ===== PRODUCTS =====
function getFilteredProducts() {
  let filtered = products;
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  filtered = filtered.filter(p => p.price <= maxPrice);
  switch (currentSort) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  }
  return filtered;
}

function renderFeaturedProducts() {
  const featured = products.filter(p => p.featured);
  const container = document.getElementById('featuredProducts');
  if (container) container.innerHTML = featured.map(p => createProductCard(p, true)).join('');
}

function renderShopProducts() {
  const filtered = getFilteredProducts();
  const container = document.getElementById('shopProducts');
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  if (container) {
    container.innerHTML = filtered.length
      ? filtered.map(p => createProductCard(p, false)).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-lighter)"><p style="font-size:1.5rem;margin-bottom:8px">No products found</p><p>Try adjusting your filters</p></div>`;
    container.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
  }
}

function createProductCard(product, dark = false) {
  const discount = Math.round((1 - product.price / product.original) * 100);
  const badgeClass = product.badge === 'New' ? 'new' : '';
  return `
    <div class="product-card" onclick="openProduct(${product.id})">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<div class="product-badge ${badgeClass}">${product.badge}</div>` : ''}
        <div class="product-actions">
          <button class="product-action-btn" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button class="product-action-btn" onclick="event.stopPropagation(); showToast('Added to wishlist! ♥')" title="Wishlist">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="product-overlay">
          <button class="product-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
      <div class="product-info" style="${dark ? 'background:var(--dark-2)' : ''}">
        <div class="product-name" style="${dark ? 'color:var(--cream-dark)' : ''}">${product.name}</div>
        <div class="product-fabric" style="${dark ? 'color:rgba(255,255,255,0.4)' : ''}">${product.fabric}</div>
        <div class="product-price-row">
          <div>
            <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
            <span class="product-original">₹${product.original.toLocaleString('en-IN')}</span>
          </div>
          <span class="product-discount">-${discount}%</span>
        </div>
        <div class="product-rating">
          <span class="product-stars">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</span>
          <span class="product-reviews" style="${dark ? 'color:rgba(255,255,255,0.3)' : ''}">(${product.reviews})</span>
        </div>
      </div>
    </div>
  `;
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  const discount = Math.round((1 - p.price / p.original) * 100);
  const detail = document.getElementById('productDetail');
  detail.innerHTML = `
    <div class="product-detail-grid">
      <div class="detail-images">
        <div class="detail-main-img">
          <img src="${p.image}" alt="${p.name}" id="mainDetailImg">
        </div>
        <div class="detail-thumbnails">
          <div class="detail-thumb active"><img src="${p.image}" alt="${p.name}"></div>
          <div class="detail-thumb"><img src="images/hero_saree.jpg" alt="alt view"></div>
          <div class="detail-thumb"><img src="images/varanasi_weaving.jpg" alt="weaving"></div>
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-breadcrumb">
          <span onclick="showPage('home')">Home</span> / 
          <span onclick="showPage('shop')">Collections</span> / 
          ${p.name}
        </div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-rating">
          <span style="color:var(--gold)">${'★'.repeat(Math.floor(p.rating))}</span>
          <span style="font-size:0.875rem;color:var(--text-lighter)">${p.rating} · ${p.reviews} reviews</span>
        </div>
        <div class="detail-price-row">
          <div class="detail-price">₹${p.price.toLocaleString('en-IN')}</div>
          <div class="detail-original">₹${p.original.toLocaleString('en-IN')}</div>
          <div class="detail-savings">Save ₹${(p.original - p.price).toLocaleString('en-IN')} (${discount}% off)</div>
        </div>
        <p class="detail-description">${p.description}</p>
        <div class="detail-attrs">
          ${Object.entries(p.attributes).map(([k, v]) => `
            <div class="detail-attr">
              <div class="detail-attr-label">${k}</div>
              <div class="detail-attr-value">${v}</div>
            </div>
          `).join('')}
        </div>
        <div class="detail-actions">
          <button class="btn-gold" onclick="addToCart(${p.id})">
            🛍 Add to Cart
          </button>
          <button class="btn-outline" onclick="addToCart(${p.id}); checkout()">
            Buy Now →
          </button>
          <button class="btn-outline" onclick="showToast('Added to wishlist! ♥')" style="padding:15px 14px">♡</button>
        </div>
        <div class="detail-features">
          <h4>Product Highlights</h4>
          <ul>
            <li>100% Authentic Handwoven from Varanasi</li>
            <li>Comes with a Certificate of Authenticity</li>
            <li>Floating threads on reverse prove genuine handloom</li>
            <li>Free dry-cleaning bag included</li>
            <li>Gift-wrapped in premium box</li>
            <li>Free shipping above ₹2,999</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  // Thumbnail click
  setTimeout(() => {
    document.querySelectorAll('.detail-thumb').forEach((thumb, i) => {
      thumb.onclick = () => {
        const imgs = ['images/katan_silk_saree.jpg', 'images/hero_saree.jpg', 'images/varanasi_weaving.jpg', 'images/organza_saree.jpg'];
        document.getElementById('mainDetailImg').src = imgs[i] || p.image;
        document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      };
    });
  }, 100);

  showPage('product');
}

// ===== CART =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, image: product.image, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name.split(' ').slice(0,2).join(' ')} added to cart!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQty(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + change);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('dharohar_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  
  const countEl = document.getElementById('cartCount');
  const itemCountEl = document.getElementById('cartItemCount');
  const subtotalEl = document.getElementById('cartSubtotal');
  const footerEl = document.getElementById('cartFooter');
  const emptyEl = document.getElementById('cartEmpty');
  const itemsEl = document.getElementById('cartItems');

  if (countEl) {
    countEl.textContent = total;
    countEl.classList.toggle('visible', total > 0);
  }
  if (itemCountEl) itemCountEl.textContent = total;
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (footerEl) footerEl.style.display = cart.length > 0 ? 'block' : 'none';

  if (itemsEl && emptyEl) {
    // Remove existing cart items (keep empty state)
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    
    if (cart.length === 0) {
      emptyEl.style.display = 'flex';
    } else {
      emptyEl.style.display = 'none';
      cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
          <img class="cart-item-img" src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
              <span class="qty-display">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
              <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕ Remove</button>
            </div>
          </div>
        `;
        itemsEl.appendChild(el);
      });
    }
  }
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('active');
  document.getElementById('cartOverlay').classList.toggle('active');
}

// ===== CHECKOUT =====
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  const summary = document.getElementById('checkoutSummary');
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 2999 ? 0 : 99;
  const total = subtotal + shipping;

  if (summary) {
    summary.innerHTML = `
      <h4>Order Summary</h4>
      ${cart.map(i => `<div class="summary-item"><span>${i.name} ×${i.qty}</span><span>₹${(i.price * i.qty).toLocaleString('en-IN')}</span></div>`).join('')}
      <div class="summary-item"><span>Shipping</span><span>${shipping === 0 ? '🆓 Free' : '₹' + shipping}</span></div>
      <div class="summary-total"><span>Total</span><span>₹${total.toLocaleString('en-IN')}</span></div>
    `;
  }

  // Close cart drawer first
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');

  // Open checkout
  document.getElementById('checkoutModal').classList.add('active');
  document.getElementById('checkoutOverlay').classList.add('active');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
  document.getElementById('checkoutOverlay').classList.remove('active');
}

function placeOrder(e) {
  e.preventDefault();
  closeCheckout();
  cart = [];
  saveCart();
  updateCartUI();
  setTimeout(() => {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:400;
      display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;
    `;
    modal.innerHTML = `
      <div style="background:white;border-radius:20px;padding:50px;text-align:center;max-width:420px;width:90%;animation:scaleIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275)">
        <div style="font-size:4rem;margin-bottom:16px">🎉</div>
        <h2 style="font-family:var(--font-serif);font-size:2rem;color:var(--dark);margin-bottom:8px">Order Placed!</h2>
        <p style="color:var(--text-lighter);margin-bottom:8px">Thank you for your order. You will receive a confirmation email & SMS shortly.</p>
        <p style="color:var(--text-light);font-size:0.875rem;margin-bottom:24px">Order ID: <strong>#DHB${Date.now().toString().slice(-6)}</strong></p>
        <button onclick="this.closest('div[style*=inset]').remove()" style="background:var(--maroon);color:white;padding:13px 32px;border-radius:8px;border:none;font-size:1rem;font-weight:600;cursor:pointer">
          Continue Shopping
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }, 300);
}

// ===== FILTERS =====
function handleFilterChange(checkbox) {
  if (checkbox.value === 'all') {
    currentCategory = 'all';
    document.querySelectorAll('.shop-sidebar input[type="checkbox"]').forEach(cb => {
      cb.checked = cb.value === 'all';
    });
  } else {
    document.getElementById('filterAll').checked = false;
    const checked = Array.from(document.querySelectorAll('.shop-sidebar input[type="checkbox"]:checked'));
    currentCategory = checked.length > 0 ? checked[0].value : 'all';
  }
  renderShopProducts();
}

function updatePriceFilter(val) {
  maxPrice = parseInt(val);
  document.getElementById('priceMax').textContent = `₹${parseInt(val).toLocaleString('en-IN')}`;
  renderShopProducts();
}

function sortProducts(val) {
  currentSort = val;
  renderShopProducts();
}

function setGridColumns(n) {
  gridColumns = n;
  const shopProducts = document.getElementById('shopProducts');
  if (shopProducts) shopProducts.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`view${n}`).classList.add('active');
}

function searchProducts(val) {
  if (!val.trim()) {
    renderShopProducts();
    return;
  }
  showPage('shop');
  const query = val.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.fabric.toLowerCase().includes(query) ||
    p.category.includes(query) ||
    p.color.toLowerCase().includes(query)
  );
  const container = document.getElementById('shopProducts');
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${val}"`;
  if (container) container.innerHTML = filtered.length
    ? filtered.map(p => createProductCard(p, false)).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-lighter)"><p style="font-size:1.5rem">No results for "${val}"</p></div>`;
}

// ===== UI HELPERS =====
function toggleSearch() {
  document.getElementById('searchBar').classList.toggle('active');
  if (document.getElementById('searchBar').classList.contains('active')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  }
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  setTimeout(() => { toast.className = 'toast'; }, 3000);
}

function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  showToast(`✓ Subscribed! Welcome to Dharohar family, ${email.split('@')[0]}!`, 'success');
  e.target.reset();
}

function initScrollHeader() {
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
  @keyframes scaleIn { from { opacity:0;transform:scale(0.8) } to { opacity:1;transform:scale(1) } }
`;
document.head.appendChild(style);
