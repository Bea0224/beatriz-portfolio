export const RevealOnScroll = ({children}) => {  
    
    const ref = useRef(null);

    return(
        <div ref={ref} className="">
            {children}
        </div>
    )

}