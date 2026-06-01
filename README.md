# Anesthesia Translation eCard

A single-file web app of perioperative English↔Spanish phrases that **speak aloud** when tapped. Organized by phase of care (Greeting, Pre-op, Positioning, Induction, Emergence, Recovery/PACU, Reassurance, Labor & Delivery), with search, Usted/Tú toggle, favorites, dark mode, and a consent reference. Built to be installed on a phone home screen and shared with a department.

Everything (icon, manifest, phrases) is embedded in `index.html` — there are no other required files.

---

## Deploy it on GitHub Pages (free, no command line)

1. **Create a repo.** Go to github.com → **New repository**. Name it something like `anesthesia-ecard`. Set it to **Public**. Click **Create repository**.
2. **Add the file.** On the repo page click **Add file → Upload files**, drag in `index.html`, then **Commit changes**. (The file must be named exactly `index.html`.)
3. **Turn on Pages.** Go to **Settings → Pages**. Under *Build and deployment → Source*, choose **Deploy from a branch**. Set branch to **main** and folder to **/ (root)**. Click **Save**.
4. **Get the link.** Wait about a minute, refresh the Pages settings page, and copy the URL — it looks like:
   `https://YOUR-USERNAME.github.io/anesthesia-ecard/`

That URL is your app. Anyone can open it on any phone or computer.

---

## Install it on a phone (home-screen app)

**iPhone (Safari):** open the URL → tap the **Share** button → **Add to Home Screen** → **Add**. It launches full-screen with the EN/ES icon, like a native app.

**Android (Chrome):** open the URL → tap the **⋮** menu → **Install app** (or **Add to Home screen**).

---

## Share it with your department

Just send the Pages URL (text, email, QR code). Nothing to install or sign into — it works in any modern browser. Each person can add it to their own home screen.

---

## Updating it later

Edit/replace `index.html` in the repo (**Add file → Upload files** again, or edit in place) and commit. The live site updates within a minute or two.

- **Home-screen copies cache aggressively.** To force the newest version, open the URL in the browser (not the home-screen icon) and reload, or remove and re-add the home-screen shortcut.
- **Updating the app does NOT erase anyone's saved favorites** — favorites are stored per-device (see below), independent of the file.

---

## How personal settings work

Each user's **favorites, Usted/Tú choice, dark/light mode, and slow-speech toggle** are stored only in their own browser (localStorage). They are *not* shared and *not* part of the repo.

- Starring a phrase changes only that person's copy.
- A shared phrase (e.g., the neuraxial-positioning phrases that appear in both **Positioning** and **Labor & Delivery**, shown with two icons) only appears **once** in Favorites, even if starred from either place.
- Clearing browser data or switching browsers resets that person's favorites.

---

## Offline & audio notes

- After the first load, the app's layout and phrases work without a connection (everything is embedded).
- **Spoken audio uses the phone's built-in voices**, which need to be present on the device. Voice quality varies by phone; the **Slow** toggle helps with clarity.
- Each card also has a small **GT** button that opens the phrase in Google Translate as a fallback (this one needs a connection).

---

## Optional repo extras

Not required — the app is fully self-contained — but if you want a tidier repo:

- **`.nojekyll`** (empty file): tells GitHub Pages to skip Jekyll processing. Harmless to add; only matters if you later add files/folders starting with `_`.
- **`manifest.json`**: the app already has an inline manifest, so a separate one isn't needed.

---

## Disclaimer

This eCard is an informal communication aid created by physicians to help Spanish-speaking patients feel more comfortable. **It is not a substitute for professional medical interpreter services** and is not a legal or formal medical document. Any patient responses that warrant follow-up should be discussed with a qualified medical interpreter.
