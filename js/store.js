// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import angela from './modules/angela.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        angela,
    }
});

export default store;
