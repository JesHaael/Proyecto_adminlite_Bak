const Producto = require('../models/Producto');

//funcion agregar clientes
exports.agregarProductos = async(req,res)=>{
    try {
        let productos;
        productos = new Producto(req.body)
        await productos.save();
        res.send(productos);
   
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar producto');
    }
}

//funcion que nos va a mostrar todos los clientes
exports.mostrarProductos = async(req,res)=>{
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al mostrar los productos');
    }

}
//funcion que nos va a mostrar un los clientes
exports.buscarProducto = async(req,res)=>{
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:"No se encuentra el producto"})
            //return
        }else{
            res.json(producto);
            //res.send(cliente);  
        } 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al consultar producto')
}

}
//PUT
exports.actualizarProducto = async(req,res)=>{

    try {
        const producto = await Producto.findOneAndUpdate(
        {_id:req.params.id},req.body);  
        
        if(!producto)res.status(404).send('Producto no encontrado');
        else
        res.json(producto);    
    } catch (error) {
            console.log(error);
            res.status(500).send('Error al actualizar producto')
    }
}
//PATCH
exports.modificarProductos = async(req,res)=>{

    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id,req.body,{new:true});
          if(!producto){
            return res.status(404).send('Producto no encontrado');
        }
         res.json(producto);    
    } catch (error) {
            console.log(error);
            res.status(500).send('Errar al modificar producto')
    }
}

//Eliminar clientes
exports.eliminarProductos = async(req,res)=>{
    try {
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send('Productos no encontrado');
        } else{
            await Producto.findByIdAndDelete({_id: req.params.id})
            res.json({msg:'El producto ha sido eliminado'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el producto')
    }

}

