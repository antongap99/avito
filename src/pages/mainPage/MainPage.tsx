import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "antd";
import {MoviesList} from "widgets/MoviesList/ui/MoviesList";

function MainPage() {
    return (
        <div>
            <MoviesList></MoviesList>
        </div>
    );
}

export default MainPage;
