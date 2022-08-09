import { elements } from "./utils/elements.js";
import { generateRandomColors } from "./generateRandomColors.js";
import { getGithubUserInfo } from "./utils/api.js";

const { colorBtn } = elements;

colorBtn.addEventListener("click", generateRandomColors);
getGithubUserInfo("martinsgabriel1956");
