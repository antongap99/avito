import cn from 'classnames';
import { Loader } from 'shared/ui/Loader/Loader';
import style from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cn(style.PageLoader)}>
        <Loader />
    </div>
);
