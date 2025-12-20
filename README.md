# ROTI LOGO MINT PAGE

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is a **Live Artefact App**: the user-facing UX is intentionally frozen
(“MINT CLOSED”, no wallet prompts), while the codebase remains buildable and
production-safe on Vercel.

### Runtime

- Node: **24.x** (local + Vercel)
- Package manager: **Yarn** (lockfile: `yarn.lock`, repo-pinned to `yarn@4.12.0`)
- Deploy target: **Vercel**

### Build System

- Vite toolchain (React)
- Output directory: **dist/**
- Env var: `VITE_ARTEFACT_MODE=true`

### Monthly Safe Updates (recommended)

Monthly is **monitor + verify**, not modernization.

1. Check what’s outdated (report only):
   - `yarn outdated`
2. Security report (report only unless explicitly approved):
   - `yarn audit --level moderate`
3. Verify build reproducibility:
   - `yarn build` (or `yarn build:artefact` if kept)
4. Verify production sanity:
   - Confirm “MINT CLOSED”
   - Confirm no wallet prompts / connect flows
   - Confirm no critical console errors

### Major Updates (quarterly / scheduled)

Major upgrades must be done **one at a time**, with a dedicated PR and full testing.
Artefact UX must remain unchanged.

Examples:

- React major version upgrade
- Web3 stack upgrade (e.g., web3 v1 → v4)
- Toolchain changes (CRACO/CRA migration)
- Node major policy change
- Pinned dependency note: `react-signature-canvas` is held at 1.0.7 (latest is alpha).

### Artefact UX Policy (Frozen)

- Minting must remain **disabled**
- Wallet connect must remain **disabled**
- Any functional change requires a versioned successor (new tag/release)

---

---

> Shush, I'm playing, learning, and working. 🤫 🤫 🤫 🤫

- 😄 &nbsp; I'm [Prof. NOTA](https://deeplinks.straight-line.org/), per/pers.
- 🤙 &nbsp; I’m currently playing.
- 🌱 &nbsp; I’m currently learning.
- 🔭 &nbsp; I’m currently working.
- 👯 &nbsp; I’m not looking to collaborate.
- 🤔 &nbsp; I’m not looking for help.
- 💬 &nbsp; Don't ask me about that.
- 📫 &nbsp; Don't try to reach me.
- ⚡ &nbsp; Fun fact: [The King's NFTs project](https://iqraa.straight-line.org/the-kings-nfts/)

> Here are some ideas to get you started:

Logo Pabrik Roti is the Logo of The Breads Factory, an NFT project by PabrikRoti.IDN in Polygon (Matic) blockchain which is also termed as The Breads Factory: Logo 10k.

> Regards
>
> [Prof. NOTA](https://deeplinks.straight-line.org/)
>
> [init.straight-line.org](https://init.straight-line.org/)

<!--
**myreceiptt/myreceiptt** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on Prof. NOTA's GitHub profile.
-->
