import { applyDiscount, formatPrice } from "./discount.js";

const originalPrice = 80;
const finalPrice = applyDiscount(originalPrice, 15);

console.log("Reusable Workflow Called Project");
console.log(`Final price: ${formatPrice(finalPrice)}`);
