# Fukuoka Nomad Connect Developer Documentation

This document provides technical information for developers working on or contributing to the Fukuoka Nomad Connect platform.

## Project Structure

```
fukuoka-nomad-connect/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── api/       # API routes
│   │   ├── features/  # Feature pages
│   │   ├── globals.css # Global styles
│   │   └── layout.tsx # Root layout
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   └── ui/        # UI components
│   ├── context/       # React context providers
│   ├── idl/           # Solana program interfaces
│   └── utils/         # Utility functions
├── tailwind.config.js # Tailwind configuration
└── next.config.ts     # Next.js configuration
```

## Tech Stack

- **Frontend**: Next.js 15.x with React 19
- **Styling**: Tailwind CSS 4.x
- **State Management**: React Context API
- **Blockchain Integration**: Solana Web3.js and Wallet Adapter
- **Build Tools**: TypeScript, SWC

## Getting Started for Development

### Prerequisites

- Node.js 20.x or later
- NPM 10.x or later
- Solana CLI tools (for blockchain integration)
- A code editor with TypeScript support (VS Code recommended)

### Development Environment Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/fukuoka-nomad-connect.git
   cd fukuoka-nomad-connect
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The application will be available at `http://localhost:3000`

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
# Solana Configuration
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_PROGRAM_ID=your_program_id_here

# API Configuration (if applicable)
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Feature Flags
NEXT_PUBLIC_ENABLE_COMMUNITY_FUND=true
```

## Design System

We use a consistent design system implemented through Tailwind CSS:

### Colors

- Primary: `#00A9A5` (Teal Blue)
- Primary Hover: `#008b88`
- Solana Purple: `#9945FF`
- Solana Green: `#14F195`
- Secondary: `#FFC107` (Amber)
- Gray scale: from `#F8F9FA` (lightest) to `#212529` (darkest)

### Typography

- Font Family: Geist Sans (primary), Geist Mono (code)
- Headings: Dark Gray (`#343A40`), Font-weight: Semi-Bold
- Body Text: Medium Gray (`#6C757D`), Font-weight: Regular

### Components

Common UI components are styled in the `globals.css` file and can be applied using the following classes:

- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- Cards: `.card`
- Containers: `.container-custom`
- Icons: `.feature-icon`

## Blockchain Integration

### Wallet Connection

We use the Solana Wallet Adapter to handle wallet connections:

```typescript
import { useWallet } from '@solana/wallet-adapter-react';

function MyComponent() {
  const { publicKey, signTransaction } = useWallet();

  // Check if user is connected
  if (!publicKey) {
    return <div>Please connect your wallet</div>;
  }

  // Rest of component
}
```

### Program Interactions

Solana program interfaces are defined in the `src/idl` directory. Use the Anchor client to interact with these programs:

```typescript
import { Program } from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import { IDL } from '../idl/your_program';

// Initialize the program
const programId = new PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID);
const connection = new Connection(network);
const program = new Program(IDL, programId, { connection, wallet: anchorWallet });

// Call a program method
await program.methods.yourMethod(params).accounts({
  user: publicKey,
  // other accounts
}).rpc();
```

## API Routes

API routes are defined in `src/app/api` and follow Next.js 15+ conventions:

```typescript
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Handle GET request
  return NextResponse.json({ message: 'Success' });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Process data
  return NextResponse.json({ success: true });
}
```

## Testing

### Unit Tests

We use Jest for unit testing:

```
npm test
```

### End-to-End Tests

We use Playwright for E2E testing:

```
npm run test:e2e
```

## Deployment

Build the application for production:

```
npm run build
```

The application can be deployed using the `deploy.sh` script, which supports various deployment options:

```
./deploy.sh
```

## Contributing

Please refer to our [Contributing Guide](../CONTRIBUTING.md) for details on how to contribute to this project.

## Documentation

- Update this document when adding new features or changing existing functionality
- Ensure all components and functions have appropriate JSDoc comments
- For API endpoints, document request/response formats in the route files

## Troubleshooting

### Common Issues

1. **Wallet Connection Issues**
   - Check if you're on the correct Solana network (devnet vs mainnet)
   - Ensure browser extensions are up to date
   - Clear browser cache if experiencing persistent issues

2. **Build Failures**
   - Make sure all dependencies are installed (`npm install`)
   - Check for TypeScript errors with `npm run lint`
   - Ensure environment variables are properly set

3. **Solana Transaction Errors**
   - Verify the user has sufficient SOL for transaction fees
   - Check program logs for detailed error messages
   - Ensure account permissions are correctly set

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework Documentation](https://project-serum.github.io/anchor/getting-started/introduction.html)
