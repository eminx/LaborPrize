
Slingshot.fileRestrictions("uploadToAmazonS3", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/jpg","application/pdf"],
    maxSize: 2 * 500 * 500 // 2 MB (use null for unlimited)
});

Slingshot.createDirective("uploadToAmazonS3", Slingshot.S3Storage,{
    bucket:"uploaded-solutions",
    acl:"public-read",


    authorize : function(){
    return true;
    },

    key : function (file) {
    var user = Meteor.users.findOne(this.userId);
        console.log("din-moder");
        return user + "/previewImage" + "/" + Date.now() + file.name
    }
});

