import { Connection, Keypair, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from '@solana/web3.js';
import { Program, AnchorProvider, Idl } from '@project-serum/anchor';
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress } from '@solana/spl-token';
import idl from '../idl/fukuoka_nomad_program.json';

// The program ID from the IDL
const programId = new PublicKey(idl.metadata.address);

// Token Metadata Program ID
const TOKEN_METADATA_PROGRAM_ID = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

export const getProvider = (connection: Connection, wallet: any) => {
  // Create a provider with the wallet and connection
  const provider = new AnchorProvider(
    connection,
    wallet,
    { commitment: 'confirmed' }
  );
  return provider;
};

export const getProgram = (connection: Connection, wallet: any) => {
  const provider = getProvider(connection, wallet);
  // Create a program instance using the IDL and program ID
  return new Program(idl as Idl, programId, provider);
};

export const mintNomadWelcomePass = async (connection: Connection, wallet: any) => {
  if (!wallet.publicKey) throw new Error('Wallet not connected');
  
  try {
    const program = getProgram(connection, wallet);
    
    // Generate a new keypair for the NFT mint
    const mintKeypair = Keypair.generate();
    
    // Derive the metadata account address
    const [metadataAddress] = PublicKey.findProgramAddressSync(
      [
        Buffer.from('metadata'),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mintKeypair.publicKey.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    );
    
    // Derive the token account address for receiving the NFT
    const tokenAddress = await getAssociatedTokenAddress(
      mintKeypair.publicKey,
      wallet.publicKey
    );
    
    // Call the mintNft instruction
    const tx = await program.methods
      .mintNft()
      .accounts({
        mint: mintKeypair.publicKey,
        metadata: metadataAddress,
        payer: wallet.publicKey,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      })
      .signers([mintKeypair])
      .rpc();
    
    return {
      success: true,
      txId: tx,
      mintAddress: mintKeypair.publicKey.toString(),
    };
  } catch (error) {
    console.error("Error minting NFT:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};