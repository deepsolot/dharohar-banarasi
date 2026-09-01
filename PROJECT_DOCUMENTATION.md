# 🪡 Dharohar Banarasi — Project Documentation
**Last Updated:** September 2, 2026  
**Status:** Live & Production Ready 🟢

---

## 🌐 Live URLs
| Service | URL |
|---|---|
| **Primary Domain** | https://dharoharbanarasi.com |
| **Secondary Domain** | https://dharoharbanarasi.in |
| **Netlify URL** | https://guileless-faloodeh-078e73.netlify.app |
| **GitHub Repo** | https://github.com/deepsolot/dharohar-banarasi |
| **Local Project** | `/Users/deep/dharohar-banarasi` |

---

## 🔑 Credentials & Tokens
| Service | Details |
|---|---|
| **GitHub Username** | `deepsolot` |
| **GitHub Token** | `[GITHUB-TOKEN-SAVED-LOCALLY]` |
| **Netlify Token** | `[NETLIFY-TOKEN-SAVED-LOCALLY]` |
| **Netlify Site ID** | `98faf4d0-597e-454b-ac4e-155b5df9e27f` |
| **Netlify Site Name** | `dharoharvaranasicom` |

---

## 📞 Business Contact Details
| Field | Value |
|---|---|
| **Phone** | +91 95656 30398 |
| **Email** | Choudharysareeindustries@gmail.com |
| **WhatsApp** | +91 95656 30398 |
| **Address** | Choudhary Saree Industries, Varanasi, UP 221001 |
| **Hours** | Mon–Sat: 11:30AM – 8PM IST |

---

## 🛠️ DNS Configuration (Hostinger)
| Record | Name | Value |
|---|---|---|
| `A` | `@` | `75.2.60.5` |
| `CNAME` | `www` | `guileless-faloodeh-078e73.netlify.app` |
| **SSL** | Let's Encrypt | Auto-renews Nov 2026 |

---

## 🎨 Design Settings
| Setting | Value |
|---|---|
| **Primary Color** | Maroon `#6b1212` |
| **Gold Accent** | `#c9a84c` |
| **Background** | Cream `#fdf6ee` |
| **Header Font** | Cormorant Garamond |
| **Body Font** | Outfit |
| **Logo File** | `images/logo.png` (RGBA transparent, 1600x1600) |
| **Header Logo Size** | 80px height |
| **Footer Logo Size** | 90px height (white inverted) |
| **Navbar Height** | 90px |

---

## 🗂️ Project Files
```
/Users/deep/dharohar-banarasi/
├── index.html          ← Main website HTML
├── styles.css          ← All styling
├── app.js              ← E-commerce logic
├── images/
│   ├── logo.png        ← Brand logo (Dharohar Banarasi - Legacy of C.S.I)
│   ├── hero_saree.jpg
│   ├── katan_silk_saree.jpg
│   ├── organza_saree.jpg
│   ├── georgette_saree.jpg
│   ├── cotton_saree.jpg
│   ├── banarasi_suit.jpg
│   ├── bridal_dupatta.jpg
│   └── varanasi_weaving.jpg
└── PROJECT_DOCUMENTATION.md
```

---

## 🚀 Auto-Deploy Command (Run anytime to push live)
```bash
cd /Users/deep/dharohar-banarasi
git add .
git commit -m "Update description"
git push origin main

# Then deploy to Netlify:
cd /Users/deep
rm -f dharohar-deploy.zip
zip -r dharohar-deploy.zip dharohar-banarasi/ -x "*.git*"
curl -X POST "https://api.netlify.com/api/v1/sites/98faf4d0-597e-454b-ac4e-155b5df9e27f/deploys" \
  -H "Authorization: Bearer [NETLIFY-TOKEN-SAVED-LOCALLY]" \
  -H "Content-Type: application/zip" \
  --data-binary @dharohar-deploy.zip
```

---

## 📦 Website Features
- 8 Products (Katan Silk, Organza, Georgette, Cotton, Suits, Dupattas)
- Cart with localStorage persistence
- Full Checkout modal (COD, UPI, Card)
- Category filters, price slider, search, sort
- Product detail pages
- Heritage/About section
- Testimonials, Newsletter, Instagram Lookbook
- Fully mobile responsive
- Auto-deploy via Netlify API

---

## 📅 Change History
| Date | Change |
|---|---|
| Aug 26 | Website built & deployed |
| Aug 27 | Domain connected (dharoharbanarasi.in + .com) |
| Aug 27 | Contact details updated (phone, email, WhatsApp) |
| Aug 27 | Pushed to GitHub (deepsolot/dharohar-banarasi) |
| Sep 1 | Email updated → Choudharysareeindustries@gmail.com |
| Sep 1 | Timing updated → 11:30AM – 8PM IST |
| Sep 1 | Netlify auto-deploy set up via API token |
| Sep 1 | Brand logo updated (Dharohar Banarasi - Legacy of C.S.I) |
| Sep 2 | Logo resized (80px header, 90px footer) |
