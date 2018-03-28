var mongoose = require( 'mongoose' );

var agencySchema = new mongoose.Schema({ 
	city: {
        type: String,
        required: true,
        district: [districtSchema]
    },
    
});

var districtSchema = new mongoose.Schema({ 
	name: {
        type: String,
        required: true
    },
    agency: [agencySchema]
});

var agencySchema = new mongoose.Schema({ 
	name: {
        type: String,
        required: true
    },
    content: String
});

mongoose.model('Agency', agencySchema);