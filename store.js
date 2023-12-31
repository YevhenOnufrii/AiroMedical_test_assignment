import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipesList: [],
  renderList: [],
  pageNum: 1,
  url: num => `https://api.punkapi.com/v2/beers?page=${num}`,

  getRecipes: async () => {
    try {
      const response = await fetch(get().url(get().pageNum))
      if (!response.ok) {
        const msg = `There was an error: ${response.status}, ${response.statusText}`
        throw new Error(msg)
      }
      const data = await response.json()
      set({ recipesList: [...data] })
      // change page num for next fetch
      set(state => ({ pageNum: (state.pageNum += 1) }))
    } catch (error) {
      console.log(error.message)
    }
  },

  getRenderList: () => {
    get().recipesList.forEach(el => {
      if (get().renderList.length < 15) {
        // push new element to render list
        set(state => ({
          renderList: [...get().renderList, { ...el, isSelected: false }],
        }))
        // delete displayed elements
        set(state => {
          const newList = state.recipesList.filter(recipe => recipe.id !== el.id)
          return { recipesList: newList }
        })
      }
    })
  },

  // change selected item styles
  selectItemToggle: id =>
    set(state => {
      const updatedList = state.renderList.map(el =>
        el.id === id ? { ...el, isSelected: !el.isSelected } : el
      )
      return { renderList: updatedList }
    }),

  deleteAllSelected: () => {
    set(state => {
      // delete items from recipes list
      const updRecipesList = state.recipesList.filter(el => el.isSelected !== true)
      set({ recipesList: updRecipesList })
      // delete items from render list
      const newList = state.renderList.filter(el => el.isSelected !== true)
      return { renderList: newList }
    })
  },
  deleteProduct: id => {
    set(state => {
      // delete item from recipes list
      const updRecipesList = state.recipesList.filter(el => el.id !== id)
      set({ recipesList: updRecipesList })
      // delete item from render list
      const newList = state.renderList.filter(el => el.id !== id)
      return { renderList: newList }
    })
  },
}))
