// Desenvolvido por Prof. Marcelo Oliveira
const $ = id => document.getElementById(id);
const CART_KEY = 'brasa_cart_v2';
const ORDERS_KEY = 'brasa_orders_v2';
const LAST_ORDER_KEY = 'brasa_last_order_v2';
let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
let orders = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
let kitchenFilter = 'all';

const money = value => Number(value || 0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const priceNumber = price => Number(String(price).replace(/[^0-9,]/g,'').replace('.','').replace(',','.')) || 0;
const whatsappLink = text => `https://wa.me/${SITE.contato.whatsapp}?text=${encodeURIComponent(text)}`;

function aplicarDados(){
 const nomeCurto=SITE.nome.split(' ')[0].toUpperCase(); document.title=SITE.nome;
 ['brandName','footerBrand','aboutBrand'].forEach(id=>$(id).textContent=nomeCurto);
 $('contactBrand').textContent=`${SITE.nome.split(' ')[0]}.`; $('copyrightBrand').textContent=SITE.nome;
 $('heroTag').textContent=SITE.textos.destaque; $('heroTitle').innerHTML=`${SITE.slogan.replace(/\.$/,'')}`; $('heroDescription').textContent=SITE.descricao;
 $('aboutTitle').textContent=SITE.textos.sobreTitulo; $('aboutText').textContent=SITE.textos.sobre; $('address').textContent=SITE.contato.endereco; $('phone').textContent=SITE.contato.telefoneExibicao; $('hours').textContent=SITE.contato.horario; $('map').src=SITE.contato.mapa; $('footerDescription').textContent=SITE.descricao;
 $('aboutImage').src=SITE.imagemSobre;
 $('floatWhatsapp').href=whatsappLink('Olá! Gostaria de fazer um pedido.');
 $('ifood').href=SITE.links.ifood; $('keeta').href=SITE.links.keeta; $('noventaENove').href=SITE.links.noventaENove;
}
function renderProducts(){
 $('products').innerHTML=SITE.produtos.map((p,i)=>`<article class="product-card"><img src="${p.imagem}" alt="${p.nome}" loading="lazy"><div><h3>${p.nome}</h3><p>${p.descricao}</p><strong>${p.preco}</strong><button class="order" data-type="product" data-index="${i}">Adicionar</button></div></article>`).join('');
 document.querySelectorAll('.order').forEach(b=>b.onclick=()=>addItem(b.dataset.type,Number(b.dataset.index)));
}
function renderDrinks(){
 $('drinks').innerHTML=SITE.bebidas.map((b,i)=>`<article class="drink-card" data-type="drink" data-index="${i}" role="button" tabindex="0"><img src="${b.imagem}" alt="${b.nome}" loading="lazy"><div class="drink-content"><h3>${b.nome}</h3><p>${b.descricao}</p><div class="drink-bottom"><strong>${b.preco}</strong><span class="drink-order">Adicionar →</span></div></div></article>`).join('');
 document.querySelectorAll('.drink-card').forEach(c=>{c.onclick=()=>addItem('drink',Number(c.dataset.index));c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();addItem('drink',Number(c.dataset.index));}}});
}
function renderGallery(){ $('gallery').innerHTML=SITE.galeria.map((img,i)=>`<img src="${img}" alt="Foto ${i+1} do ${SITE.nome}" loading="lazy">`).join(''); }
function sourceItem(type,index){ const x=type==='product'?SITE.produtos[index]:SITE.bebidas[index]; return {id:`${type}-${index}`,name:x.nome,price:priceNumber(x.preco),image:x.imagem}; }
function addItem(type,index){const item=sourceItem(type,index); const found=cart.find(x=>x.id===item.id); if(found) found.qty++; else cart.push({...item,qty:1}); saveCart(); renderCart(); aviso(`${item.name} adicionado ao carrinho.`);}
function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart)); updateCount();}
function updateCount(){const n=cart.reduce((s,x)=>s+x.qty,0); $('cartCount').textContent=n; $('cartCountModal').textContent=`${n} ${n===1?'item':'itens'}`;}
function cartTotal(){return cart.reduce((s,x)=>s+x.price*x.qty,0);}
function renderCart(){
 $('cartItems').innerHTML=cart.map(x=>`<div class="cart-item"><img src="${x.image}" alt=""><div class="cart-info"><h3>${x.name}</h3><strong>${money(x.price*x.qty)}</strong><div class="qty"><button data-id="${x.id}" data-action="minus">−</button><b>${x.qty}</b><button data-id="${x.id}" data-action="plus">+</button><button class="remove" data-id="${x.id}" data-action="remove">Excluir</button></div></div></div>`).join('');
 $('cartEmpty').style.display=cart.length?'none':'block'; $('cartTotal').textContent=money(cartTotal()); updateCount();
 document.querySelectorAll('.qty button').forEach(b=>b.onclick=()=>changeQty(b.dataset.id,b.dataset.action));
 $('checkoutBtn').disabled=!cart.length;
}
function changeQty(id,action){const x=cart.find(i=>i.id===id); if(!x)return; if(action==='plus')x.qty++; if(action==='minus')x.qty--; if(action==='remove')x.qty=0; cart=cart.filter(i=>i.qty>0); saveCart(); renderCart();}
function openModal(id){$(id).classList.add('open');$(id).setAttribute('aria-hidden','false');}
function closeModal(id){$(id).classList.remove('open');$(id).setAttribute('aria-hidden','true');}
function paymentSummary(){ $('paymentSummary').innerHTML=`<div><b>${cart.reduce((s,x)=>s+x.qty,0)} itens</b><span>${money(cartTotal())}</span></div>`+cart.map(x=>`<p>${x.qty}× ${x.name}<span>${money(x.price*x.qty)}</span></p>`).join(''); }
function createOrder(e){
 e.preventDefault(); if(!cart.length)return;
 const delivery=$('deliveryType').value; if(delivery==='delivery'&&!$('customerAddress').value.trim()){aviso('Informe o endereço para entrega.');$('customerAddress').focus();return;}
 const id=String(1000+Math.floor(Math.random()*8999)); const now=new Date();
 const order={id,createdAt:now.toISOString(),status:'received',customer:{name:$('customerName').value.trim(),phone:$('customerPhone').value.trim(),address:$('customerAddress').value.trim(),delivery},payment:document.querySelector('input[name="payment"]:checked').value,items:cart.map(x=>({...x})),total:cartTotal()};
 orders.unshift(order); localStorage.setItem(ORDERS_KEY,JSON.stringify(orders)); localStorage.setItem(LAST_ORDER_KEY,id); cart=[];saveCart();closeModal('paymentModal');openModal('kitchenModal');renderKitchen();renderTracking(id);aviso(`Pedido #${id} enviado para a cozinha.`);
}
function statusLabel(s){return {received:'Pedido recebido',preparing:'Preparando',ready:'Pronto para sair',out:'Saiu para entrega',completed:'Entregue'}[s]||s;}
function nextStatus(s){return {received:'preparing',preparing:'ready',ready:'out',out:'completed'}[s];}
function renderKitchen(){
 const list=orders.filter(o=>kitchenFilter==='all'||o.status===kitchenFilter); $('kitchenOrders').innerHTML=list.length?list.map(o=>`<article class="kitchen-card"><div class="kitchen-top"><div><span class="order-number">#${o.id}</span><h3>${o.customer.name}</h3><small>${new Date(o.createdAt).toLocaleString('pt-BR')} · ${o.customer.delivery==='delivery'?'Entrega':'Retirada'}</small></div><span class="status status-${o.status}">${statusLabel(o.status)}</span></div><div class="kitchen-items">${o.items.map(i=>`<p><b>${i.qty}×</b> ${i.name}</p>`).join('')}</div><div class="kitchen-bottom"><strong>${money(o.total)}</strong>${o.status!=='completed'?`<button class="btn ${o.status==='ready'?'green':'dark'} advance" data-id="${o.id}">${o.status==='out'?'Marcar entregue':'Avançar: '+statusLabel(nextStatus(o.status))}</button>`:'<span class="done">✓ Finalizado</span>'}</div></article>`).join(''):'<div class="empty-panel">Nenhum pedido nesta etapa.</div>';
 document.querySelectorAll('.advance').forEach(b=>b.onclick=()=>advanceOrder(b.dataset.id));
}
function advanceOrder(id){const o=orders.find(x=>x.id===id);if(!o)return;o.status=nextStatus(o.status);localStorage.setItem(ORDERS_KEY,JSON.stringify(orders));renderKitchen();renderTracking(id);if(o.status==='out'){notifyCustomer(o);}else aviso(`Pedido #${id}: ${statusLabel(o.status)}.`);}
function notifyCustomer(o){const text=`Olá, ${o.customer.name}! Seu pedido #${o.id} saiu para entrega e está a caminho. 🛵🍔`; if(o.customer.phone){const digits=o.customer.phone.replace(/\D/g,''); const url=`https://wa.me/${digits.startsWith('55')?digits:'55'+digits}?text=${encodeURIComponent(text)}`; window.open(url,'_blank');} aviso(`Pedido #${o.id} saiu! WhatsApp do cliente preparado.`);}
function renderTracking(id){const o=orders.find(x=>x.id===String(id));if(!o)return;$('trackNumber').value=o.id;$('trackingResult').innerHTML=`<div class="track-head"><b>Pedido #${o.id}</b><span class="status status-${o.status}">${statusLabel(o.status)}</span></div><p>Cliente: ${o.customer.name}</p><div class="timeline">${['received','preparing','ready','out','completed'].map((s,i)=>`<div class="step ${['received','preparing','ready','out','completed'].indexOf(o.status)>=i?'done':''}"><i>${i+1}</i><span>${statusLabel(s)}</span></div>`).join('')}</div>${o.status==='out'?'<div class="arrival">🛵 Seu pedido saiu para entrega!</div>':''}${o.status==='completed'?'<div class="arrival">🎉 Pedido entregue. Bom apetite!</div>':''}`;}
function track(){const id=$('trackNumber').value.trim(); if(!id){aviso('Digite o número do pedido.');return;}renderTracking(id);if(!$('trackingResult').innerHTML) $('trackingResult').innerHTML='<p>Pedido não encontrado neste dispositivo.</p>';}

