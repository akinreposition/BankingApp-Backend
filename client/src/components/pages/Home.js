import React from 'react'
import Cards from '../layouts/Cards/Cards';
import CardFilter from '../layouts/Cards/CardFilter';
import CardForm from '../layouts/Cards/CardForm';

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <CardFilter />
                <Cards />
            </div>
            <div>
                <CardForm />
            </div>
        </div>
    )
}
export default Home;