# Static Assets for the Website

This project uses the `public/` folder for static assets that can be referenced directly from the app.

## Directories

- `public/images/candidati/`
  - Use this folder for candidate photos and other campaign-related images.
  - Recommended file extensions:
    - `.jpg`
    - `.jpeg`
    - `.png`
    - `.webp`

- `public/cv/`
  - Use this folder for downloadable candidate CVs and campaign documents.
  - Recommended file extensions:
    - `.pdf`

## Suggested files

### Candidate photos

- `public/images/candidati/gabriele-fanceschini.jpg`
- `public/images/candidati/denise-manente.jpg`
- `public/images/candidati/team-1.jpg`
- `public/images/candidati/team-2.jpg`

### CV documents

- `public/cv/CV-Fanceschini.pdf`
- `public/cv/CV-Manente.pdf`
- `public/cv/Dichiarazioni.pdf`
- `public/cv/Incarichi.pdf`

## Usage in code

Use direct public paths in React components, for example:

```jsx
<img src="/images/candidati/gabriele-fanceschini.jpg" alt="Gabriele Fanceschini" />
<a href="/cv/CV-Fanceschini.pdf" download>Scarica CV</a>
```

## Notes

- Files placed in `public/` are served as static assets by Vite.
- Keep filenames short, lowercase, and use hyphens for readability.
- Avoid spaces in filenames.
