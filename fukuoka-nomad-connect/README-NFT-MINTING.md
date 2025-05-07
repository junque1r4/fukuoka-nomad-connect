# Fukuoka Nomad Welcome Pass - NFT Minting Implementation

This document outlines the implementation of the NFT minting functionality for the Fukuoka Nomad Connect application.

## Overview

The NFT minting functionality allows users to mint a "Fukuoka Nomad Welcome Pass" NFT on the Solana blockchain (devnet). This NFT serves as a digital pass for nomads visiting Fukuoka, providing them with access to special perks and experiences.

## Technical Implementation

### Frontend Components

1. **WalletContextProvider** (`src/context/WalletContextProvider.tsx`)
   - Provides wallet connection functionality to the entire application
   - Configured for Solana devnet
   - Supports multiple wallets: Phantom, Solflare, Coinbase, and Torus

2. **ConnectWalletButton** (`src/components/ui/ConnectWalletButton.tsx`)
   - Reusable button component for wallet connections
   - Styled according to the application's design system
   - Uses the `@solana/wallet-adapter-react-ui` package

3. **MintingStatus** (`src/components/ui/MintingStatus.tsx`)
   - Displays the current status of NFT minting (loading, success, error)
   - Shows transaction details and links to the Solana Explorer

4. **Get Pass Page** (`src/app/get-pass/page.tsx`)
   - Main page for NFT minting functionality
   - Displays NFT image and information
   - Handles the minting process

### Backend Integration

The frontend integrates with the Solana blockchain through:

1. **Anchor Program Utilities** (`src/utils/anchorUtils.ts`)
   - Connects to the deployed Anchor program
   - Handles NFT minting transactions
   - Provides helper functions for wallet interaction

2. **IDL Integration** (`src/idl/fukuoka_nomad_program.json`)
   - Contains the Interface Definition Language (IDL) file for the Anchor program
   - Defines the available instructions and account structures

## User Flow

1. User navigates to `/get-pass`
2. User connects their Solana wallet (Phantom, Solflare, etc.)
3. User clicks "Mint Welcome Pass NFT"
4. Wallet prompts for transaction approval
5. On successful minting:
   - Success message is displayed
   - Transaction ID and NFT address are shown with links to Solana Explorer
   - NFT is visible in the user's wallet

## Dependencies

- `@solana/wallet-adapter-react`: Core React hooks for Solana wallet
- `@solana/wallet-adapter-react-ui`: UI components for wallet interaction
- `@solana/wallet-adapter-base`: Base classes and utilities
- `@solana/wallet-adapter-wallets`: Wallet adapter implementations
- `@solana/web3.js`: Solana JavaScript API
- `@project-serum/anchor`: Framework for Solana program interaction

## Configuration

The application is configured to connect to Solana's devnet by default. To change this:

1. Open `src/context/WalletContextProvider.tsx`
2. Change the `network` constant from `WalletAdapterNetwork.Devnet` to your desired network

## Asset Management

The NFT image is stored in the public directory at `/public/assets/welcome_pass_nft.png`. In a production environment, this should be replaced with a permanent storage solution like Arweave or IPFS.

## Future Improvements

1. Add NFT ownership checking to provide different UI for users who already own the pass
2. Implement token-gated access to exclusive features based on NFT ownership
3. Add more detailed metadata and attributes to the NFT
4. Create a gallery view for users to see their collected NFTs