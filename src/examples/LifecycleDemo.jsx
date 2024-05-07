import { useEffect, useState } from "react"


const log = (...rest) => {
    console.log("[Lifecycle Demo]:",...rest)
}

const uvijet = true

function LifecycleDemo({currentEvent}){

    log("re-render") // u slučaju tijela funkcije, ono se pokreče svaki puta kada se komponenta rerendera

    // useEffect(
    //     ()=>{}, // callback funkcija koja se pokrece
    //     [] // niz dependencija
    // )

    useEffect(()=>{
        log("mounted") // useEffect bez dependencija odgovara mount/unmount naše komponente
        return () => {
            // unutar destroy funkcije možemo počistiti stanje između rendera ili prije unmounta
            log("destoryFn","unmount")
        }
    },[])

    const [count,setCount] = useState(0)

    useEffect(()=>{
        log("count changed",count)
        return () => {
            log("destoryFn","count before change",count)
        }
    },[count])

    useEffect(()=>{
        log("currentEvent prop changed",currentEvent)
        
        return () => {
            log("destoryFn","currentEvent before change",currentEvent)
        }
    },[currentEvent])

    if(!uvijet){ 
        // null ne znači da se naša komponenta nije pokrenula
    // već samo da komponenta neće vratiti sadržaj
        return null
    }
    

    return <h4 onClick={()=>{
        setCount(count+1)
    }}>

        demo lifecycle {count} {currentEvent}
    </h4>
}

export default LifecycleDemo