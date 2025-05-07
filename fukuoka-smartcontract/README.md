# Fukuoka Nomad Welcome Pass - Smart Contract

This repository contains the Solana Anchor program for minting the "Fukuoka Nomad Welcome Pass" NFTs.

## Prerequisites

- [Solana CLI](https://docs.solanalabs.com/cli/install)
- [Anchor CLI](https://www.anchor-lang.com/docs/installation)
- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js and npm](https://nodejs.org/)

## Build and Deploy Instructions

### 1. Configure your Solana CLI (if not already done)

```bash
solana config set --url devnet
solana config get
```

Ensure you have a funded wallet for transactions:
```bash
solana balance
```

### 2. Build the Anchor Program

```bash
anchor build
```

### 3. Update Program ID (if necessary)

If this is the first time deploying this program:

1. After building, find your program ID:
```bash
solana address -k target/deploy/fukuoka_smartcontract-keypair.json
```

2. Update the program ID in `lib.rs` and `Anchor.toml` if it differs.

### 4. Deploy to Devnet

```bash
anchor deploy --program-name fukuoka_smartcontract --provider.cluster devnet
```

### 5. Copy the IDL to the Frontend

```bash
cp target/idl/fukuoka_smartcontract.json ../fukuoka-nomad-connect/src/idl/fukuoka_nomad_program.json
```

## NFT Metadata

The program creates NFTs with the following metadata:
- Name: "Fukuoka Nomad Welcome Pass"
- Symbol: "FNWP"
- URI: Points to the NFT image stored in Arweave (placeholder URI in the code)

## Testing

Run the test suite:
```bash
anchor test
```

## Notes for Frontend Integration

After deploying, make sure to:
1. Update the program ID in your frontend config if needed
2. Ensure your frontend has access to the correct IDL file
3. Set up the correct NFT image URI in production