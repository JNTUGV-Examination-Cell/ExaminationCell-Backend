const Regulations = require("../models/Regulation");

require('dotenv').config({ path: 'cred.env' });

exports.addRegulations = async(req, res) => {
    try{
        const data = req.body.data();

        for(const item of data){
            await Regulations.create({
                regulation: item.regulation,
                regulation_start_year: item.regulation_start_year,
            });
            res.status(200).json({message: "Regulations data added successfully"});
        }
    }
    catch(error){
        console.error(error);
        console.log('hello');
        res.status(500).json({message: "Error in adding Regulations"});
    }
};

exports.getCompleteRegulations = async (req, res) => {
    try{
        const regulations = await Regulations.findAll();
        res.status(200).json(regulations);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Error in getting the list of regulations"})
    }
}