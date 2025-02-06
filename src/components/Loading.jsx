import React, { useEffect, useState } from 'react'

function Loading({loading}) {

    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                setOpacity(0);
            }, 6000);
            return () => clearTimeout(timer)
        }
    },[loading])
  return (
        <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full transition-opacity ease-in-out duration-500 bg-white flex-row gap-2 ${opacity === 0 ? "pointer-events-none" : ""}`} style={{opacity}}>
        <div className="w-4 h-4 rounded-full bg-orange-500 animate-bounce"></div>
        <div
            className="w-4 h-4 rounded-full bg-orange-500 animate-bounce [animation-delay:-.3s]"
        ></div>
        <div
            className="w-4 h-4 rounded-full bg-orange-500 animate-bounce [animation-delay:-.5s]"
        ></div>
        </div>
  )
}

export default Loading