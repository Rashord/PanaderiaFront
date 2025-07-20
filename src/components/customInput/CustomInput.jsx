import '../../index.css'

export function CustomInput ( {tipo,  holder} ) {
    return(
        <div className='searchContainer'>
            <input
                type={tipo}
                placeholder={holder}
            />
        </div>
    )
}