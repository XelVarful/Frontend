// Simple site JS: translations, sample products, cart count
const translations = {
  en: {
    nav_home:'Home', nav_products:'Products', nav_about:'About', nav_contact:'Contact',
    hero_title:'Streetwear for your style', hero_sub:'Comfortable. Bold. Naqta.', shop_now:'Shop now',
    featured:'Featured', all_products:'All Products'
  },
  ru: {
    nav_home:'Главная', nav_products:'Товары', nav_about:'О нас', nav_contact:'Контакты',
    hero_title:'Уличная одежда для твоего стиля', hero_sub:'Комфортно. Смело. Naqta.', shop_now:'Купить',
    featured:'Рекомендуем', all_products:'Все товары'
  }
};

function applyLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
}

// sample products (placeholders)
const sample = [
  {id:1, title:'T-Shirt', price:29.99, img:'https://via.placeholder.com/600x400?text=T-Shirt'},
  {id:2, title:'Hoodie', price:59.99, img:'https://via.placeholder.com/600x400?text=Hoodie'},
  {id:3, title:'Cap', price:19.99, img:'https://via.placeholder.com/600x400?text=Cap'},
  {id:4, title:'Jacket', price:89.99, img:'https://via.placeholder.com/600x400?text=Jacket'}
];

function renderFeatured(){
  const f = document.getElementById('featured');
  if(!f) return;
  sample.slice(0,3).forEach(p=>{
    f.insertAdjacentHTML('beforeend', `
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${p.img}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">$${p.price}</p>
            <button class="btn btn-dark add" data-id="${p.id}">Add</button>
          </div>
        </div>
      </div>`);
  });
}

function renderProducts(){
  const list = document.getElementById('products');
  if(!list) return;
  sample.forEach(p=>{
    list.insertAdjacentHTML('beforeend', `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${p.img}" class="card-img-top" alt="">
          <div class="card-body">
            <h5>${p.title}</h5>
            <p>$${p.price}</p>
            <button class="btn btn-dark add" data-id="${p.id}">Add to cart</button>
          </div>
        </div>
      </div>`);
  });
}

function cartCount(){
  const c = JSON.parse(localStorage.getItem('cart')||'[]').length;
  document.getElementById('cart-count')?.textContent = c;
  document.getElementById('cart-count-2')?.textContent = c;
}

document.addEventListener('click', function(e){
  if(e.target.matches('.add')){
    const id = e.target.getAttribute('data-id');
    const cart = JSON.parse(localStorage.getItem('cart')||'[]');
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount();
    // small jQuery animation if available
    if(window.jQuery) $(e.target).fadeOut(100).fadeIn(100);
  }
});

document.addEventListener('DOMContentLoaded', ()=> {
  // language
  const saved = localStorage.getItem('lang') || 'en';
  document.getElementById('lang')?.value && (document.getElementById('lang').value = saved);
  document.getElementById('lang2')?.value && (document.getElementById('lang2').value = saved);
  applyLang(saved);

  document.getElementById('lang')?.addEventListener('change', e=>{
    const v = e.target.value; localStorage.setItem('lang', v); applyLang(v);
    document.getElementById('lang2') && (document.getElementById('lang2').value = v);
  });
  document.getElementById('lang2')?.addEventListener('change', e=>{
    const v = e.target.value; localStorage.setItem('lang', v); applyLang(v);
    document.getElementById('lang') && (document.getElementById('lang').value = v);
  });

  // render UI
  renderFeatured();
  renderProducts();
  cartCount();
  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
  document.getElementById('year2') && (document.getElementById('year2').textContent = new Date().getFullYear());
});
// CART PAGE
function renderCart(){
  const cont = document.getElementById('cartItems');
  if(!cont) return;
  const cart = JSON.parse(localStorage.getItem('cart')||'[]');
  cont.innerHTML = '';
  if(cart.length===0){
    cont.innerHTML = '<p data-i18n="empty_cart">Your cart is empty.</p>';
    return;
  }
  let total = 0;
  cart.forEach(id=>{
    const p = sample.find(x=>x.id==id);
    if(p){
      total += p.price;
      cont.insertAdjacentHTML('beforeend', `
        <div class="col-md-4 mb-3">
          <div class="card p-2">
            <img src="${p.img}" class="card-img-top" alt="">
            <div class="card-body">
              <h5>${p.title}</h5>
              <p>$${p.price}</p>
            </div>
          </div>
        </div>
      `);
    }
  });
  document.getElementById('cartTotal').innerHTML = `<h4 data-i18n="total">Total:</h4> $${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', renderCart);

// CONTACT FORM
document.addEventListener('submit', e=>{
  if(e.target.id==='contactForm'){
    e.preventDefault();
    $('#successMsg').removeClass('d-none').hide().fadeIn(400);
    e.target.reset();
  }
});
