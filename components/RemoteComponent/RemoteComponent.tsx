import {
    createRemoteComponent,
    createRequires
} from "@paciolan/remote-component";

const resolve = {
    react: require("react")
}

const requires = createRequires(() => resolve);

export const RemoteComponent = createRemoteComponent({ requires });