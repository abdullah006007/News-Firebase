import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/HomeLayout/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(id, data);

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {

        if (id == '0') {
            setCategoryNews(data)
            return
        } else if (id == '1') {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterNews);

        }
        else {
            const filterNews = data.filter(news => news.category_id == id)
            setCategoryNews(filterNews);
        }


 
    }, [data, id])




    return (

        <div>
            <h2 className='font-bold'>Total News <span className='text-secondary'> {categoryNews.length} </span> Found</h2>
            {
                categoryNews.map(news => <NewsCard key={news.id} news ={news}></NewsCard>)
                
            }


            <div className='grid grid-cols-1 gap-5'>


            </div>

        </div>
    );
};

export default CategoryNews;