# Vithurshajini Arumainayagam — Portfolio

A responsive dark-theme portfolio built with React and Vite.

## Included sections
- Home / introduction
- About
- Skills and technologies
- Professional experience
- Selected projects and contributions
- Education
- Contact

## Requirements
- Node.js 20.19+ (or a compatible current Node.js release)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Create a production build
```bash
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Personalize before publishing
1. Open `src/data.js`.
2. Confirm your preferred public name, role, location, email, skills, experience, and project descriptions.
3. Add your exact LinkedIn and GitHub profile URLs to `profile.linkedin` and `profile.github`.
4. Replace `src/assets/profile-photo.png` with a higher-resolution portrait if you have one.
5. Review project descriptions and remove anything you do not want to make public.

## Contact form behavior
The “Say hello” button opens the visitor's default email application with a prefilled message addressed to the email in `src/data.js`. No backend or form service is configured.

## Deploy
You can deploy this Vite project to Vercel, Netlify, or GitHub Pages. For Vercel:
1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Use `npm run build` as the build command and `dist` as the output directory.

## Notes
- Professional work is described only in broad, anonymized terms. Do not add employer/client names, internal project names, screenshots, source code, API endpoints, architecture, business workflows, customer data, or implementation details unless you have explicit permission to disclose them. Confirm that even generalized descriptions are permitted by your employment confidentiality obligations before publishing.
- No resume PDF or public source-code links were supplied, so the site does not invent download links or repositories.
