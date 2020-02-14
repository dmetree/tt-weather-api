import React from 'react';
import s from './Day.module.css';
import moment from 'moment';

const Day = (props) => (
    <div className={s.hourWrapper} onClick={props.clicked}>
        <h4>{moment(props.dt_txt).format('DD')}</h4>
        <h4>{moment(props.dt_txt).format('ddd')}</h4>
    </div>
)

export default Day;
