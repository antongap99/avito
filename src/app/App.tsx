import './styles/index.scss';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';

const App = () => (
    <div className={cn('app')}>
        <div className="content-page">
            <AppRouter />
        </div>
    </div>
);

export default App;
