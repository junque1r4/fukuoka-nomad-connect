# Fukuoka Nomad Connect - MVP

## 🙏 Acknowledgements

A huge thank you to **Superteam Japan** for the opportunity and support throughout this project!

## 🌟 Overview

Fukuoka Nomad Connect is envisioned as a comprehensive, Solana-powered platform designed to seamlessly integrate digital nomads into Fukuoka's local fabric. This current version represents an MVP (Minimum Viable Product) showcasing core functionalities and the foundational concept. There's still a lot more planned to fully realize the platform's potential!

This project aims to enhance the digital nomad experience in Fukuoka, facilitate their economic contributions, and directly support regional revitalization efforts, aligning with Fukuoka's ambition as a leading tech hub and "Startup City."

## 🛠 What We've Built (MVP Focus)

This MVP focuses on the initial steps of the Fukuoka Nomad Connect vision, primarily the **Nomad Welcome Pass (NFT)** functionality:

* **Next.js Frontend**: A basic web application built with Next.js, React, and TypeScript.
* **Solana Wallet Integration**: Users can connect their Solana wallets (Phantom, Solflare, etc.) using the `@solana/wallet-adapter-react`.
* **NFT Minting Page (`/get-pass`)**: A dedicated page where connected users can mint their "Fukuoka Nomad Welcome Pass" NFT.
* **Anchor Smart Contract (Devnet)**: A simple Solana program built with Anchor to handle the minting of the Welcome Pass NFTs on the devnet.
    * The NFT has basic metadata:
        * Name: "Fukuoka Nomad Welcome Pass"
        * Symbol: "FNWP"
        * URI: (Currently pointing to a placeholder, intended for Arweave/IPFS)
* **Basic UI Components**: Including a header, footer, and cards to display information on the homepage and dashboard.
* **Informational Pages**: Mockups and descriptions for:
    * Dashboard
    * Local Value Network
    * Skills Hub
    * Community Fund
    * Why Solana

## 🚀 What We Envisioned & Plan to Do

The full Fukuoka Nomad Connect platform aims to create a virtuous cycle where digital nomads are not just visitors but active participants and contributors to Fukuoka's vibrant future and regional revitalization. Here's a breakdown of the intended core features:

1.  **Nomad Welcome Pass (NFT)**:
    * **Concept**: Upon registration, nomads receive a unique NFT pass on Solana.
    * **Benefits**: Tiered access (bronze, silver, gold) to discounts at local businesses, exclusive event invitations, and simplified access to local services.
    * **Solana Integration**: NFTs for unique passes, leveraging low minting/transaction costs.

2.  **Local Value Network (Solana Pay & "FUKU Coin")**:
    * **Concept**: Nomads use Solana Pay (with stablecoins like USDC) for payments at participating merchants. They earn "FUKU Coin" (a custom utility token) for local spending and community participation.
    * **Benefits**: Encourages local spending. FUKU Coins redeemable for exclusive experiences or discounts. A portion of FUKU Coin transactions could automatically fund a revitalization fund.
    * **Solana Integration**: Solana Pay for payments, SPL Tokens & Token Extensions (Token-2022) for FUKU Coin with features like loyalty mechanics or transaction fees for funding.

3.  **Skills & Opportunities Hub (Decentralized Identity & Smart Contracts)**:
    * **Concept**: Nomads create decentralized identity (DID) profiles (e.g., via Civic) showcasing verified skills. Local businesses post short-term gigs or mentorship needs.
    * **Benefits**: Allows Fukuoka to tap into nomad skillsets. Provides nomads with local engagement and income opportunities. Payments via Solana (USDC).
    * **Solana Integration**: DID solutions for credential verification, Smart Contracts for listings, agreements, and potential escrow.

4.  **Community Revitalization Fund (DAO & FUKU Coin Staking)**:
    * **Concept**: A portion of FUKU Coins or transaction fees go to a community-managed DAO. FUKU Coin holders (nomads and locals) stake tokens to govern and vote on funding small-scale regional revitalization projects (inspired by Kakugo Digital).
    * **Benefits**: Directly involves nomads in revitalization. Transparent, community-driven funding. Increases FUKU Coin utility.
    * **Solana Integration**: DAO frameworks (e.g., Squads, Realms) for fund management, SPL Tokens (FUKU Coin) for staking and voting.

## 💡 Why Solana?

* **Speed & Low Cost**: Essential for micropayments, rewards, NFT minting, and DAO voting.
* **Scalability**: Can handle a growing number of users and transactions.
* **Robust Ecosystem**: Availability of tools for NFTs, DeFi (Solana Pay), DAOs, and identity.
* **Developer Friendly**: Growing community and resources.

## 🛣️ The Road Ahead

This MVP is just the beginning. Future development would involve:

* Implementing the FUKU Coin tokenomics and Solana Pay integration.
* Building out the Skills & Opportunities Hub with DID and smart contract functionalities.
* Establishing the Community Revitalization Fund DAO.
* Expanding partnerships with local businesses and programs in Fukuoka.
* Refining the UI/UX based on user feedback.
* Migrating from Devnet to Mainnet for real-world application.

We are excited about the potential of Fukuoka Nomad Connect to make a real difference and look forward to continuing its development!
