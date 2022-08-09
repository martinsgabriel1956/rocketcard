import { elements } from "./elements.js";

const { name, avatar, followers, following, repositories, company, location } = elements;

export async function getGithubUserInfo(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
  
    name.textContent = data.name;
    avatar.setAttribute("src", data.avatar_url);
    avatar.setAttribute("alt", "Avatar do usuário");
    followers.textContent = `${data.followers > 1 ? `${data.followers} seguidores` : `${data.followers} seguidor`}`;
    following.textContent = `${data.following} seguindo`;
    repositories.textContent = `${data.public_repos > 1 ? `${data.public_repos} repositórios` : `${data.public_repos} repositório`}`;
    company.textContent = data.company;
    location.textContent = data.location;
  } catch (error) {
    throw new Error(error);
  }
};

