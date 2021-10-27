import React from "react";
import './Sidebar.css'

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="outer-list">
                    <li><span>Морская рыба</span>
                        <ul className="inner-list">
                            <li><label><input type="checkbox" /> Акула</label></li>
                            <li><label><input type="checkbox" /> Окунь</label></li>
                            <li><label><input type="checkbox" /> Палтус</label></li>
                            <li><label><input type="checkbox" /> Треска</label></li>
                        </ul>
                    </li>
                    <li><span>Пресноводная рыба</span>
                        <ul className="inner-list">
                            <li><label><input type="checkbox" /> Белоглазка</label></li>
                            <li><label><input type="checkbox" /> Осётр</label></li>
                            <li><label><input type="checkbox" /> Речной угорь</label></li>
                            <li><label><input type="checkbox" /> Налим</label></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}