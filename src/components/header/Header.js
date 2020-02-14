import React from 'react';
import s from './Header.module.css';

const Header = (props) => (
    <div className={s.headerWrapper}>
        <div className={s.lineOne}>
            <div>Arrow</div>
            <div className={s.fromTo}>
                <div>Moсква</div>
                <div>plane</div>
                <div>Тюмень</div>
            </div>
        </div>
        <div className={s.steps}>Шаг 1 из 5. Выберите рейс "туда"</div>
        <div className={s.month}>Апрель</div>
    </div>
)

export default Header;
