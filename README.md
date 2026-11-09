# Mirsal website

The marketing site for **Mirsal (مرسال)**, built with **Astro** and **Tailwind CSS**.
Every page exists in English (`/`) and Arabic (`/ar/`).

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # once, downloads everything
npm run dev        # starts the site at http://localhost:4321
```

Edit any file and the browser refreshes on its own. Stop with `Ctrl + C`.

```bash
npm run build      # makes the finished site in the dist/ folder
npm run preview    # shows that finished site locally
```

## Where things are

```
src/
  i18n/
    en.ts          ← ALL English text. Change wording here.
    ar.ts          ← ALL Arabic text. Same structure as en.ts.
    chat.ts        ← the WhatsApp demo conversation (both languages)
    index.ts       ← small helpers: links, language, arrow direction
  layouts/
    Base.astro     ← the page shell: <head>, SEO tags, header and footer
  components/      ← reusable pieces (Logo, Button, Header, Footer, ChatDemo…)
  views/           ← one file per page design (Home, Services, Process…)
  pages/           ← the URLs. Each file just shows a view in a language:
    index.astro        → /            (Home, English)
    services.astro     → /services/
    ar/index.astro     → /ar/         (Home, Arabic)
    ar/services.astro  → /ar/services/
  styles/global.css ← colours, fonts and Tailwind setup
public/            ← files served as-is (favicon; put photos here)
```

**Most changes only need `src/i18n/en.ts` and `src/i18n/ar.ts`.**
TypeScript checks that the Arabic file has exactly the same keys as the English one,
so if you add a line in one and forget the other, `npm run build` tells you.

## Astro in two minutes

An `.astro` file has two parts:

```astro
---
// 1. JavaScript at the top, between the --- lines. Runs when the site is built.
const name = 'Mirsal';
---
<!-- 2. HTML below. Use {curly braces} to insert values. -->
<h1>{name}</h1>
```

- Components are used like HTML tags: `<Button href="/contact/">Book</Button>`.
- Loops: `{items.map((item) => <li>{item}</li>)}`.
- The site is plain HTML when built. Only the chat language toggle and the contact form use a little JavaScript.

## Tailwind in two minutes

Instead of writing CSS, you add small classes to the HTML:

| Class | Means |
|---|---|
| `text-gold`, `bg-ink`, `border-line` | the brand colours (defined in `global.css`) |
| `font-display` | Cormorant Garamond in English, El Messiri in Arabic |
| `px-5`, `py-20`, `gap-6` | padding and spacing (each unit is 4px) |
| `md:py-32`, `lg:flex` | only from medium / large screens upwards |
| `rtl:text-sm` | only on Arabic (right-to-left) pages |
| `ms-4`, `pe-6`, `start-0`, `text-end` | spacing that **flips automatically** for Arabic |
| `caps` | our own class: spaced capitals in English, normal in Arabic |

To change a colour everywhere, edit it once in `src/styles/global.css` under `@theme`.

## Things to fill in before launch

Search the project for `[` to find every placeholder:

- **Prices**: `[SAR 0,000]` in `en.ts` / `[٠٬٠٠٠ ريال]` in `ar.ts`
- **Contact details**: `contactInfo` near the top of both language files
- **Partner name**, your founder quote on the About page
- **Domain**: `site:` in `astro.config.mjs` (used for SEO and the sitemap)
- **Privacy policy**: fill the brackets and have it reviewed

### Photos

All photos are listed in `src/data/images.ts` and shown with the `<Photo>` component, e.g.
`<Photo name="villa" lang={lang} ratio="4 / 5" arch />`.

They are free Unsplash photos (commercial use allowed, see https://unsplash.com/license), loaded from
Unsplash's CDN at the right size for each screen. To use your own or host them yourself:

1. Put the image in `public/images/`, e.g. `public/images/villa.jpg`.
2. In `src/data/images.ts`, change that photo's `src` to `'/images/villa.jpg'` and update the `alt` text.

The founder sections currently show an architectural photo (`arches`).
**Replace it with a real portrait of yourself** before launch: people buy from people.

## The contact form

1. Copy `.env.example` to `.env`.
2. Set `PUBLIC_FORM_ENDPOINT` to your **n8n webhook URL** (Webhook node, method POST, JSON body).
3. The form sends: `name, agency, role, city, whatsapp, email, monthly_enquiries, preferred_language, message, consent, language`.
4. In n8n, add a Google Sheets node (save the lead) and a WhatsApp/Telegram/email node (alert you).

Without an endpoint the form simply goes to the thank-you page, which is handy while developing.
On Cloudflare Pages, set the same variable under *Settings → Environment variables*.

## Put it online (free) with Cloudflare Pages

1. Create a GitHub repository and push this folder to it.
2. In Cloudflare: *Workers & Pages → Create → Pages → Connect to Git*, pick the repository.
3. Framework preset **Astro**, build command `npm run build`, output folder `dist`.
4. Add your domain under *Custom domains*.

Every time you push to GitHub, the site rebuilds automatically.
