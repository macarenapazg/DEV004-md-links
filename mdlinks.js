import { rutaExiste, rutaAbsoluta, buscarArchivosMd, leerArchivos} from "./fn.js"

export const mdLinks = (route) =>{
if(rutaExiste(route)== true){
    //console.log("El archivo EXISTE!");
    // isAbsolute (path)
    const routeAbsolute = rutaAbsoluta(route)
    const arrayArchivos = buscarArchivosMd(routeAbsolute) // devuelve un array
    arrayArchivos.forEach((archivo)=>{
        leerArchivos(archivo)
        .then((data)=>{
            console.log(data);
            // crear funcion de extraer links (en fn.js)
            // enviar las data
        })
        .catch((err)=>{console.log(err);})
    })


}else{
    console.log("El archivo NO EXISTE!");
}
}