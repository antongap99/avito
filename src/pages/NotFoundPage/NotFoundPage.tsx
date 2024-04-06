import cn from 'classnames';
import style from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps) {
    return (
        <div className={cn(style.NotFoundPage)}>
            Страница не найдена
        </div>
    );
}
