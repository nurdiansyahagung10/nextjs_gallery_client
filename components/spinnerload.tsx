import React from 'react'

const SpinnerLoad = () => {
    return (
        <>
            <div className="inline-block h-14 w-14 animate-spin z-50 rounded-full border-[3.7px] border-solid border-current border-e-black align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-neutral-200"
                role="status">
            </div>
        </>
    )
}

export default SpinnerLoad