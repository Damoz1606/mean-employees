import Employee from "../app/model/employee.model";
import { Request, Response } from 'express';

export async function getEmployees(req: Request, res: Response): Promise<Response> {
    try{
        const employee = await Employee.find();
        return res.status(200).json(employee);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function getEmployee(req: Request, res: Response){
    try{
        const employee = await Employee.findById(req.params.id);
        return res.status(200).json(employee);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function postEmployee(req: Request, res: Response): Promise<Response> {
    try{
        const employee = await Employee.create(req.body);
        return res.status(200).json(employee);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function putEmployee(req: Request, res: Response){
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(employee);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function deleteEmployee(req: Request, res: Response){
    try{
        const employee = await Employee.findByIdAndDelete(req.params.id);
        return res.status(200).json(employee);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}

export async function deleteEmployees(req: Request, res: Response){
    try{
        const employee = await Employee.deleteMany({});
        return res.status(200).json(employee);
    }catch(error){
        return res.status(500).json({
            message: "Error",
            error: error
        });
    }
}