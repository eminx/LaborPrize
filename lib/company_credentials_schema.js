var Schemas = {};

Schemas.Company = new SimpleSchema({
    email: {
        type: String,
        label: "Email of the company"
    },
    name: {
        type: String,
        label: "Name of the company"
    },
    password:{
        type:String,
        label: "The password for the company"
    },
    username:{
        type:String,
        label:"The username for the company"
    }
});



Company.attachSchema(Schemas.Company);