export interface IAppDefinition {
    id: string;
    name: string;
    url: string;
}

export const loadAppList = async ({ }, { signal }) => {
    const res = await fetch(`/api/apps/`, { signal })
    if (!res.ok) throw new Error(res.statusText)
    return await res.json() as IAppDefinition[]
}

export const loadApp = async ({ appId }, { signal }) => {
    if (!appId) return null;

    const appListRes = await fetch(`/api/apps/`, { signal })
    if (!appListRes.ok) throw new Error(appListRes.statusText)
    const appList = await appListRes.json() as IAppDefinition[]

    const app = appList.find((x) => x.id === appId);
    if (!app) throw new Error('App not found')

    const url = app.url;
    const appScriptRes = await fetch(url, { signal })
    if (!appScriptRes.ok) throw new Error(appListRes.statusText)

    return app
}