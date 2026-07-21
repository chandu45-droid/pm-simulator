# PM Simulator

A daily product-manager decision-making simulation game with a share loop.

**Live demo:** https://chandu45-droid.github.io/pm-simulator/

---

## What it is

Aspiring and early product managers have no low-stakes way to practice real PM decision tradeoffs. PM Simulator is a daily decision-making simulation: each day presents a fresh product/business scenario where every choice trades off against another (users vs. revenue, speed vs. quality, scope vs. deadline), and the outcome carries forward into the next beat.

It's built around a daily-beat design — one scenario a day, quick to play, easy to share — so playing and comparing outcomes with others becomes part of the loop, not an afterthought.

Built solo, AI-assisted, with Claude Code.

## Tech Stack

| Layer | Technology |
|---|---|
| **Platform** | HTML5 / installable PWA (manifest + service worker, offline-capable) |
| **Architecture** | Vanilla JS game loop (`index.html`, `s01.js`) — no framework, no build step |
| **Design** | Daily-beat structure with a built-in share loop |
| **Hosting** | GitHub Pages |

## Design Principles

- **Strategy over reflexes** — every decision is a tradeoff, not a timed reaction
- **Daily, not endless** — one beat a day keeps stakes low and return visits high
- **Shareable by default** — outcomes are built to compare and share, not just consume
- **No default styling** — a distinct visual system, not a generic template look
