import fs from 'fs';
import path, { resolve } from 'path';

// Existe La ruta
export const rutaExiste = (route) =>{
    if(fs.existsSync(route)){
        // 
        return true
        }else{
        // 
        return false
        }
}

// Si la ruta NO es absoluta, la transforma
export function rutaAbsoluta(route){
    if(!path.isAbsolute(route)){
      return path.resolve(route);
    }
    return route;
  }
  
// busca en la ruta los archivos con extension .md
  export function buscarArchivosMd (route){
    let archivos=[];
    if(fs.statSync(route).isFile()){
        archivos.push(route); // se agrega a archivos
    }else {
        const archivosDirectorios = fs.readdirSync(route);
        archivosDirectorios.forEach( archivo => {
            let rutaArchivoDirectorio = path.join(route, archivo);

            if(fs.statSync(rutaArchivoDirectorio).isDirectory()){
                archivos = archivos.concat(buscarArchivosMd(rutaArchivoDirectorio));
            }else{
                archivos.push(rutaArchivoDirectorio);
            }
        })
    }
    let archivosMd = archivos.filter(archivo => path.extname(archivo)=== '.md');
    return archivosMd;
  }

  // Leer archivos .md y extraer links
  export function leerArchivos (ruta){
    return new Promise((resolve, reject)=>{
        fs.readFile(ruta, 'utf-8', (err, data) => {
            if(err) {
             // console.log('error: ', err);
             resolve(err)
            } else {
             // console.log(data, '****************************************************************');
             resolve(data)
            }
          });
    })
    
  }
  // leerArchivos()
// validar links
