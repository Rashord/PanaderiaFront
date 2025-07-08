const ENDPOINT_DATA=`http://localhost:3000/api/getAllProducto`

export const getProdutos = async () =>{
    const res = await fetch(ENDPOINT_DATA)
    if(!res.ok){
        setProductosError('No se obtuvieron datos')
    }
    const data = await res.json()
    const { productos } = data
    return productos
}