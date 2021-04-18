import { RemoteComponent } from '../../components/RemoteComponent/RemoteComponent';

const REMOTE_URL = '/apps/p-wallet.js/p-wallet.js'

export default () => {
    return <RemoteComponent url={REMOTE_URL} />
}