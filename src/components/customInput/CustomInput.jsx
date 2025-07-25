import '../../index.css'

export function CustomInput ( {tipo,  holder} ) {
    return(
        <div className='searchContainer'>
            <input
                id={holder}
                type={tipo}
                placeholder={' '}
            />
            <label for= {holder}>{ holder }</label>
        </div>
    )
}