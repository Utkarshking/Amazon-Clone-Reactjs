import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image"src="https://scontent.fknu1-4.fna.fbcdn.net/v/t1.6435-9/106296478_3022288617871063_446211344800829998_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=uEDlFi7QIZ0AX-40w4A&_nc_ht=scontent.fknu1-4.fna&oh=15d9981bc56f5593edd5cc18abe4dc20&oe=61749D31"
               alt="amazon prime image"
               />
               <div className="home__row">
                   {/* products  */}
                   {/* first product */}
                   <Product title="lean startup" price={470}
                   image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg
                   " ratings={5} />

                   <Product  title="OnePlus Buds Z" price={2,999}
                    image="https://m.media-amazon.com/images/I/51vwQzwM+ZL._SL1500_.jpg"
                    ratings={4} />
                   {/* products */}
                   {/* <Product /> */}
                   
               </div>
               
               <div className="home__row">
                   {/* products */}
                   <Product title="Samsung Galaxy M12 (Black,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
                    image="https://m.media-amazon.com/images/I/714QWDxXgNL._SL1500_.jpg"
                    ratings={5} price={10999}/>
                   <Product title="SanDisk Cruzer Blade 32GB USB Flash Drive"
                   image="https://m.media-amazon.com/images/I/61DjwgS4cbL._SL1500_.jpg"
                   rating={4} price={379}/>
                   <Product title="Samsung 24 inch (60.4 cm) IPS, 3 Side Bezel Less Flat LED Monitor (Dark Blue Gray) 75 Hz - LS24R356FHWXXL"
                   image="https://m.media-amazon.com/images/I/91TS0uHjMbL._SL1500_.jpg"
                   ratings={4} price={13499.00}/>
                   {/* products  */}
                   {/* products */}
               </div>
               <div classname="home__row">
                   {/* products */}
                   <Product title="SG 2020 Special Edition Kashmir Willow Cricket Bat"
                   image="https://m.media-amazon.com/images/I/51hypJO6rnL._SL1280_.jpg"
                   ratings={5} price={1,985} />
               </div>

           </div>
        </div>
    )
}

export default Home
