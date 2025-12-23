# ROTI LOGO MINT PAGE

---
---
---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)

  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~

- Package manager:

  - **Yarn** (lockfile: `yarn.lock`)
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~
  - ~~NPM (lockfile: `package-lock.json`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what's outdated:

   - `yarn up -i`
   - ~~pnpm outdated~~
   - ~~npm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `yarn up -R`
   - ~~pnpm update~~
   - ~~npm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `yarn npm audit --severity moderate`
   - ~~pnpm audit~~
   - ~~npm audit~~
   - `yarn build`
   - ~~pnpm build~~
   - ~~npm run build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- React major version
- Vite major version
- Package manager major version

---

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
   - `yarn up -i` (interactive list; select patch/minor only)
2. Security report (report only unless explicitly approved):
   - `yarn npm audit --severity moderate`
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
- Package manager major version: `yarn set version stable` and commit `.yarnrc.yml`, `.yarn/releases/*`, and `packageManager` in `package.json`.

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

## Evergreen Notes

- Yarn is **4.x**; use `yarn up -i` for update review and `yarn npm audit --severity moderate` for security checks.

