import React from 'react'

function InputComponent() {
    return (
        <div className='settings__InputComp'>
            <h1>Input Component States</h1>
            <div className='settings__InputComp__container'>
                <div className='settings__InputComp__container__context'>
                    <h3>
                        Default
                    </h3>
                    <div className='settings__InputComp__container__context__inputDefault'>
                        <p>Label</p>
                        <input placeholder='Placeholder' />
                    </div>
                </div>
                <div className='settings__InputComp__container__context'>
                    <h3>
                        Hover
                    </h3>
                    <div className='settings__InputComp__container__context__inputHover'>
                        <p>Label</p>
                        <input placeholder='Placeholder' />
                    </div>
                </div>
                <div className='settings__InputComp__container__context'>
                    <h3>
                        Error State
                    </h3>
                    <div className='settings__InputComp__container__context__inputError'>
                        <p>Label</p>
                        <input type='text' placeholder='Placeholder' />
                        <p>Error text</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputComponent