import { useEffect } from "react"


const log = (...rest) => {
    console.log("[Lifecycle Demo]:",...rest)
}

const uvijet = false

function LifecycleDemo(){

    log("re-render") // u slučaju tijela funkcije, ono se pokreče svaki puta kada se komponenta rerendera

    // useEffect(
    //     ()=>{}, // callback funkcija koja se pokrece
    //     [] // niz dependencija
    // )

    useEffect(()=>{
        log("mounted") // useEffect bez dependencija odgovara mount/unmount naše komponente
        return () => {
            // unutar destroy funkcije možemo počistiti stanje između rendera ili prije unmounta
            log("unmount")
        }
    },[])

    if(!uvijet){ 
        // null ne znači da se naša komponenta nije pokrenula
    // već samo da komponenta neće vratiti sadržaj
        return null
    }
    

    return <h1>

    demo lifecycle
    </h1>
}

export default LifecycleDemo