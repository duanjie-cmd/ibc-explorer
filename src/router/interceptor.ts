import { Router } from 'vue-router';
import { useNProgress } from '@/utils/useNProgressTools';
import { useIbcStatisticsChains } from '@/store/index';
import { ROUTE_INFO } from '@/constants';

export function createInterceptor(router: Router) {
    const nprogress = useNProgress();
    nprogress.init();

    const routeNameMap = new Map();
    Object.values(ROUTE_INFO).forEach((item) => {
        routeNameMap.set(item.name, item);
    });
    router.beforeEach((to, from, next) => {
        nprogress.start();
        const ibcStatisticsChainsStore = useIbcStatisticsChains();
        ibcStatisticsChainsStore && (ibcStatisticsChainsStore.isShow500 = false);
        if (routeNameMap.has(to.name)) {
            const routeInfo = routeNameMap.get(to.name);
            if (routeInfo) {
                document.title = routeInfo.title;
                document
                    .querySelector('meta[name="description"]')
                    ?.setAttribute('content', routeInfo.description);
            }
        }

        next();
    });

    router.afterEach(() => {
        nprogress.done();
    });
}
