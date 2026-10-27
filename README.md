# Nexora Nova

Static marketing site for Nexora Nova. No build step is required.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## SmartPark concept film

The 10-second Gemini-generated film appears at `smartpark.html#film`, linked from the homepage's SmartPark section. The original clip is preserved in `assets/smartpark-concept.mp4`, with an extracted opening frame in `assets/smartpark-concept-poster.jpg`.

The player uses a subtle CSS colour treatment to match the plum and rose branding. Its thumbnail has a prominent, keyboard-accessible play button. Selecting it starts muted playback and reveals native playback, sound and fullscreen controls; native controls are also available without JavaScript. `preload="none"` avoids downloading the clip before playback. The caption identifies it as an illustrative AI-generated concept rather than prototype footage.

## Deploy

The project can be published directly on Cloudflare Pages, Netlify, GitHub Pages, or any static host. Use the repository root as the publish directory and leave the build command empty.
