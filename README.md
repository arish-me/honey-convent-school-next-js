# Honey Convent School Website

This is a Next.js-based website for Honey Convent School offering educational services from Nursery to 12th grade with Commerce and Science streams in senior secondary.

## Features

- Static informational website with key sections:
  - Homepage with school highlights
  - About Us with history, mission, and values
  - Academics section detailing curriculum across all grades
  - Admissions information
  - Fees Structure
  - Contact form with API endpoint

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/honey-convent-school-next-js.git
   cd honey-convent-school-next-js
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   │   └── contact/      # Contact form API endpoint
│   ├── about/            # About Us page
│   ├── academics/        # Academics page
│   ├── admissions/       # Admissions page
│   ├── contact/          # Contact page with form
│   ├── fees-structure/   # Fees Structure page
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout with header/footer
│   └── globals.css       # Global styles
└── components/           # Reusable React components (to be added as needed)
```

## Customizing Content

- Replace placeholder content with actual school information in each page
- Add the school logo, images, and other media files in the public directory
- Update the contact information and Google Maps embed in the Contact page
- Fill in actual fee structures in the Fees Structure page

## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

1. Create an account on Vercel if you don't have one
2. Install the Vercel CLI: `npm install -g vercel`
3. Run `vercel` from the project root directory and follow the prompts
4. For subsequent deployments, run `vercel --prod`

### Deploying to Netlify

You can also deploy to Netlify:

1. Create an account on Netlify if you don't have one
2. Create a new site from Git in the Netlify dashboard
3. Connect your repository and configure the following settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables as needed
5. Deploy your site

## Further Development

Ideas for future enhancements:

- Add a blog/news section for school updates
- Create a gallery page for school photos
- Add a student/parent portal with authentication
- Implement a more robust form handling system with email notifications
- Add multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.
