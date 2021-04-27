import React from "react";
import { useRouter } from "@phala/nng-router";

const Wallet = () => {
  const { matchCurrent } = useRouter([
    {
      id: 'main',
      rule: '/:walletId/user/:userId',
      render: (match: { walletId: string; userId: string }) => (
        <>
          <p style={{ color: 'red' }}>
            Wallet id: {match.walletId}
          </p>
          <p style={{ color: 'red' }}>
            User id: {match.userId}
          </p>
        </>
      )
    },
  ], { base: '/apps/p-wallet/wallet' });

  const routerMatch = matchCurrent();

  return (
    <div>
      {routerMatch?.rendered}
    </div>
  );
};

export default Wallet;