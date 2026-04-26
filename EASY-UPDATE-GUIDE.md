# Deepika Enterprise Website — Easy Update Guide

This guide helps you update the website without any coding knowledge.
Open `index.html` in VS Code (or any text editor like Notepad) to make changes.

---

## HOW TO CHANGE PRODUCT PRICES

Open `index.html` and use **Ctrl+F** (Find) to search for the price you want to change.

| Product | Search for | Located around line |
|---------|-----------|-------------------|
| BOPP Film Rolls | `₹ 145/kg` | Line 76 |
| LD Polyethylene | `₹ 125/kg` | Line 101 |
| BP Granules | `₹ 95/kg` | Line 128 |

**Example — Change BOPP price from ₹145 to ₹160:**

Find this text:
```
₹ 145/kg onwards
```
Replace with:
```
₹ 160/kg onwards
```

For products with "Call for Price" (HP, Super LD, Plastic Bags), find:
```
Call for Price
```
And replace with your price, e.g. `₹ 110/kg onwards`

---

## HOW TO UPDATE CONTACT INFO

Open `index.html` and search for each item:

**Business Location (line ~298):**
Search: `Ram Bazaar, Delhi, India`
Replace with your full address.

**Business Hours (line ~303):**
Search: `Monday – Saturday`
Update the days/hours below it.

**WhatsApp Number:**
Search: `wa.me/919312242208`
Replace `919312242208` with your number (91 = India code, then 10-digit mobile number).
Example: for 9876543210 → use `919876543210`

---

## HOW TO ADD A NEW PRODUCT

Find the last product card (around line 133) which ends with:
```html
        </article>
      </div>
    </div>
  </section>
```

**Insert a new product card BEFORE** `</div></div></section>`:

```html
        <!-- NEW PRODUCT NAME -->
        <article class="product-card">
          <div class="product-img" role="img" aria-label="Your product description" style="background-image: url('images/yourimage.jpg');"></div>
          <div class="product-body">
            <h3>Your Product Name</h3>
            <p class="product-desc">Write a short description here.</p>
            <div class="product-footer">
              <span class="price price-fixed">₹ 100/kg onwards</span>
              <button class="inquire-btn" data-product="Your Product Name">Inquire</button>
            </div>
          </div>
        </article>
```

Also add it to the dropdown in the contact form (around line 336):
```html
              <option>Your Product Name</option>
```

---

## HOW TO CHANGE PHOTOS

**Step 1:** Prepare your new photo:
- Rename it to match the product (e.g. `bopp.jpg`, `hp.jpg`, `ld.jpg`, `superld.jpg`, `bp.jpg`, `bags.jpg`)
- Recommended size: 800×600 pixels, under 200KB
- Format: JPG

**Step 2:** Copy your new photo into the `images/` folder.
It will automatically replace the old one (same filename).

**Product image filenames:**
| Product | Filename |
|---------|----------|
| BOPP Film Rolls | `images/bopp.jpg` |
| HP Granules | `images/hp.jpg` |
| LD Polyethylene | `images/ld.jpg` |
| Super LD | `images/superld.jpg` |
| BP Granules | `images/bp.jpg` |
| Plastic Bags & Rolls | `images/bags.jpg` |
| Gallery images | `images/gallery1.jpg` to `images/gallery6.jpg` |
| Logo | `images/logo.avif` |

---

## HOW TO PUSH UPDATES TO GITHUB (make changes live)

After making any changes, open **VS Code Terminal** (`Ctrl + ~`) and run these 3 commands one by one:

```bash
git add .
```
```bash
git commit -m "Updated website - describe what you changed"
```
```bash
git push
```

**Your live site updates in 1–2 minutes at:**
https://vinayakmehra69.github.io/deepika-enterprise

---

## QUICK REFERENCE — Common Things to Edit

| What to change | Search for in index.html | Line (approx) |
|---------------|--------------------------|---------------|
| Page title (browser tab) | `<title>Deepika Enterprise` | Line 7 |
| Hero heading | `Premium <span` | Line 44 |
| Hero subtext | `Your trusted partner` | Line 45 |
| About Us story | `Established in` | Line 221 |
| Footer address | `Ram Bazaar` | Line 387 |
| Copyright year | `© 2025` | Line 392 |
| WhatsApp number | `wa.me/91` | Line 399 |

---

## HOW TO ADD A REAL PRODUCT TO A CATEGORY PAGE

Each category now has its own page (bopp.html, hp.html, ld.html, superld.html, bp.html, packaging.html).
Each page has 6 placeholder cards ready to fill with your real products.

**Step 1:** Open the category file you want to edit.
For example, to add an LD product: open `ld.html`

**Step 2:** Find a placeholder card.
Use **Ctrl+F** and search for: `PLACEHOLDER`
This will highlight each empty card.

**Step 3:** Replace the placeholder content in that card:

| Find this | Replace with |
|-----------|-------------|
| `📷` (camera emoji in the card) | Delete the `<div class="placeholder-img">` block and add: `<img src="images/yourphoto.jpg" alt="Product name" style="width:100%;height:200px;object-fit:cover;" />` |
| `Product description goes here` | Your real product description |
| `₹ 000 /kg` | Your real price, e.g. `₹ 125/kg onwards` |

**Step 4:** Delete the orange label tag from that card.
Find and delete this entire line:
```html
<span class="placeholder-label">Placeholder — Replace with real product</span>
```

**Step 5:** Save the file.

**Step 6:** Push to GitHub to go live:
```bash
git add .
git commit -m "Added [product name] to [category] page"
git push origin main
```

**Step 7:** Wait 2 minutes → your product is live on the website!

---

**Category page URLs (live):**
- bopp.html → vinayakmehra69.github.io/deepika-enterprise/bopp.html
- hp.html → vinayakmehra69.github.io/deepika-enterprise/hp.html
- ld.html → vinayakmehra69.github.io/deepika-enterprise/ld.html
- superld.html → vinayakmehra69.github.io/deepika-enterprise/superld.html
- bp.html → vinayakmehra69.github.io/deepika-enterprise/bp.html
- packaging.html → vinayakmehra69.github.io/deepika-enterprise/packaging.html

---

## NEED HELP?

If you get stuck, contact your web developer or search:
- YouTube: "How to edit HTML file"
- VS Code shortcut: **Ctrl+F** = Find, **Ctrl+H** = Find & Replace
