import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import RighAside from '../Component/HomeLayout/RighAside';
import NewsDeatilsCard from '../Component/NewsDeatilsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {


    const data = useLoaderData()
    const {id} = useParams();

    const [news, setNews] = useState({})

    useEffect(()=>{

        const newsDetails = data.find((singleNews)=> singleNews.id== id)
        setNews(newsDetails);



    },[data, id])

    console.log(data, id);
    
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>

            <section className='newsDetails font-bold mb-5 col-span-9'>
                <h2>News Details</h2>
                <NewsDeatilsCard news = {news}></NewsDeatilsCard>

            </section>

            <aside className='col-span-3'>
                <RighAside></RighAside>
            </aside>

            </main>
            
        </div>
    );
};

export default NewsDetails;