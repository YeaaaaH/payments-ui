import categories from "../../services/categories";

const state = {
  isCategoriesLoading: false,
  categories: null
}

const mutations = {
  getCategoriesStart(state) {
    state.isCategoriesLoading = true
  },
  getCategoriesSuccess(state, payload) {
    state.isCategoriesLoading = false,
    state.categories = payload
  },
  getCategoriesFailure(state) {
    state.isCategoriesLoading = false
    state.categories = null
  },
}

const actions = {
  getCategories(context) {
    return new Promise(resolve => {
      context.commit('getCategoriesStart')
      categories
        .getCategories()
        .then(response => {
          context.commit('getCategoriesSuccess', response.data.categories)
          resolve(response.data.categories)
        })
        .catch(() => {
          context.commit('getCategoriesFailure')
        })
    })
  }
}

export default ({
  state,
  mutations,
  actions
});