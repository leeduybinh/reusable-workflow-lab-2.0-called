import test from "node:test";
import assert from "node:assert/strict";
import { applyDiscount, calculateDiscount, formatPrice } from "../src/discount.js";

test("calculateDiscount returns the discount amount", () => {
  assert.equal(calculateDiscount(100, 20), 20);
});

test("applyDiscount returns the final price", () => {
  assert.equal(applyDiscount(100, 20), 80);
});

test("formatPrice formats a number as currency text", () => {
  assert.equal(formatPrice(68), "$68.00");
});
