import React from "react";
import { useRouter } from "@phala/nng-router";

const RemoteComponent = () => {
  const { matchCurrent } = useRouter([
    { id: 'wallet', rule: '/wallet/:id' },
    { id: 'parachain', rule: '/parachain/:id' },
  ], { base: '/apps/p-wallet' });

  const routerMatch = matchCurrent();

  return <div>
    <p>Hello World from pWallet!</p>
    {
      routerMatch?.id === 'wallet' && (
        <p style={{color: 'red'}}>
          Wallet id: {routerMatch.match.id}
        </p>
      )
    }
    {
      routerMatch?.id === 'parachain' && (
        <p style={{color: 'green'}}>
          Parachain id: {routerMatch.match.id}
        </p>
      )
    }
  </div>;
};

export default RemoteComponent;