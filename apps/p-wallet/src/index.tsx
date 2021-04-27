import React from "react";
import Link from 'next/link';
import { useRouter } from "@phala/nng-router";

import Wallet from './Wallet';

const RemoteComponent = () => {
  const { matchCurrent } = useRouter([
    {
      rule: '/wallet/*params',
      render: () => (
        <Wallet />
      )
    },
    {
      rule: '/parachain/:id',
      render: (match: { id: string }) => (
        <p style={{ color: 'green' }}>
          Parachain id: {match.id}
        </p>
      )
    },
    {
      rule: '*',
      render: () => (
        <p style={{ color: 'orange' }}>
          No match
        </p>
      )
    }
  ], { base: '/apps/p-wallet' });

  const routerMatch = matchCurrent();

  return (
    <div>
      <p>Hello World from pWallet!</p>
      <ul>
        <li><Link href="/apps/p-wallet/wallet/1/user/abc">Wallet 1</Link></li>
        <li><Link href="/apps/p-wallet/wallet/2/user/def">Wallet 2</Link></li>
        <li><Link href="/apps/p-wallet/wallet/3/user/ghi">Wallet 3</Link></li>
        <li><Link href="/apps/p-wallet/parachain/1">Parachain 1</Link></li>
        <li><Link href="/apps/p-wallet/parachain/2">Parachain 2</Link></li>
        <li><Link href="/apps/p-wallet/parachain/3">Parachain 3</Link></li>
        <li><Link href="/apps/p-wallet/aaabbbccc">Void</Link></li>
      </ul>
      {routerMatch?.rendered}
    </div>
  );
};

export default RemoteComponent;