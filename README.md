# Petra.bet Affiliate Static Site

## Deployment via FTP

1. Create a zip archive of the **site/** directory:
   ```bash
   zip -r petra-bet-affiliate.zip site/
   ```
2. Upload **petra-bet-affiliate.zip** to your server's root directory via FTP.
3. Extract the archive on the server:
   ```bash
   unzip petra-bet-affiliate.zip
   ```
4. All pages are ready under the `/site/` folder. No additional setup or software is required.

## File Structure
- `site/*.html` — All pages (homepage, competitors, bonuses, slots, FAQ, about)
- `site/assets/css/` — CSS files
- `site/assets/js/` — JavaScript and configuration files
- `site/assets/img/` — Images and placeholder icons

## Features
- Mobile friendly, fast dark theme
- RTL (Arabic) and LTR (English) support
- Language preference saved in localStorage
- Consistent navigation and footer across pages
- JSON configuration for easy data management
- No frameworks or build steps needed

## Images
Place all logo and screenshot files in the `/assets/img/` folder (currently placeholders).

## Notes
Replace `CODE` and placeholder file names with your own affiliate codes and images.
All pages can be uploaded via FTP and will work immediately.

---

**Contact:** [affiliate@petra.bet](mailto:affiliate@petra.bet)
