import * as React from 'react';
import Route from 'route-parser';

export interface IRouterDefinition {
    id: string;
    rule: string;
}

export interface IRouterConfig {
    base?: string;
}

const pathJoin = (parts: string[], separator = '/') => {
    var replace = new RegExp(separator + '{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
}

export const useRouter = (x: IRouterDefinition[], config: IRouterConfig) => {
    const notInBrowser = typeof globalThis.Window === 'undefined';

    const routerMatchers = React.useMemo(() => {
        return x.map((x) => {
            const rule = config.base ? pathJoin([config.base, x.rule]) : x.rule;

            return new Route(rule)
        })
    }, []);

    const match = React.useCallback((url: string) => {
        let routerIndex = -1;
        let match: any = null;

        for (let i = 0; i < routerMatchers.length; i++) {
            const routerMatcher = routerMatchers[i];
            const routerMatch = routerMatcher.match(url);

            if (routerMatch) {
                routerIndex = i;
                match = routerMatch;
                break;
            }
        }

        if (routerIndex === -1) return null

        return { ...x[routerIndex], match: match! }
    }, []);

    const matchCurrent = React.useCallback(() => {
        if (notInBrowser) return null;

        const url = window.location.pathname;
        return match(url)
    }, []);

    return {
        match, matchCurrent
    }
}