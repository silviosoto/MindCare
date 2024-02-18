require('dotenv').config()
const baseUrls = process.env.apiURL;
export const getDepatamentos = ( ) =>{
     
    const url = `${baseUrls}Departamento`;

    return fetch( url );
}

export const getMunicipios = ( idDepartamento) =>{
     
    const url = `${baseUrls}Municipio/departamento/${ idDepartamento }`;
    console.log( baseUrls ) 
    return fetch( url );
}

export const RegistrarPsicologo = ( Psicologo ) =>{
     
    const url =`${baseUrls}Psicologo`;
 
    return fetch(
         url, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: 'POST',
            body:JSON.stringify(Psicologo)  
        });
        
}