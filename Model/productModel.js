import { Model, DataTypes } from "sequelize";
import sequelize from '../Config/sequelize.config'

class productModel extends Model {}

productModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Untitled'
    },
    desc: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue:'Beskrivelsen kommer senere'
    },
    rating: {
      type: DataTypes.INTEGER, 
    },
    price: {
      type: DataTypes.FLOAT,  
      allowNull:false,
    },
    stock: {
      type: DataTypes.INTEGER, 
    },
  },
  {
    sequelize,
    modelName: 'productModel',
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
