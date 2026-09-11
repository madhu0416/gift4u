'use client';

import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const products = [
  ['Blushing Beauty Bouquet','₹1,299','24% OFF'],
  ['Chocolate Truffle Cake','₹749','25% OFF'],
  ['Personalised Photo Frame','₹999','23% OFF'],
  ['Money Plant','₹499','29% OFF'],
  ['Premium Gift Hamper','₹2,499','24% OFF'],
  ['Cute Teddy Bear','₹899','25% OFF'],
];

export function ProductRail(){
  const [liked, setLiked] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleLike = (i:number) => setLiked(v => v.includes(i) ? v.filter(x => x !== i) : [...v, i]);
  const addCart = (i:number) => setCart(v => v.includes(i) ? v : [...v, i]);

  return <section id="best-sellers" className="products-wrap" aria-label="Best sellers">
    <div className="product-grid">
      {products.map(([name, price, discount],i)=><article className="product-card" key={name}>
        <a href={`#product-${i+1}`} onClick={(e)=>{e.preventDefault(); document.getElementById(`product-${i+1}`)?.scrollIntoView({behavior:'smooth'});}} className={`product-image product-image-${i+1}`} aria-label={name} />
        <button className={`heart-button ${liked.includes(i) ? 'active':''}`} onClick={()=>toggleLike(i)} aria-label={liked.includes(i)?'Remove from wishlist':'Add to wishlist'}><Heart size={18} fill={liked.includes(i)?'currentColor':'none'}/></button>
        <div className="product-info"><a href={`#product-${i+1}`} className="product-name">{name}</a><div className="price-row"><strong>{price}</strong><del>₹{i===0?'1,699':i===1?'999':i===2?'1,299':i===3?'699':i===4?'3,299':'1,199'}</del><span>{discount}</span></div>
        <button className="add-cart" onClick={()=>addCart(i)}><ShoppingBag size={15}/> {cart.includes(i) ? 'Added to Cart' : 'Add to Cart'}</button></div>
      </article>)}
    </div>
    {cart.length > 0 && <div className="cart-toast">{cart.length} item{cart.length > 1 ? 's' : ''} added to cart · <a href="#cart">View Cart</a></div>}
  </section>;
}
