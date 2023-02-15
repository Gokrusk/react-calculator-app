import React from 'react';

export const ClearButton = ({children,manageClick}) =>(
    <div 
        className='clear-button'
        onClick={manageClick}
    >
      {children}
    </div>
)