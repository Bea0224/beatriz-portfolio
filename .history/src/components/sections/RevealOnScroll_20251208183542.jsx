import { useRef } from "react";

export const RevealOnScroll = ({children}) => {  
    
    const ref = useRef(null);

    use
    return(
        <div ref={ref} className="reveal">
            {children}
        </div>
    )

}