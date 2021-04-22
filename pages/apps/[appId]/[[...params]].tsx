import { useAsync } from 'react-async';
import { useRouter } from 'next/router';

import { RemoteComponent } from '../../../components/RemoteComponent/RemoteComponent';

import { loadApp } from './_utils';
import type { IAppDefinition } from './_utils';

const App = () => {
    const router = useRouter();
    const { appId } = router.query;

    const { data, error, isPending } = useAsync<IAppDefinition | null>(loadApp, { appId, watch: appId });

    if (isPending) return 'Loading...'
    if (!appId) return 'Loading...'
    if (!data) return 'Loading...'
    if (error) return `Something went wrong: ${error.message}`
    if (data)
        return (
            <RemoteComponent url={data.url} />
        )
}

export default App;