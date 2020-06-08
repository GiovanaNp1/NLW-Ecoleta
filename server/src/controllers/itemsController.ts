import { Request, Response } from 'express'
import knex from '../database/connection'

class itemsController {
    async index(request: Request, response: Response){
        const items  = await knex('items').select('*');
    
        const serelizedItems = items.map(item => {
            return { 
                id: item.id,
                titulo: item.titulo,
                imagem_url: `http://localhost:3333/uploads/${item.imagem}`,
            }
        });
    
        return response.json(serelizedItems)
    }
}

export default itemsController