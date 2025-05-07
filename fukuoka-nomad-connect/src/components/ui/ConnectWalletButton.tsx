'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FC } from 'react';
import styles from './ConnectWalletButton.module.css';

interface ConnectWalletButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const ConnectWalletButton: FC<ConnectWalletButtonProps> = ({ className = '', children }) => {
  const { wallet } = useWallet();

  return (
    <WalletMultiButton
      className={`${styles.walletButton} ${className}`}
    >
      {children || (wallet ? 'Wallet Connected' : 'Connect Wallet')}
    </WalletMultiButton>
  );
};

export default ConnectWalletButton;