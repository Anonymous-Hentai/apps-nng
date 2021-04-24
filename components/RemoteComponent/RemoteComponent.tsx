import {
    createRemoteComponent,
    createRequires
} from "@paciolan/remote-component";

const resolve = {
    "react": require("react"),
    "next/link": require("next/link"),
    "@phala/nng-router": require("@phala/nng-router"),
}

const requires = createRequires(() => resolve);

export const RemoteComponent = createRemoteComponent({ requires });