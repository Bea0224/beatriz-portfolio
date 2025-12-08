import { useRef, useEffect} from "react";

export const RevealOnScroll = ({children}) => {  
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                observer.unobserve(entry.target);
                

    }, []);

    return(
        <div ref={ref} className="reveal">
            {children}
        </div>
    )

}