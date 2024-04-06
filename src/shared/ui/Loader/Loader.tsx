import style from './Loader.module.scss';

interface LoaderProps {
    className?: string;

}

export const Loader = ({ className }: LoaderProps) => (
    <span className={style.loader} />
);
