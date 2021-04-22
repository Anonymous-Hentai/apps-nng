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
                            <li key={x.id}><a href={`/apps/${x.id}`}>{x.name}</a></li>
                        )
                    })
                }
            </ul>
        )
}

export default Apps