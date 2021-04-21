import React from 'react';

const FlexBox = () => {
    return (
        <div className="container">
            <h1 container__heading>FlexBox</h1>
            <div className="container__content">
                <div className="flex__container">
                    <div className="flex__box flex__box--1">One</div>
                    <div className="flex__box flex__box--2">Two</div>
                    <div className="flex__box flex__box--3">Three</div>
                    <div className="flex__box flex__box--4">Four</div>
                </div>
            </div>
        </div>
    )
}

export default FlexBox;