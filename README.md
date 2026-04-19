# Deepika Enterprise — Website

A modern, mobile-friendly website for Deepika Enterprise (Est. 1993), supplier of plastic raw materials across India.

---

## 📁 Project Structure

```
deepika-enterprise/
├── index.html              ← Main website file
├── css/
│   └── style.css           ← All styling
├── js/
│   └── script.js           ← Interactivity
├── images/
│   └── logo.avif           ← Ganpati ji logo
└── README.md               ← This file
```

---

## 🚀 How to Open in VS Code

1. **Open the folder in VS Code:**
   - Open VS Code
   - File → Open Folder → Select `deepika-enterprise`

2. **Preview the site:**
   - Install the **"Live Server"** extension (by Ritwick Dey) from the Extensions tab
   - Right-click on `index.html` → Click **"Open with Live Server"**
   - Your default browser will open showing the site
   - Any changes you save will auto-refresh in the browser

---

## ✏️ How to Customize

### Change Phone Number / WhatsApp
Open `index.html`, find the line:
```html
<a href="#contact" class="whatsapp-float" ...>
```
Replace `#contact` with:
```
https://wa.me/919312242208
```
This will open WhatsApp directly when clicked.

### Add Your Own Product Photos
1. Drop your photos into the `images/` folder (e.g. `bopp.jpg`, `ld.jpg`)
2. In `index.html`, find each product card, e.g.:
   ```html
   <div class="product-img" style="background-image: url('https://...jpg');"></div>
   ```
3. Replace the URL with `images/yourphoto.jpg`

### Edit Product Prices
In `index.html`, find lines like:
```html
<span class="price price-fixed">₹ 145/kg onwards</span>
```
Change to your actual price, or use:
```html
<span class="price price-inquiry">Call for Price</span>
```

### Update Contact Info
In `index.html`, search for "Ram Bazaar" — update address, hours, and delivery zone there.

---

## 🎨 Sections Included

1. **Top Navbar** — Sticky, with mobile hamburger menu
2. **Hero** — Big headline, stats, CTAs
3. **Products** — 6 product cards with photos, prices, inquire buttons
4. **Product Guide** — Dedicated explanation of BOPP, HP, LD, Super LD, BP
5. **About Us** — Story, values, 30-year badge
6. **Gallery** — Masonry-style product photos
7. **Contact** — Info + inquiry form
8. **Footer** — Links, tagline
9. **Floating WhatsApp button** — Always visible bottom-right

---

## 📱 Mobile Responsive

- Full hamburger navigation menu
- Stacked cards on small screens
- Touch-friendly buttons
- Optimized images
- Works on all modern browsers (Chrome, Safari, Firefox, Edge)

---

## 🎨 Design System

- **Colors:** Green (primary) + Gold (accent) + White
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Style:** Modern, trustworthy, premium feel

---

## 🔧 Next Steps (Optional)

1. **Replace placeholder product photos** with your own
2. **Connect the contact form** to your email (using Formspree, EmailJS, or a backend)
3. **Add Google Maps** embed in the contact section
4. **Deploy online** — free options: Netlify, Vercel, GitHub Pages
5. **Buy a domain** like `deepikaenterprise.com` or `.in`

---

Made with ❤️ for Deepika Enterprise · Since 1993
