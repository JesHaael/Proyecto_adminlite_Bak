const Proveedores = require('../models/Proveedores');
const Proveedor = require('../models/Proveedores'); 

//funcion agregar clientes
exports.agregarProveedores = async(req,res)=>{
    try {
        let proveedores;
        proveedores = new Proveedor(req.body)
        await proveedores.save();
        res.send(proveedores);
   
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar proveedor');
    }
}

//funcion que nos va a mostrar todos los proveedores
exports.mostrarProveedores = async(req,res)=>{
    try {
        const proveedores = await Proveedores.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al mostrar los proveedores');
    }

}
//funcion que nos va a mostrar un los clientes
exports.buscarProveedor = async(req,res)=>{
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:"No se encuentra el proveedor"})
            //return
        }else{
            res.json(proveedor);
            //res.send(cliente);  
        } 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al consultar proveedor')
}

}
//PUT
exports.actualizarProveedor = async(req,res)=>{

    try {
        const proveedor = await Proveedor.findOneAndUpdate(
        {_id:req.params.id},req.body);  
        
        if(!proveedor)res.status(404).send('Proveedor no encontrado');
        else
        res.json(proveedor);    
    } catch (error) {
            console.log(error);
            res.status(500).send('Errar al actualizar proveedor')
    }
}
//PATCH
exports.modificarProveedores = async(req,res)=>{

    try {
        const proveedor = await Proveedor.findByIdAndUpdate(req.params.id,req.body,{new:true});
          if(!proveedor){
            return res.status(404).send('Proveedor no encontrado');
        }
         res.json(proveedor);    
    } catch (error) {
            console.log(error);
            res.status(500).send('Errar al modificar proveedor')
    }
}

//Eliminar proveedor
exports.eliminarProveedores = async(req,res)=>{
    try {
        let proveedores = await Proveedor.findById(req.params.id);
        if(!proveedores){
            res.status(404).send('Cliente no encontrado');
        } else{
            await Proveedor.findByIdAndDelete({_id: req.params.id})
            res.json({msg:'El proveedor ha sido eliminado'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el proveedor')
    }

}

