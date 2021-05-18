import React from 'react';

const Grid = () => {
    return (
        <div className="container">
            <h1 className="container__heading">Modern Landing with Grid</h1>
            <div className="container__content">
                <div className="grid__container">
                    <div className="grid__header">Header</div>
                    <div className="grid__sidebar">Sidebar</div>
                    <div className="grid__main-container">
                        Main container
                        <div className="grid__par-one">Paragraph One</div>
                        <div className="grid__par-two">Paragraph Two</div>
                        <div className="grid__main-content">Main Content</div>
                    </div>
                    <div className="grid__footer">Footer</div>
                </div>
            </div>
        </div>
    )
}

export default Grid;