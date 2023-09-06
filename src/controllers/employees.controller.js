import { pool } from '../db.js';

export const getEmployees = async (req,res)=>{
    try{
     throw new Error('Mi error')
     const [rows] = await pool.query('select * from employee')
     res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'algo va mal'
        })
    }
}
export const getEmployee = async (req,res)=>{
     try{
        const [rows] = await pool.query('select * from employee where id = ?',[req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message :'empleado no encontrado'
        })
        res.json(rows[0])
     }catch(error){
        return res.status(500).json({
            message: 'algo va mal'
        })   
     }
}
export const createEmployees = async (req,res)=>{
    try{
        const {name, salary} = req.body
        const [rows] = await pool.query('insert into employee (name, salary) VALUES (?,?)',[name,salary])
        res.send({
            id:rows.insertId,
            name,
            salary
        })
    }catch(error){
        return res.status(500).json({
            message: 'algo va mal'
        })   
     }

}
export const updateEmployee = async (req,res)=>{
    try{
        const {id} = req.params
        const {name, salary} = req.body
    
        const [result] = await pool.query('update employee set name = ifnull(?,name), salary = ifnull(?, salary) where id = ?',[name,salary,id])
       
        if(result.affectedRows === 0) return res.status(404).json({
            message:'empleado no encontrado'
        })
       
        const [rows] = await pool.query('select * from employee where id = ?',[id])
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'algo va mal'
        })   
     }
}





export const deleteEmployee = async (req,res)=>{

    try{
        const result = await pool.query('delete from employee employee where id = ?',[req.params.id,]);

        if(result.affectedRows <= 0) return res.status(404).json({
            message :'empleado no encontrado',
        });
        res.sendStatus(204);
    }catch(error){
        return res.status(500).json({
            message: 'algo va mal'
        })   
     }
}