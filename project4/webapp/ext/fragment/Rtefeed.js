sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/model/odata/v4/ODataModel"
], function (MessageToast, Fragment, ODataModel) {
    'use strict';

    return {
        onPress: function (oEvent) {
            MessageToast.show("Custom handler invoked.");
            // Get reference to the FeedInput control
            var oFeedInput = this.byId("feedInput");
            var sNewComment = oFeedInput.getValue();

            // Exit if comment is empty
            if (!sNewComment) {
                MessageToast.show("Comment cannot be empty.");
                return;
            }
             // Get the current entity context
             var oContext = oFeedInput.getBindingContext();
             if (!oContext) {
                 MessageToast.show("Error: No binding context found.");
                 return;
             }

            var oModel = oContext.getModel();
            var sPath = oContext.getPath() + "/_feed"; // Adjust based on metadata
            var oListBinding = this.byId("feedList").getBinding("items");
 
            var oDate = new Date();
            var sFormattedTimestamp = oDate.toISOString().split(".")[0] + "Z"; // ✅ Removes milliseconds
 
            // Prepare new comment object
            var oNewComment = {
                "Text": sNewComment,
                "Timestamp": sFormattedTimestamp, // Use the current time
                "Sender": "MGLDEV01", // Dynamic sender can be used
                "TravelId": oContext.getProperty("TravelId") // Linking to TravelId
            };
 // Use getEditFlow().createDocument to properly handle drafts
 this.getEditFlow().createDocument(oListBinding, {
    createAtEnd: true,
    creationMode: "Inline",
    singleDraftForCreate: true,
    data: oNewComment
}).then(() => {
    MessageToast.show("Comment posted successfully.");
    oFeedInput.setValue("");
}).catch((error) => {
    MessageToast.show("Error posting comment.");
    console.error(error);
});
        //    // Use OData V4 bindList().create() to add a new entry
        //    var oListBinding = oModel.bindList(sPath);
        //    var oNewEntry = oListBinding.create(oNewComment , {
        //     success: function(oCreatedEntry) {
        //         // This will be executed when the draft comment is successfully created
        
        //         // Log to check the created entry
        //         console.log("Draft comment created:", oCreatedEntry);
        
        //         // ✅ Manually refresh the feed list binding
        //         oListBinding.refresh();
        
        //         // Optionally, show a message toast to indicate success
        //         MessageToast.show("Draft comment visible.");
        //     },
        //     error: function(oError) {
        //         // This will be executed if an error occurs while creating the draft comment
        //         console.error("Error creating draft comment:", oError);
        //         MessageToast.show("Error posting comment.");
        //     }
        // });
           
//oNewEntry.created().then(() => {
//    // Refresh the binding after creating the comment
//    oListBinding.refresh();
//});
//this.byId("feedList").getBinding("items").refresh();
           // Clear the input field after posting
           oFeedInput.setValue("");
           MessageToast.show("Comment posted successfully.");


        }
    }






});
