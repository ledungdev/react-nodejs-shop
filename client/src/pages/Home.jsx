import React from 'react'
import Annoucement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Annoucement></Annoucement>
            <Navbar />
            <Slider></Slider>
            <Categories></Categories>
            <Products></Products>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
