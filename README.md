# BNBU App Preview

Public static preview surface for **Build N Boss Up**.

- **Private application source:** `SolSabaliEnt/bnbu-app`
- **Public deploy-only repository:** `SolSabaliEnt/bnbu-app-preview`
- **Marketing site (out of scope):** `SolSabaliEnt/BNBU`

This repository intentionally starts with a neutral placeholder. No existing application code or product architecture is published during the reset.

## Deployment

GitHub Pages publishes the `site/` folder using `.github/workflows/pages.yml`.

1. In this repo, select **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Configure **Custom domain** as `www.buildnbossup.com` in the same settings.
3. At your DNS provider set `www` CNAME to `solsabalient.github.io`. If you want the apex domain redirected here, set its A records to GitHub Pages IPv4 addresses.
4. Enable **Enforce HTTPS** when available.

## Future private-to-public publishing

After the architecture reset, use a fine-grained token restricted to **only** `SolSabaliEnt/bnbu-app-preview`, with **Contents: Read and write**. Store the token in **private** `bnbu-app` → **Settings → Secrets and variables → Actions** as `PREVIEW_REPO_TOKEN`.

Never commit tokens, `.env` files, sensitive data, service-role keys, database credentials, or private source code here. Any variables embedded by Vite into the built frontend are publicly viewable.

Do not enable automatic private-app publishing until the product direction is approved.
