// client/src/constants/memeTemplates.jsx

// This grabs ALL images directly in /public (jpg, png, jpeg, gif)
const memeModules = import.meta.glob('/public/*.{png,jpg,jpeg,gif}', { eager: true });

export const MEME_TEMPLATES = Object.keys(memeModules).map((path) => ({
  name: path.split('/').pop().split('.')[0], // filename without extension
  url: path.replace('/public', ''), // URL path works in browser
}));
