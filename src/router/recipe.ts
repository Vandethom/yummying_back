import   express           from 'express'
import { getAllRecipes,
         getRecipe,
         getByCategory,
         createRecipe,
         deleteRecipe }    from '../controllers/recipe'
import { isAuthenticated } from '../middlewares'


export default (router: express.Router) => {
    router.get   ('/recipes', getAllRecipes)
    router.get   ('/recipe/:id', getRecipe)
    router.get   ('/recipes/:category', getByCategory)
    router.post  ('/recipe', isAuthenticated, createRecipe)
    router.delete('/recipe/:id', isAuthenticated, deleteRecipe)
}
