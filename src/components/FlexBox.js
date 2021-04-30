import React, {useState} from 'react';
// Add state with useState in this component to adjust CSS settings

const FlexBox = () => {
    const row = "flex__container flex__container--row";
    const rowReverse = "flex__container flex__container--row-reverse";
    const column = "flex__container flex__container--column";
    const columnReverse = "flex__container flex__container--column-reverse";

    const [flexDirection, setFlexDirection] = useState(row);
    
    const changeDirection = (direction) => {
        setFlexDirection(direction);
    }

    return (
        <div className="container">
            <h1 className="container__heading">FlexBox</h1>
            <div className="container__content">
                <div className={flexDirection}>
                    <div className="flex__box flex__box--1">One</div>
                    <div className="flex__box flex__box--2">Two</div>
                    <div className="flex__box flex__box--3">Three</div>
                    <div className="flex__box flex__box--4">Four</div>
                </div>
            </div>
            <div className="flex__btn-container">
                <ul className="flex__btn-list">
                    <li><button 
                        className="flex__btn" 
                        onClick={() => changeDirection(row)}
                    >Row</button></li>
                    <li><button 
                        className="flex__btn" 
                        onClick={() => changeDirection(rowReverse)}
                    >Row Reverse</button></li>
                    <li><button 
                        className="flex__btn" 
                        onClick={() => changeDirection(column)}
                    >Column</button></li>
                    <li><button 
                        className="flex__btn" 
                        onClick={() => changeDirection(columnReverse)}
                    >Column Reverse</button></li>
                </ul>
            </div>
        </div>
    )
}

export default FlexBox;