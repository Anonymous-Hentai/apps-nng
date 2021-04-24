import React from "react";
import Link from 'next/link';
import { useRouter } from "@phala/nng-router";

const RemoteComponent = () => {
  const { matchCurrent } = useRouter([
    {
      id: 'wallet',
      rule: '/wallet/:id',
      render: (match: { id: string }) => (
        <p style={{ color: 'red' }}>
          Wallet id: {match.id}
        </p>
      )
    },
    {
      id: 'parachain',
      rule: '/parachain/:id',
      render: (match: { id: string }) => (
        <p style={{ color: 'green' }}>
          Parachain id: {match.id}
        </p>
      )
    },
  ], { base: '/apps/p-wallet' });

  const routerMatch = matchCurrent();

  return <div>
    <p>Hello World from pWallet!</p>
    <ul>
      <li><Link href="/apps/p-wallet/wallet/1">Wallet 1</Link></li>
      <li><Link href="/apps/p-wallet/wallet/2">Wallet 2</Link></li>
      <li><Link href="/apps/p-wallet/wallet/3">Wallet 3</Link></li>
      <li><Link href="/apps/p-wallet/parachain/1">Parachain 1</Link></li>
      <li><Link href="/apps/p-wallet/parachain/2">Parachain 2</Link></li>
      <li><Link href="/apps/p-wallet/parachain/3">Parachain 3</Link></li>
    </ul>
    {routerMatch?.rendered}
  </div>;
};

export default RemoteComponent;