import { RemoteComponent } from '../../components/RemoteComponent/RemoteComponent';

const REMOTE_URL = '/apps/darkpool.js/darkpool.js'

export default () => {
    return <RemoteComponent url={REMOTE_URL} />
}