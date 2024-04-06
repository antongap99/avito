import cn from 'classnames';
import style from './PageError.module.scss';

interface PageErrorProps {
    className?: string;

}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(style.PageError)}>
            <p>Произошла не предвиденнная ошибка</p>
            <button type="button" onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
};
