// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('pokemon', {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       primaryKey: true,
//     },

//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     hp: {
//       type: DataTypes.STRING,
//     },

//     attack: {
//       type: DataTypes.STRING,
//     },

//     defense: {
//       type: DataTypes.STRING,
//     },

//     height: {
//       type: DataTypes.STRING,
//     },

//     weight: {
//       type: DataTypes.STRING,
//     },

//     img: {
//       type: DataTypes.STRING,
//     },

//     createInBd: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//     },
//   },
//     {timestamps: false} 
//   );
// };
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {   //modelos sequelize
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,           //para que me genere un Id unico(Una columna que almacena un identificador universal único. Úselo con UUIDV1 o UUIDV4 para valores predeterminados.)
      defaultValue: DataTypes.UUIDV4,  //Un identificador universal único por defecto generado según la norma UUID v4
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //hp
    life: {           
      type: DataTypes.INTEGER,
    },
    attack: {               
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    //image
    sprite:{
      type: DataTypes.STRING,
      validate: {isUrl: true},
      defaultValue: "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-0.png"
    },
  });
};