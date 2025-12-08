import { useRef, useEffect} from "react";

export const RevealOnScroll = ({children}) => {  
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(() => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target    

    }, []);

    return(
        <div ref={ref} className="reveal">
            {children}
        </div>
    )

}