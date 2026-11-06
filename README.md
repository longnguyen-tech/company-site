# KnightCore Technologies LLC — company website

Marketing website for **KnightCore Technologies LLC**, an IT consulting firm.
Built with [Next.js](https://nextjs.org) (App Router), React and Tailwind CSS v4.

The layout follows a classic single-page consultancy structure: hero, problem
statement, brand section, services, call-to-action banners, purpose, what to
expect, process, firm values, contact form and footer.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

| Command         | What it does                      |
| --------------- | --------------------------------- |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Editing content

All copy lives in one file: [`src/content/site.ts`](src/content/site.ts).
Change headlines, service descriptions, process steps, values and contact
details there; no component changes are needed.

Placeholders to replace before going live (search for `TODO` in that file):

- `site.email` — currently `hello@knightcoretech.com`
- `site.phone` — currently a 555 number
- `site.location`

The contact form opens the visitor's email client with a pre-filled message
(no backend required). To send through a service instead, swap the handler in
[`src/components/ContactForm.tsx`](src/components/ContactForm.tsx) for a POST to
your form provider or an API route.

## Project layout

```
src/
  app/            layout, global styles, home page, favicon (icon.svg)
  components/     one component per page section + Header/Footer/Logo
  content/        site.ts — all text and image paths
public/images/    stock photography used on the page
```

## Images

Photos are from [Unsplash](https://unsplash.com) under the Unsplash License
(free for commercial use, no attribution required). Replace any file in
`public/images/` with your own photo of the same name, or point the `image`
fields in `src/content/site.ts` to new files.

The logo mark (shield + knight) is an inline SVG in
[`src/components/Logo.tsx`](src/components/Logo.tsx) and `src/app/icon.svg`.

## Deploying

The site is fully static and deploys to Vercel, Netlify or any Node host with
no extra configuration. On Vercel: import the GitHub repo and deploy.
