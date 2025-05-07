'use client';

import { useState, useEffect, useCallback } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import ConnectWalletButton from '../../components/ui/ConnectWalletButton';
import MintingStatus from '../../components/ui/MintingStatus';
import { mintNomadWelcomePass } from '../../utils/anchorUtils';
import Image from 'next/image';

export default function GetNomadWelcomePass() {
  const { connection } = useConnection();
  const wallet = useWallet();
  
  const [isLoading, setIsLoading] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);
  const [mintError, setMintError] = useState('');
  const [txId, setTxId] = useState('');
  const [mintAddress, setMintAddress] = useState('');
  
  // Function to handle NFT minting
  const handleMintNFT = useCallback(async () => {
    if (!wallet.connected || !wallet.publicKey) {
      setMintError('Please connect your wallet first.');
      return;
    }
    
    setIsLoading(true);
    setMintError('');
    try {
      const result = await mintNomadWelcomePass(connection, wallet);
      
      if (result.success) {
        setMintSuccess(true);
        setTxId(result.txId);
        setMintAddress(result.mintAddress);
      } else {
        setMintError(result.error || 'Failed to mint NFT. Please try again.');
      }
    } catch (error) {
      console.error('Mint error:', error);
      setMintError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [connection, wallet]);
  
  // Reset states when wallet gets disconnected
  useEffect(() => {
    if (!wallet.connected) {
      setMintSuccess(false);
      setTxId('');
      setMintAddress('');
    }
  }, [wallet.connected]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24">
      <div className="z-10 w-full max-w-4xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Fukuoka Nomad Welcome Pass
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mx-auto max-w-2xl">
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-xs mb-6">
              <Image 
                src="/assets/welcome_pass_nft.png" 
                alt="Fukuoka Nomad Welcome Pass"
                width={300}
                height={300}
                className="object-contain rounded-md"
                priority
              />
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Digital Nomad Welcome Pass</h2>
              <p className="text-gray-600 mb-4">
                Connect your wallet and mint your exclusive Fukuoka Nomad Welcome Pass NFT to access special perks and experiences in Fukuoka.
              </p>
              
              {!wallet.connected ? (
                <div className="flex justify-center mt-6">
                  <ConnectWalletButton className="py-3 px-8 text-lg">
                    Connect Wallet to Mint
                  </ConnectWalletButton>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-500 mb-4">
                    Wallet connected: {wallet.publicKey?.toString().slice(0, 4)}...{wallet.publicKey?.toString().slice(-4)}
                  </p>
                  
                  {!mintSuccess && (
                    <button
                      onClick={handleMintNFT}
                      disabled={isLoading}
                      className={`py-3 px-8 text-lg bg-[#00A9A5] hover:bg-[#008b88] text-white rounded-md font-medium transition-all ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isLoading ? 'Minting...' : 'Mint Welcome Pass NFT'}
                    </button>
                  )}
                  
                  <MintingStatus
                    isLoading={isLoading}
                    success={mintSuccess}
                    error={mintError}
                    txId={txId}
                    mintAddress={mintAddress}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}