import { CustomInput } from "../customInput/CustomInput";

export function FormularioAdd () {
    return(
        <form style={{display: 'flex', flexDirection: 'column', rowGap:'10px', width: '95%', justifyItems: 'center'}}>
            <CustomInput tipo={'text'} holder={ 'Nombre' }/>
            <div style={{display: "flex", flexDirection: 'row', columnGap: '10px'}}>   
                <CustomInput tipo={'number'} holder={ 'Costo' }/>
                <CustomInput tipo={'number'} holder={ 'Unidades' }/>
                <CustomInput tipo={'number'} holder={ 'N° de Cajas' }/>
            </div>
            <div style={{display: "flex", flexDirection: 'row', columnGap: '10px'}}>   
                <CustomInput tipo={'number'} holder={ '% Ganancia' }/>
                <CustomInput tipo={'date'} holder={ 'Vencimiento' }/>
            </div>
            <div style={{display: "flex", flexDirection: 'row', columnGap: '10px'}}>
                <CustomInput tipo={'number'} holder={ 'Ganancia Aprox.' }/>
                <CustomInput tipo={'number'} holder={ 'Precio Aprox.' }/>
            </div>
            <div style={{display: "flex", flexDirection: 'row', columnGap: '10px'}}>
                <CustomInput tipo={'number'} holder={ 'Ganancia' }/>
                <CustomInput tipo={'number'} holder={ 'Precio Venta' }/>
            </div>
        </form>
    )
}