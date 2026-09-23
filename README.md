# portfolio

```bash
bun install   # install deps
bun dev       # dev server with HMR
bun run build # production build to dist/
bun start     # production server
```

## CV

`public/cv.pdf` is gitignored and **not included in this repo**. After cloning, the "Download CV" button and the terminal `cv` command will 404 until you add your own PDF at `public/cv.pdf`. Files in `public/` are copied to the site root on build and served at `/` in dev (restart the dev server after adding it).
