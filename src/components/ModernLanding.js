import React from 'react';

const ModernLanding = () => {
    //Create the layout for basic modern landing 
    return (
        <div className="container">
            <h1 container__heading>Modern Landing</h1>
            <div className="container__content">
                <div className="modern__container">
                    <header className="modern__header">
                            <h3>Header</h3>
                    </header>
                    <div className="modern__content">
                        <div className="modern__sidebar-container">
                            <div className="modern__sidebar">Sidebar</div>
                        </div>
                        <div className="modern__main-container">
                            <div className="modern__paragraphs">
                                <div className="modern__paragraphs--1">Paragraph 1</div>
                                <div className="modern__paragraphs--2">Paragraph 2</div>
                            </div>
                            <div className="modern__main-content-container">
                                <div className="modern__main-content">Main Content</div>
                            </div>
                        </div>
                    </div>
                    
                    <footer className="modern__footer">
                        Footer
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ModernLanding;