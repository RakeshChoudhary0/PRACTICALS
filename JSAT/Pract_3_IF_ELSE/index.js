// NOTE Arrow Functions and Control Statements IF ELSE AND SWITCH

/*
 * PROBLEM: E-Commerce Order Discount Calculator
 *
 * Write an arrow function named `calculateFinalPrice` that calculates
 * the final cost of an order based on customer membership tiers.
 *
 * Requirements:
 * 1. Parameters: `price` (number) and `customerTier` (string).
 * 2. Control Flow 1 (IF...ELSE): Validate inputs.
 *    - If `price` is not a positive number (<= 0), return "Error: Invalid price".
 * 3. Control Flow 2 (SWITCH): Apply discount based on `customerTier`:
 *    - "BRONZE"   => 5% discount
 *    - "SILVER"   => 10% discount
 *    - "GOLD"     => 20% discount
 *    - "PLATINUM" => 30% discount
 *    - Any other string => 0% discount (regular customer)
 * 4. Return value: The final discounted price (rounded to 2 decimal places) or an error string.
 */

// --- SOLUTION ---

const calculateFinalPrice = (price, customerTier) => {
  if (typeof price !== "number" || price <= 0) {
    return "ERROR : Invalid Price";
  }

  let DiscountRate = 0;

  switch (customerTier) {
    case "BRONZE":
      DiscountRate = 0.05;
      break;
    case "SILVER":
      DiscountRate = 0.1;
      break;
    case "GOLD":
      DiscountRate = 0.2;
      break;
    case "PLATINUM":
      DiscountRate = 0.3;
      break;
    default:
      DiscountRate = 1;
      break;
  }

  const finalPrice = price * DiscountRate;
  return Number(finalPrice);
};

const price = prompt("Whats Your Price");
const Tier = prompt("Whats Your Customer Tier");

console.log(calculateFinalPrice(Number(price), Tier));
