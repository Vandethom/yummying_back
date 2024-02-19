import mongoose from 'mongoose'

const RecipeSchema = new mongoose.Schema({
    title: {
        type:     String,
        required: true
    },
    ingredients: {
        type:     [String, Number],
        required: true
    },
    instructions: {
        type:     String,
        required: true
    },
    category: {
        type:     String,
        required: true
    },
    price: {
        type:     Number,
        required: true
    },
    image: {
        type:     String
    }
})

export const RecipeModel = mongoose.model('Recipe', RecipeSchema)

export const getRecipes          = ()                                        => RecipeModel.find()
export const getRecipeById       = (id: string)                              => RecipeModel.findById(id)
export const getRecipeByCategory = (category: string)                        => RecipeModel.find({ category: category})
export const postRecipe          = (values: Record<string, any>)             => new RecipeModel(values).save().then((recipe) => recipe.toObject())
export const deleteRecipeById    = (id: string)                              => RecipeModel.findOneAndDelete({ _id: id });
export const updateRecipe        = (id: string, values: Record<string, any>) => RecipeModel.findByIdAndUpdate(id, values)