use anchor_lang::prelude::*;
use anchor_lang::solana_program::program::invoke;
use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::{
        create_metadata_accounts_v3, 
        CreateMetadataAccountsV3,
    },
    token::{Mint, Token},
};
use mpl_token_metadata::{
    ID as TOKEN_METADATA_ID,
};

declare_id!("3dsGrXGNfrvXxHPfLUmHoKhuZiNVLwKqbUN4wU7JPdKw");

#[program]
pub mod fukuoka_smartcontract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
    
    pub fn mint_nft(ctx: Context<MintNFT>) -> Result<()> {
        msg!("Minting Fukuoka Nomad Welcome Pass NFT");
        
        // NFT Metadata
        let name = "Fukuoka Nomad Welcome Pass";
        let symbol = "FNWP";
        let uri = "https://raw.githubusercontent.com/your-repo/fukuoka-concept/main/assets/welcome_pass_nft.png";
        // Note: Replace with actual Arweave URI after uploading the welcome_pass_nft.png
        
        // Create metadata for the NFT
        let cpi_accounts = CreateMetadataAccountsV3 {
            metadata: ctx.accounts.metadata.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            mint_authority: ctx.accounts.payer.to_account_info(),
            update_authority: ctx.accounts.payer.to_account_info(),
            payer: ctx.accounts.payer.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
        };
        
        let cpi_program = ctx.accounts.token_metadata_program.to_account_info();
        
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        create_metadata_accounts_v3(
            cpi_ctx,
            name.to_string(),
            symbol.to_string(),
            uri.to_string(),
            Some(vec![]),
            0,
            true,
            Some(true),
            None,
            None,
            None,
        )?;
        
        msg!("NFT minting complete");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct MintNFT<'info> {
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    
    /// CHECK: This is not dangerous because we don't read or write from this account
    #[account(mut)]
    pub metadata: UncheckedAccount<'info>,
    
    #[account(mut)]
    pub payer: Signer<'info>,
    
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
    
    /// CHECK: This is not dangerous because we're using the known Metaplex token metadata program ID
    #[account(address = TOKEN_METADATA_ID)]
    pub token_metadata_program: UncheckedAccount<'info>,
}
