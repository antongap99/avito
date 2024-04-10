import style from './SearchMovies.module.scss'
import {ChangeEvent, useState} from "react";
import {useAppDispatch} from "app/providers/storeProvider/config/hooks/hooks";
import SearchIcon from 'shared/assets/icons/Search.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface SearchMoviesProps {
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
	    <div className={style.MoviesSearch}>
		    <input
			    type="text"
			    value={searchTerm}
			    onChange={handleSearchChange}
			    placeholder="Поиск по названию фильма"
			    className={style.MoviesSearchInput}
		    />
		    <Button
			    theme={ButtonTheme.OUTLINE}
			    type="submit"
			    style={{backgroundColor: "transparent"}}
		    >
			    <SearchIcon />
		    </Button>
	    </div>
    )
}

