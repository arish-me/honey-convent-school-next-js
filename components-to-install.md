# Shadcn UI Components to Install

Run the following commands to install all the Shadcn UI components we're using:

```bash
# Create utilities directory and file
mkdir -p src/lib
touch src/lib/utils.ts

# Core components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add label
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add table
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add accordion

# Dependencies for the components
npm install lucide-react class-variance-authority clsx tailwind-merge
```

After running these commands, make sure to add the utility functions to `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Also, make sure your `globals.css` includes the Shadcn UI variables. 