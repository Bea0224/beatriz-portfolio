import { useRef, useEffect} from "react";

export const RevealOnScroll = ({children}) => {  
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                ref.current.classList.add("reveal");
            }
        

        })
    },[]);

    return(
        <div ref={ref} className="reveal">
            {children}
        </div>
    )

}