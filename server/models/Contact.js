const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    company: { type: String, required: true },       
    designation: { type: String, required: true },   
    message: { type: String, required: true },     
    date: { type: Date, default: Date.now }          
});

const ContactModel = mongoose.model("companyContact", ContactSchema);
module.exports = ContactModel;
