import React from 'react';

const ModernLanding = () => {
    //Create the layout for basic modern landing 
    return (
        <div className="container">
            <h1 container__heading>Modern Landing</h1>
            <div className="container__content">
                <div className="modern__container">
                    <div className="modern__heading">Header</div>
                    <div className="modern__sidebar">Sidebar</div>
                    <div className="modern__paragraphs">
                        <div className="modern_paragraphs--1">Paragraph 1</div>
                        <div className="modern_paragraphs--2">Paragraph 2</div>
                    </div>
                    <div className="modern__main-content">Main Content</div>
                    <div className="modern__footer">Footer</div>
                </div>
            </div>
        </div>
    )
}

export default ModernLanding;