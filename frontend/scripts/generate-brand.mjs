import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const global = JSON.parse(await readFile(resolve(root, 'src/content/global.json'), 'utf8'));
const card = global.seo.shareCard;
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const mark = await readFile(resolve(root, 'public/images/brand/mark.svg'));
const emblem = await readFile(resolve(root, 'public/images/brand/emblem.svg'));
const photo = await readFile(resolve(root, `public${card.image}`));
const photoUri = `data:image/jpeg;base64,${photo.toString('base64')}`;
const emblemUri = `data:image/svg+xml;base64,${emblem.toString('base64')}`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
 <linearGradient id="fade"><stop stop-color="#191613"/><stop offset=".54" stop-color="#191613"/><stop offset="1" stop-color="#191613" stop-opacity=".25"/></linearGradient>
 <linearGradient id="gold" gradientUnits="userSpaceOnUse" x1="389" y1="175" x2="670" y2="445"><stop stop-color="#8d6c32"/><stop offset=".5" stop-color="#dfc58a"/><stop offset="1" stop-color="#8d6c32"/></linearGradient>
</defs>
<rect width="1200" height="630" fill="#191613"/>
<image href="${photoUri}" x="490" y="0" width="710" height="630" preserveAspectRatio="xMidYMid slice"/>
<rect width="1200" height="630" fill="url(#fade)"/>
<rect x="24" y="24" width="1152" height="582" rx="2" stroke="#b3995a" stroke-opacity=".5" fill="none"/>
<path d="M48 48h170M48 48v70m1104-70H982m170 0v70M48 582h170m-170 0v-70m1104 70H982m170 0v-70" fill="none" stroke="#c2a768"/>
<image href="${emblemUri}" x="65" y="158" width="285" height="285"/>
<path d="M389 175v270" stroke="url(#gold)"/>
<g font-family="Georgia, 'Times New Roman', serif">
 <text x="435" y="232" fill="#d9c089" font-size="23" letter-spacing="5">${escape(card.eyebrow)}</text>
 ${card.titleLines.map((line,i)=>`<text x="430" y="${326+i*72}" fill="#f7ebd2" font-size="76" font-weight="bold">${escape(line)}</text>`).join('')}
 <text x="435" y="393" fill="#e3d2af" font-size="27" font-style="italic">${escape(card.tagline)}</text>
</g>
<path d="M438 440h210" stroke="url(#gold)"/>
<path d="m662 435 5 5-5 5-5-5z" fill="#c9ab65"/>
<rect y="618" width="1200" height="12" fill="#922b21"/>
<text x="600" y="544" text-anchor="middle" fill="#d1bb90" font-family="Georgia,serif" font-size="18" letter-spacing="4">${escape(card.location)}</text>
</svg>`;
await mkdir(resolve(root, 'public/images/brand'), { recursive: true });
await sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toFile(resolve(root, `public${global.seo.shareImage.src}`));
await sharp(emblem).resize(1200,1200).png().toFile(resolve(root, 'public/images/brand/emblem.png'));
for (const size of [16,32,192,512]) await sharp(mark).resize(size,size).png().toFile(resolve(root, `public/icon-${size}.png`));
await sharp(mark).resize(180,180).flatten({background:'#faf4e5'}).png().toFile(resolve(root, 'public/apple-touch-icon.png'));
const png = await sharp(mark).resize(32,32).png().toBuffer();
const ico = Buffer.alloc(22);ico.writeUInt16LE(1,2);ico.writeUInt16LE(1,4);ico[6]=32;ico[7]=32;ico.writeUInt16LE(1,10);ico.writeUInt16LE(32,12);ico.writeUInt32LE(png.length,14);ico.writeUInt32LE(22,18);
await writeFile(resolve(root, 'public/favicon.ico'), Buffer.concat([ico,png]));
console.log('Generated social card, emblem and favicons.');
