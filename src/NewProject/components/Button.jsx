import React, { useEffect, useState } from 'react'

function Button({ icon, title = 'Button 1' }) {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setIsActive(true)
    }, [])
    return (
        <div className={`${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 flex gap-2 items-center justify-center px-4 py-2 rounded-sm`}>
            <div className='btn'>{title}</div>
            {icon && <i>{icon}</i>}
        </div>
    )
}

export default Button