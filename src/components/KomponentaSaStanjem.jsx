import propTypes from 'prop-types'

function KomponentaSaStanjem({ nekiNaslov }){
    

    return <span>
        {nekiNaslov}
    </span>
}

KomponentaSaStanjem.propTypes = {
    nekiNaslov: propTypes.string
}

KomponentaSaStanjem.defaultProps = {
    nekiNaslov: "opća vrijednost nekiNaslov propa"
}

export default KomponentaSaStanjem