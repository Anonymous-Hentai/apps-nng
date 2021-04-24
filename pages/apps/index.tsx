import Link from 'next/link';
import { useAsync } from 'react-async';

import { loadAppList } from './[appId]/_utils';

const Apps = () => {
    const { data, error, isPending } = useAsync({ promiseFn: loadAppList });

    if (isPending) return 'Loading...'
    if (error) return `Something went wrong: ${error.message}`
    if (data)
        return (
            <ul>
                {
                    data.map((x) => {
                        return (
                            <li key={x.id}>
                                <Link href={`/apps/${x.id}`}>{x.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
}

export default Apps