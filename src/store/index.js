import {createStore} from "vuex";
import auth from "./modules/auth";
import categories from "./modules/categories";
import payments from "./modules/payments";


export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        categories,
        payments
    }
});