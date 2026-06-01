# Spanish Anesthesia Phrases

A web app of perioperative English↔Spanish phrases that **speak aloud** when tapped. Organized by phase of care (Greeting, Pre-op, Positioning, Induction, Emergence, Recovery/PACU, Reassurance, Labor & Delivery, Peds), with usage-ranked Common, search (with synonyms/acronyms), Usted/Tú toggle, favorites, dark mode, adjustable voice/speed, a patient-view (tap to enlarge), an optional pronunciation guide, and a consent reference. Built to be installed on a phone home screen and shared with a department.

**Two files** make up the app: `index.html` (everything — icon, manifest, phrases — is embedded) and `sw.js` (a small service worker that enables reliable offline use). Upload both to the same folder.

---

## Deploy it on GitHub Pages (free, no command line)

1. **Create a repo.** Go to github.com → **New repository**. Name it something like `anesthesia-ecard`. Set it to **Public**. Click **Create repository**.
2. **Add the files.** On the repo page click **Add file → Upload files**, drag in **both** `index.html` and `sw.js`, then **Commit changes**. (Names must be exactly `index.html` and `sw.js`, in the same folder.)
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

Edit/replace `index.html` in the repo (**Add file → Upload files** again, or edit in place) and commit.

- **Updates apply automatically when the user has signal.** The service worker fetches the latest page from the network when online (and falls back to the saved copy only when offline), so people get your edits on the next open — no stale version.
- If you ever change `sw.js` itself, bump the `CACHE` value at the top (e.g. `v1` → `v2`) so phones refresh their saved copy.
- **Updating the app does NOT erase anyone's saved favorites** — favorites, usage history, and settings are stored per-device (see below), independent of the files.

---

## How personal settings work

Each user's **favorites, usage history (which drives Common), Usted/Tú choice, dark/light mode, voice, speed, patient-view, and pronunciation settings** are stored only in their own browser (localStorage). They are *not* shared and *not* part of the repo.

- Starring a phrase changes only that person's copy.
- A shared phrase (e.g., the neuraxial-positioning phrases that appear in both **Positioning** and **Labor & Delivery**, shown with two icons) only appears **once** in Favorites, even if starred from either place.
- Clearing browser data or switching browsers resets that person's favorites.

---

## Offline & audio notes

- The `sw.js` service worker saves a copy of the app on first visit, so it **opens reliably with no signal** (OR, L&D, basement call rooms). When online it quietly fetches the latest version.
- **Spoken audio uses the phone's built-in voices**, which need to be present on the device. Voice quality varies by phone — use **⚙ Settings** to pick a specific Spanish voice and adjust **Speed**.
- Each card also has a small **GT** button that opens the phrase in Google Translate as a fallback (this one needs a connection).

---

## Settings (⚙ in the header)

- **Voice** — choose among the Spanish voices installed on the device (or Auto).
- **Speed** — slows the spoken phrase for clarity with patients.
- **Patient view** — when on, tapping a phrase opens a large full-screen card (English + Spanish) you can turn around and show the patient, with a Play button.
- **Pronunciation guide** — shows an approximate English respelling under each Spanish phrase (e.g. *ah-PRYEH-teh MEE MAH-noh*) for providers who'd rather say it themselves. It's a rough aid, not exact phonetics.

---

## Optional repo extras

Not required, but if you want a tidier repo:

- **`.nojekyll`** (empty file): tells GitHub Pages to skip Jekyll processing. Harmless to add; only matters if you later add files/folders starting with `_`.
- **`manifest.json`**: the app already has an inline manifest, so a separate one isn't needed.

---

## Disclaimer

This eCard is an informal communication aid created by physicians to help Spanish-speaking patients feel more comfortable. **It is not a substitute for professional medical interpreter services** and is not a legal or formal medical document. Any patient responses that warrant follow-up should be discussed with a qualified medical interpreter.
