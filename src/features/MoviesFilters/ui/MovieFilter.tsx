import cn from "classnames";
import style from './MovieFilter.module.scss'
import {ChangeEvent, useState} from "react";

interface  MovieFilterProps<T> {
    className?: string;
	value: T
	id: string,
	updateStoreValue: (value: T) =>void,
	clearStoreValue: () => void,
	label: string
}

export const MovieFilter = <T extends string | number | null,>(props: MovieFilterProps<T>) =>{
	const {
		label,
		value,
		id,
		updateStoreValue,
		clearStoreValue,
	} = props;

	const [filterValue, setFilterValue] = useState(value)
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterValue(e.target.value as T)
	}

	const onBlurHandler = () => {
		updateStoreValue(filterValue)
	}

	const onClickBtnHandler = () => {
		clearStoreValue()
	}

    return  (
	    <div className={style.filterGroup}>
		    <label htmlFor={id} className={style.filterLabel}>
			    {label}
		    </label>
		    <input
			    id={id}
			    type={typeof value === 'number' ? 'number': 'text'}
			    value={value || ''}
			    onBlur={onBlurHandler}
			    onChange={onChangeHandler}
			    className={style.filterInput}
		    />
		    <button onClick={onClickBtnHandler} className={style.clearButton}>
			    Очистить
		    </button>
	    </div>

    )
}

