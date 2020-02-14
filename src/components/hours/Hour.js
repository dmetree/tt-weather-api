import React from 'react';
import s from './Hour.module.css';
import moment from 'moment';

const Hour = (props) => (
    <div className={s.hourWrapper}>
        <h3>{moment(props.dt_txt).format('DD')}</h3>
        <p>At {moment(props.dt_txt).format('LT')} the temperature would be {Math.floor(((props.temp) - 273.15))}C</p>
        
    </div>
)

export default Hour;
