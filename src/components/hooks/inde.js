const { useState, useEffect } = require("react")


export const useViewport = () => {
    const [width,setWidth] = useState(window.innerWidth || document.documentElement.offsetWidth)

    useEffect(() => {
        function handleWidth() {
            const currentWidth = window.innerWidth || document.documentElement.offsetWidt
            setWidth(currentWidth)
        }
        const handle = window.addEventListener("resize",handleWidth)

        return () => {
            window.removeEventListener("resize",handle)
        }

    },[width])

    return width
}