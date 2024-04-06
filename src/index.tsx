import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/storeProvider/ui/StoreProvider';
import App from './app/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename="/">
        <ErrorBoundary>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
