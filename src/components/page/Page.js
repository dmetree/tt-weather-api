import React, { Component } from 'react';
import s from './Page.module.css';
import Day from '../days/Day';
import Hour from './../hours/Hour';
import Header from './../header/Header';
import axios from 'axios';



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class Page extends Component {

    state = {
        hours: [],
    }


    componentDidMount() {
        const HTTPS = 'http://';
        const ROOT = 'api.openweathermap.org/data/2.5/forecast';
        let CITY = 'Karachi';
        const KEY = 'appid=cb13de91ed7a9b9ba1b8a21b68aaa5e5';
        const APIHours = HTTPS + ROOT + '?q=' + CITY + '&' + KEY;


        axios.get(APIHours)
            .then(response => {
                this.setState({ hours: response.data.list })
                // console.log(response.data.list);
            });
    }



    render() {
       
        const newHours = this.state.hours.filter(function (value, index, Arr) {
            return index % 8 === 0;
        });

        const days = newHours.map(hours => {
            return <Day 
            key={hours.dt} 
            dt_txt={hours.dt_txt}
            />
        });



        const hours = this.state.hours.map(hours => {
            return <Hour key={hours.dt} dt_txt={hours.dt_txt} temp={hours.main.temp} />
        });

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        let settings2 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            vertical: true,
            verticalSwiping: true
        }


        return (
            <div className={s.pageWrapper}>
                <Header />
                <section className={s.daySection}>
                    <Slider {...settings}>
                        {days}
                    </Slider>


                </section>
                <hr />
                <div>Прямые рейсы</div>
                <hr />
                <section className={s.hourSection}>
                    <Slider {...settings2}>
                        {hours}
                    </Slider>
                </section>

            </div>
        );
    }
}
