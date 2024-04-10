import cn from "classnames";
import style from './SearchMovies.module.scss'
import {ChangeEvent, useState} from "react";
import {moviesFiltersActions} from "features/MoviesFilters";
import {useAppDispatch} from "app/providers/storeProvider/config/hooks/hooks";
import SearchIcon from 'shared/assets/icons/Search.svg?react'

interface  SearchMoviesProps {
    className?: string;

}

export const SearchMovies = ({className}: SearchMoviesProps) =>{
	const dispatch = useAppDispatch()
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		// dispatch(moviesFiltersActions.setSearchName(searchTerm));
	};




	return  (
	    <div style={{ display: 'flex', alignItems: 'center' }}>
		    <input
			    type="text"
			    value={searchTerm}
			    onChange={handleSearchChange}
			    placeholder="Поиск по названию фильма"
			    style={{ padding: '8px', marginRight: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
		    />
		    <button type="submit" style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' }}>
			    <SearchIcon style={{ width: '20px', height: '20px' }} />
		    </button>
	    </div>
    )
}