const menuBtn=$('menuBtn'),menu=$('menu');menuBtn.onclick=()=>menu.classList.toggle('active');document.querySelectorAll('#menu a').forEach(a=>a.onclick=()=>menu.classList.remove('active'));
$('openCart').onclick=()=>{renderCart();openModal('cartModal')};['heroCart','deliveryCart','ctaCart'].forEach(id=>$(id).onclick=()=>{renderCart();openModal('cartModal')});
$('checkoutBtn').onclick=()=>{paymentSummary();closeModal('cartModal');openModal('paymentModal')};$('paymentForm').onsubmit=createOrder;$('trackBtn').onclick=track;
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));
$('staffAccess').onclick=()=>{renderKitchen();openModal('kitchenModal')};
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');kitchenFilter=b.dataset.filter;renderKitchen()});
$('clearOrders').onclick=()=>{if(confirm('Apagar os pedidos deste navegador?')){orders=[];localStorage.removeItem(ORDERS_KEY);renderKitchen();}};

aplicarDados();
renderProducts();renderDrinks();renderGallery();renderCart();$('year').textContent=new Date().getFullYear();
const last=localStorage.getItem(LAST_ORDER_KEY); if(last) renderTracking(last);
setInterval(()=>{orders=JSON.parse(localStorage.getItem(ORDERS_KEY)||'[]');const lastId=$('trackNumber').value.trim();if(lastId)renderTracking(lastId);},4000);

