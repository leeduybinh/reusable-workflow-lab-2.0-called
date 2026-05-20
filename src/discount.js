export function calculateDiscount(price, percent) {
  return price * (percent / 100);
}

export function applyDiscount(price, percent) {
  return price - calculateDiscount(price, percent);
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
