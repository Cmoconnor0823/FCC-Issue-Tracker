const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IssueSch = new Schema({
    project: String, 
    issue_title: String,
    created_by: String,
    assigned_to: {
        type: String,
        default: '',
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    updated_on:{
        type: Date,
        default: Date.now
    },
    open: {
        type: Boolean,
        default: true
    }
});

const Issue = mongoose.model('issue', IssueSch);
module.exports = Issue;