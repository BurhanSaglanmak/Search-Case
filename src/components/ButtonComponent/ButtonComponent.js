import React from 'react'

function ButtonComponent() {
  return (
    <div className='settings__buttonComp'>
    <h1>Button Component States</h1>
    <div className='settings__buttonComp__container'>
        <div className='settings__buttonComp__container__context'>
            <h3>
                Default
            </h3>
            <div className='settings__buttonComp__container__context__button'>
                <button>Button Text</button>
            </div>
        </div>
        <div className='settings__buttonComp__container__context'>
            <h3>
                Hover
            </h3>
            <div className='settings__buttonComp__container__context__buttonHover'>
                <button>Button Text</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default ButtonComponent