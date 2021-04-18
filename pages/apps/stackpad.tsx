import { RemoteComponent } from '../../components/RemoteComponent/RemoteComponent';

const REMOTE_URL = '/apps/stackpad.js/stackpad.js'

export default () => {
    return <RemoteComponent url={REMOTE_URL} />
}