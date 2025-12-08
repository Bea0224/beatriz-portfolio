import { useRef, useEffect} from "react";

export const RevealOnScroll = ({children}) => {  
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(()

    }, []);

    return(
        <div ref={ref} className="reveal">
            {children}
        </div>
    )

}