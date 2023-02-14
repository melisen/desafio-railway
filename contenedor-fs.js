const fs = require('fs');

  class ContenedorFS  {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }
     
    async save(object){
        try{
            const data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            const arrObjetos = await JSON.parse(data)
            const nuevoObj = object;
            nuevoObj.id = arrObjetos.length +1;
            arrObjetos.push(nuevoObj)
            const nuevoArr = JSON.stringify(arrObjetos);
            await fs.promises.writeFile(this.nombreArchivo, nuevoArr);
            return nuevoObj.id
        }catch(err){
            console.log('Hubo un error: ', err)
        }
        
    }

    async getById(numId){
    try{
        const data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
        const arrObjetos = await JSON.parse(data);
        const objBuscado = arrObjetos.find((element)=>element.id === numId);
        if(objBuscado){
            return objBuscado
        }else{
            return null
        }
    }catch(err){
        console.log('Hubo un error: ', err)
    }
    }

   async  getAll(){
    try{
        const data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
        const arrObjetos = await JSON.parse(data)
        return arrObjetos;
    }catch(err){
        console.log('Hubo un error: ', err)
    }
    }

    async deleteById(number){
    try{
        const data = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
        const arrObjetos = await JSON.parse(data)
        const nuevoArr = arrObjetos.filter(element => element.id != number);
        const stringNuevoArr = JSON.stringify(nuevoArr)
        await fs.promises.writeFile(this.nombreArchivo, stringNuevoArr)
    }catch(err){
        console.log('Hubo un error: ', err)
    }
    }

    async deleteAll(){
    try{
        await fs.promises.writeFile(this.nombreArchivo, "[]")
    }catch(err){
        console.log('Hubo un error: ', err)
    }
    }
}

module.exports = ContenedorFS;
