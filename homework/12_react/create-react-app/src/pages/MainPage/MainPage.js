import React from "react";
import './MainPage.css';
import { FishTypeBlock } from '../..components/FishTypeBlock';
import { FishNameBlock } from '../../components/FishNameBlock';

export class MainPage extends React.Component {
    render() {
        const fish = ['Палтус','Сёмга','Сом','Мойва','Сельдь','Тунец'];
        return (
            <div className="content">
                <h2 className="first-header">Рыбы на любой вкус</h2>
                <p className="content__text">Мы продаём рыбов, а не только показываем!</p>
                <div className="type__container">
                    <FishTypeBlock link="Замороженные рыбы" text="Мы заморозили рыбов для вас" />
                    <FishTypeBlock link="Живые рыбы" text="На кухню или на разведение" />
                </div>
                <h2 className="second-header">Популярные</h2>
                <div className="fish__container">
                    {fish.map((item, index) => <FishNameBlock name={item} key={index} />)}
                </div>
            </div>
        );
    }
}