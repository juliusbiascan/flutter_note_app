import { PrismaClient } from "@prisma/client"
import express from 'express'

const prisma = new PrismaClient();

export const createNote = async (req: express.Request, res: express.Response) => {
    try {
        
        console.log(req.body);

        const data = await prisma.note.create({
            data: req.body
        });
        return res.status(201).json({
            status: 201,
            message: 'success',
            data: data
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

export const getNotes = async (req: express.Request, res: express.Response) => {
    try {
        const data = await prisma.note.findMany({});
        return res.status(200).json({
            status: 200,
            message: 'success',
            data: data
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};


export const updateNote = async (req: express.Request, res: express.Response) => {
    try {
        console.log(req.body);
        const data = await prisma.note.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        return res.status(200).json({
            status: 200,
            message: 'success',
            data: data
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};

export const deleteNote = async (req: express.Request, res: express.Response) => {
    try {
        await prisma.note.delete({
            where: {
                id: parseInt(req.params.id)
            },
        });
        return res.status(200).json({
            status: 200,
            message: 'success',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};
