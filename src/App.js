import {useEffect, useState} from 'react';
import {Header, Hero, Browse, Arrived, Client, AsideMenu, Footer} from './components';

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'x-api-key': process.env.REACT_APP_APIKEY
                }
            });

            const {nodes} = await response.json();
            setItems(nodes);
        };

        getProducts();
    }, []);

    return (
        <>
            <Header/>
            <Hero/>
            <Browse/>
            <Arrived items={items}/>
            <Client/>
            <AsideMenu/>
            <Footer/>
        </>
    );
}

export default App;
