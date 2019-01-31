const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PruebaSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
},{'collection':'pruebas','timestamps':true});

mongoose.Types.ObjectId.prototype.valueOf = () => {
	return this.toString();
};

module.exports = mongoose.model('pruebas',PruebaSchema);
