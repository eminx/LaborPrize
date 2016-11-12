import React, { Component } from 'react';

export default class UploadSolutions extends Component {

    upload(e) {
        e.preventDefault();
        var uploader = new Slingshot.Upload("uploadToAmazonS3");
        console.log(uploader);
        uploader.send(document.getElementById("uploaded_file").files[0], function (error, downloadUrl) { // you can use refs if you like
            if (error) {
                // Log service detailed response
                console.error('Error uploading', uploader.xhr.response);
                alert(error); // you may want to fancy this up when you're ready instead of a popup.
            }
            else {
                console.log("din-farsa");
                Meteor.call('uploadSolutions', downloadUrl, (error, response) => {
                    if (error) {
                        console.log(error);
                        Materialize.toast(error.reason, 4000);
                    }
                });
            }
        })
    }
    render() {
        return (
            <div className="">
                <form className="">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" id ="uploaded_file" name="uploaded_file" onChange={this.upload.bind(this)}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn">Upload</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}