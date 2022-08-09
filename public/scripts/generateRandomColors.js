import { colors } from "./utils/colors.js";
import { elements } from "./utils/elements.js";

const { card } = elements;

export function generateRandomColors() {
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  card.style.background = randomColors;
}
