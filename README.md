# chantalestreeting.com

Static one-page site — Chantale Streeting, fractional COO. Plain HTML/CSS/JS,
no build step, no dependencies. English at `/`, French at `/fr/`.

```
index.html          English page
fr/index.html       French page (same structure, translated)
assets/
  style.css         all styling — colours/spacing/type live in :root at the top
  main.js           optional enhancement (scroll reveal, mobile menu, footer year)
  favicon.svg       tab icon
  chantale.jpg      YOUR PHOTO — see below
CNAME               custom domain (do not delete)
sitemap.xml robots.txt 404.html .nojekyll
```

## Photo

The photo lives at **`assets/chantale-streeting.jpg`** (currently 800×800, square —
the layout expects a square crop). To swap it, replace that file with another
square JPEG. If it's ever missing, the site falls back to a tidy "CS" block, so
nothing breaks.

## Edit the text

Open `index.html` (English) and `fr/index.html` (French) in any text editor.
The two files have the same sections in the same order — change both.

- **Tagline:** the `<h1>` in the hero section.
- **Testimonials:** the `id="testimonials"` section. Quote text sits in
  `<blockquote>`, the attribution in `<figcaption>` (bold line = role, plain line
  = anonymised org). Attributions are intentionally name-free.
- **Booking link:** every `https://zcal.co/chantale-streeting`.
- **Email:** every `hello@chantalestreeting.com`.

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/> and <http://localhost:8000/fr/>.

## Deploy (GitHub Pages)

Repo: **github.com/iamcstreeting/chantalestreeting**

1. Put the **contents of this folder** at the root of the `main` branch and push:
   ```bash
   git init
   git add .
   git commit -m "Launch site"
   git branch -M main
   git remote add origin https://github.com/iamcstreeting/chantalestreeting.git
   git push -u origin main
   ```
2. GitHub → repo → **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)` → Save
3. Wait ~1 min, then check the temporary URL:
   <https://iamcstreeting.github.io/chantalestreeting/>
4. Still in **Settings → Pages**, set **Custom domain** to `chantalestreeting.com`
   and Save. (The `CNAME` file already declares it.)
5. Add DNS records at your registrar for `chantalestreeting.com`:

   | Type  | Name / Host | Value                     |
   |-------|-------------|---------------------------|
   | A     | `@`         | `185.199.108.153`         |
   | A     | `@`         | `185.199.109.153`         |
   | A     | `@`         | `185.199.110.153`         |
   | A     | `@`         | `185.199.111.153`         |
   | CNAME | `www`       | `iamcstreeting.github.io.` |

   Optional IPv6 (AAAA on `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`,
   `2606:50c0:8002::153`, `2606:50c0:8003::153`.
6. Back in **Settings → Pages**, once the check passes, tick **Enforce HTTPS**
   (the certificate can take a few minutes to ~24h).

DNS propagation is usually quick but can take up to 24h. After that,
`chantalestreeting.com` and `www.chantalestreeting.com` both serve the site over
HTTPS.

## Email

`hello@chantalestreeting.com` is only a working inbox if you set up email
(MX records / a mailbox) with your registrar or a mail provider — that's
separate from GitHub Pages. The `mailto:` links will still open the visitor's
mail app either way.

## Updating later

Edit files, commit, push. GitHub Pages redeploys automatically in ~1 minute.
