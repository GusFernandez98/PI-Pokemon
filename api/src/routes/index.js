const { Router } = require('express');
const typesRoute = require('./typesRoute');         //importando las rutas
const pokemonsRoute = require('./pokemonRoute'); 

const router = Router();

router.use("/pokemons", pokemonsRoute);   //aqui expongo las rutas de pokemons
router.use("/types", typesRoute);    //aqui expongo las rutas de types

module.exports = router;
