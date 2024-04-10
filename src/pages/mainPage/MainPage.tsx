import React from 'react';
import {MoviesList} from "widgets/MoviesList/ui/MoviesList";

function MainPage() {
    return (
		<div style={{minHeight: '80vh'}}>
            <MoviesList/>
        </div>
    );
}

export default MainPage;
