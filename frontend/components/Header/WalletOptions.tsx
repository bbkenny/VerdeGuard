"use client";

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WalletOptions() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [showOptions, setShowOptions] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleConnect = (connector: any) => {
    connect({ connector });
    setShowOptions(false);
  };

  const handleDisconnect = () => {
    disconnect();
    setShowOptions(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.wallet-options')) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);

  // Don't render anything until mounted on client
  if (!isMounted) {
    return (
      <div className="relative wallet-options">
        <button
          className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-[#144489] text-white rounded-lg hover:bg-[#1a5ba8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#144489] focus:ring-offset-2"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs sm:text-sm font-medium">Loading...</span>
        </button>
      </div>
    );
  }

  if (isConnected) {
    return (
      <div className="relative wallet-options">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-[#144489] text-white rounded-lg hover:bg-[#1a5ba8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#144489] focus:ring-offset-2"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs sm:text-sm font-medium">
            {address?.slice(0, 4)}...{address?.slice(-3)}
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-white transition-transform duration-200 ${showOptions ? 'rotate-180' : ''}`}
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {showOptions && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-2">
              <Link
                href="/user-profile"
                onClick={() => setShowOptions(false)}
                className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>My Profile</span>
              </Link>
              <button
                onClick={handleDisconnect}
                className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Disconnect</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative wallet-options">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-[#144489] text-white rounded-lg hover:bg-[#1a5ba8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#144489] focus:ring-offset-2"
      >
        <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs sm:text-sm font-medium hidden sm:inline">Connect Wallet</span>
        <span className="text-xs sm:hidden">Connect</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`text-white transition-transform duration-200 ${showOptions ? 'rotate-180' : ''}`}
        >
          <path 
            d="M6 9L12 15L18 9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {showOptions && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900">Connect Wallet</h4>
          </div>
          <div className="p-2">
            {/* Kaikas Recommendation */}
            <div className="mb-3 p-3 bg-gradient-to-r from-[#144489]/10 to-[#EFAC20]/10 border border-[#144489]/20 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-[#144489] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">K</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#144489]">Recommended for Kaia</p>
                  <p className="text-xs text-gray-600">Official Klaytn wallet</p>
                </div>
              </div>
              <a
                href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-[#144489] text-white text-sm font-medium rounded-lg hover:bg-[#1a5ba8] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Install Kaikas
              </a>
            </div>
            
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                onClick={() => handleConnect(connector)}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#144489] focus:ring-offset-2"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {connector.name.toLowerCase().includes('walletconnect') ? (
                    <img
                      src="https://images.seeklogo.com/logo-png/43/1/walletconnect-logo-png_seeklogo-430923.png"
                      alt="WalletConnect logo"
                      className="w-8 h-8 rounded-lg"
                    />
                  ) : connector.icon ? (
                    <img
                      src={connector.icon}
                      alt={`${connector.name} logo`}
                      className="w-8 h-8 rounded-lg"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">
                        {connector.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {connector.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}