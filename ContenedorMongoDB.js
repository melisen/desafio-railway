const  {mongoose}  = require("mongoose");
const  {connect}  = require("mongoose");

mongoose.set('strictQuery', false)

class ContenedorMongoDB{
    constructor( rutaConnect, modelo){
        this.rutaConnect = rutaConnect;
        this.modelo = modelo;
    }

    async connectMG() {
        try {
          await connect(this.rutaConnect, { useNewUrlParser: true });
        } catch (e) {
          console.log(e);
          throw 'cannot connect to the db';
        }
      }


    async listarTodos(){
        const todos = await this.modelo.find({})
        return todos
    }



    async guardar(objeto){
        const nuevoObjeto = new this.modelo({
            title: objeto.title,
            price: objeto.price,
            thumbnail: objeto.thumbnail,
            
        });
        const objGuardado = await nuevoObjeto.save();
    }

    async borrarTodo(){ 
      const todos = await this.modelo.deleteMany({})
    }

}

module.exports = ContenedorMongoDB