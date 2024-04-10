import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
            <Routes>
                {
                    Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
                }
            </Routes>
        </div>
    </Suspense>
);
