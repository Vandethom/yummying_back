import   express            from 'express'
import { getRecipes,
         getRecipeById,
         getRecipeByCategory,
         postRecipe,
         updateRecipe,
         deleteRecipeById } from '../db/recipe'

export const getAllRecipes = async (req: express.Request, res: express.Response) => {
    try {
        const recipes = await getRecipes()
        
        return res.status(200).json(recipes)
    } catch (error) {
        console.log(error)

        return res.sendStatus(400)
    }
}

export const getRecipe = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const recipe = await getRecipeById(id)

        return res.status(200).json(recipe)
    } catch (error) {
        console.log(error)

        return res.sendStatus(400)
    }
}

export const getByCategory = async (req: express.Request, res: express.Response) => {
    try {
        const { category } = req.params
        const recipes      = await getRecipeByCategory(category)

        return res.status(200).json(recipes)
    } catch(error) {
        console.log(error)

        return res.sendStatus(400)
    }
}

export const createRecipe = async (req: express.Request, res: express.Response) => {
    try {
        const { title, ingredients, instructions, price, category, image } = req.body
        
        switch (true) {
            case (!title || !ingredients || !instructions ||!price ||!category):
                console.log(req.body)
                return res.sendStatus(400)
                break
            default:
                const recipe = await postRecipe({
                    title,
                    ingredients,
                    instructions,
                    price,
                    category,
                    image
                })
                return res.status(200).json(recipe).end()
                break
        }
    } catch (error) {
        console.log(error)

        return res.sendStatus(400)
    }
}

export const deleteRecipe = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params

        const recipe = await deleteRecipeById(id)

        return res.status(204).json(recipe)
    } catch (error) {
        console.log(error)

        return res.sendStatus(400)
    }
}
