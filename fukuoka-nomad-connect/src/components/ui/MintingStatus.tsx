'use client';

import React from 'react';

interface MintingStatusProps {
  isLoading: boolean;
  success: boolean;
  error: string;
  txId: string;
  mintAddress: string;
}

export const MintingStatus: React.FC<MintingStatusProps> = ({
  isLoading,
  success,
  error,
  txId,
  mintAddress,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-4">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00A9A5]"></div>
        <p className="mt-2 text-gray-600">Minting your Welcome Pass...</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            Minted Successfully!
          </span>
        </div>
        
        <div className="text-sm text-gray-600">
          <p className="mb-1">
            <span className="font-medium">Transaction ID:</span>{' '}
            <a
              href={`https://explorer.solana.com/tx/${txId}?cluster=devnet`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              {txId}
            </a>
          </p>
          <p>
            <span className="font-medium">NFT Address:</span>{' '}
            <a
              href={`https://explorer.solana.com/address/${mintAddress}?cluster=devnet`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              {mintAddress}
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
        {error}
      </div>
    );
  }

  return null;
};

export default MintingStatus;