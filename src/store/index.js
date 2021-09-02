import {createStore} from "vuex";
import auth from "./modules/auth";
import categories from "./modules/categories";


export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        categories
    }
});