

const log = (...rest) => {
    console.log("[Lifecycle Demo]:",...rest)
}

function LifecycleDemo(){
    log("re-render") // u slučaju tijela funkcije, ono se pokreče svaki puta kada se komponenta rerendera

    // null ne znači da se naša komponenta nije pokrenula
    // već samo da komponenta neće vratiti sadržaj
    return null
}

export default LifecycleDemo