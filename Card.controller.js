sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
   "./formatter"
], function (MessageToast, Controller, JSONModel, Formatter) {
    "use strict";

    return Controller.extend("com.winslow.yve.Environmental_Operational_ProjectMan_System.Card", {
        Formatter: Formatter,
        onInit: function () {
            debugger;
            this.TileData = [
                { type: "System", title: "Leadership and Commitment", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-01%20Leadership%20and%20Commitment.pdf" },
                { type: "System", title: "Project Planning, Management, and Execution", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-02%20Project%20Planning%2C%20Management%20and%20Execution.pdf" },
                { type: "System", title: "Communication, Consulting, and Reporting", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-03%20%20Communication%20Consultation%20and%20Reporting.pdf" },
                { type: "System", title: "Environmental Aspects and Impacts", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-05%20Control%20of%20Data%20and%20Documented%20Information.pdf" },
                { type: "System", title: "Control of Data and Document Information", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-04%20Environmental%20Aspects%20and%20Impacts.pdf" },
                { type: "System", title: "Health and Safety RAC", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-06%20Health%20and%20Safety%20RAC.pdf" },
                { type: "System", title: "Legal and Other Requirements", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-07%20Legal%20and%20Other%20Requirements.pdf" },
                { type: "System", title: "Emergency and IPR", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-08%20Emergency%20and%20IPR.pdf" },
                { type: "System", title: "Competence Awareness and Training", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-09%20Competence%20Awareness%20and%20Training.pdf" },
                { type: "System", title: "Tenders and Contracts", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-10%20Tenders%20and%20Contracts.pdf" },
                { type: "System", title: "Non-conformance and Corrective Action", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-11%20Non%20Conformance%20and%20Corrective%20Action.pdf" },
                { type: "System", title: "Management of Subcontractors", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-12%20Management%20of%20Sub%20Contractors.pdf" },
                { type: "System", title: "Auditing Management Systems", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-13%20Auditing%20Management%20Systems.pdf" },
                { type: "System", title: "Human Resources Management", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-14%20Human%20Resources%20Management.pdf" },
                { type: "System", title: "Monitoring and Measurement", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-15%20Monitoring%20and%20Measurement.pdf" },
                { type: "System", title: "Management Review", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-16%20Management%20Review.pdf" },
                { type: "System", title: "Procurement of Goods and Services", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-17%20Procurement%20of%20Goods%20and%20Services%20.pdf" },
                { type: "System", title: "Change Management Procedure", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-SP-18%20Change%20Management%20Procedure.pdf" },

                { type: "Operational", title: "Confined Space", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-01%20Confined%20Spaces%20R4.pdf" },
                { type: "Operational", title: "Plant and Equipment", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-02%20Plant%20and%20Equipment.pdf" },
                { type: "Operational", title: "Excavation and Trenching", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-03%20Excavation%20%26%20Trenching.pdf" },
                { type: "Operational", title: "Inspection and Testing", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-04%20Inspection%20and%20Testing.pdf" },
                { type: "Operational", title: "Handling, Storage, Preservation, and Delivery", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-05%20Handling%2C%20Storage%2C%20Preservation%20and%20Delivery.pdf" },
                { type: "Operational", title: "DG and HS", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-06%20DG%20and%20HS.pdf" },
                { type: "Operational", title: "Manual Handling", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-07%20Manual%20Handling.pdf" },
                { type: "Operational", title: "Pipe Joining and Installation", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-08%20Pipe%20Joining%20and%20Installation.pdf" },
                { type: "Operational", title: "Worksite Clean Up and Reinstatement", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-09%20Worksite%20Clean%20Up%20and%20Reinstatement.pdf" },
                { type: "Operational", title: "Permit to Work", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-10%20Permit%20to%20Work.pdf" },
                { type: "Operational", title: "Crane Operations", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-OP-11%20Crane%20Operations.pdf" },


                { type: "Environmental", title: "Environmental Incident Procedure", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-01%20Environmental%20Incident%20Procedure.pdf" },
                { type: "Environmental", title: "Air Quality Monitoring", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-02%20Air%20Quality%20Monitoring.pdf" },
                { type: "Environmental", title: "Protection of Flora and Fauna", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-03%20Protection%20of%20Flora%20and%20Fauna.pdf" },
                { type: "Environmental", title: "Visual Impacts, Litter, and Amenities", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-04%20Visual%20Impacts%2C%20Litter%20and%20Amenities.pdf" },
                { type: "Environmental", title: "Erosion and Sediment Control", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-05%20Erosion%20and%20Sediment%20Control.pdf" },
                { type: "Environmental", title: "Ground Water Management", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-06%20GroundWater%20Management.pdf" },
                { type: "Environmental", title: "Contaminated Soils and Materials", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-07%20Contaminated%20Soils%20and%20Materials.pdf" },
                { type: "Environmental", title: "Waste and Resource Use", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-08%20Waste%20and%20Resource%20Use.pdf" },
                { type: "Environmental", title: "Spill Management", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-09%20Spill%20Management.pdf" },
                { type: "Environmental", title: "Asbestos Handling and Disposal", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-10%20Asbestos%20Handling%20and%20Disposal.pdf" },
                { type: "Environmental", title: "Archaeological and Heritage Protection", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-EP-11%20Archaeological%20and%20Heritage%20Protection.pdf" },


                { type: "Water Tech", title: "Water Main Construction", url: "" },

                { type: "Sewer Tech", title: "Sewer Construction", url: "" },

                { type: "Gas Tech", title: "Installation of Gas Mains", url: "https://inkitsolutions1.sharepoint.com/sites/INKITSolutions/Shared Documents/General/WorkZone Requirment/../../../../../shared-services/YVE/Documents/YVEBMS-GTP-01%20Installation%20of%20Gas%20Mains.pdf" },
            ];

            this.getView().setBusy(true);
            this.getView().attachModelContextChange(this._onModelArrival, this);
            this._onModelArrival();
        },

        _onModelArrival: function () {
            debugger;
            // Get the model from the Component
            var oODataModel = this.getOwnerComponent().getModel();

            // Check if the model is defined yet
            if (oODataModel) {
                // 3. Success! Stop listening so this doesn't run again
                this.getView().detachModelContextChange(this._onModelArrival, this);

                // 4. Wait for metadata to be ready before calling .read()
                oODataModel.metadataLoaded().then(function () {
                    this._loadData();
                }.bind(this));
            }
        },

        _loadData: function () {
            debugger;
            var url = window.location.href;
            var id = url.split("workpage_tabs/")[1].split("?")[0];
            const oView = this.getView();
            oView.setBusy(true);
            this.getOwnerComponent().getModel("JAM").read(`/NavTabs('${id}')`, {
                success: function (oData) {
                    debugger;
                    var tileData = this.TileData.filter(i => i.type === oData.Title);
                    let oModel = new JSONModel({ cards: tileData, Title: oData.Title });
                    this.getView().setModel(oModel, "cardModel");
                    oView.setBusy(false);
                }.bind(this),
                error: function (oError) {
                    debugger;
                    MessageToast.show("Error fetching NavTabs, check console logs for more details");
                    oView.setBusy(false);
                }
            });
        },

        handleFilePress: function (oEvent) {
            debugger;
            const oView = this.getView();
            oView.setBusy(true);
            var oControl = oEvent.getSource();
            var displayText = oControl.getBindingContext("cardModel").getObject().title || "";
            if (displayText === "Sewer Construction") displayText = "Sewer Tech";
            if (displayText === "Water Main Construction") displayText = "Water Tech";

            // this.getOwnerComponent().getModel().read("/GetFPGrpID", {
            //     success: function (oData) {
                    const grpID = this.getView().getModel("cardData").getData().GroupId;
                    if (!grpID) {
                        oView.setBusy(false);
                        return MessageToast.show("Group ID of Forms & Procedures not found");
                    }
                    this.getOwnerComponent().getModel("JAM").read(`/Search`, {
                        urlParameters: {
                            "Query": "'" + displayText + "'",
                            "Group": "'" + grpID + "'",
                            "Category": "'workpages'",
                            "$expand": "ObjectReference",
                            "$select": "ObjectReference/Title,ObjectReference/WebURL,ObjectReference/Type",
                        },
                        success: function (oData) {
                            debugger
                            var oFoundItem = oData.results.find(function (item) {
                                var sTitle = item.ObjectReference.Title || "";
                                var sType = item.ObjectReference.Type || "";
                                return sTitle.toLowerCase().trim() === displayText.toLowerCase().trim() && sType === "NavTab";
                            });
                            if (oFoundItem) {
                                window.location.href = oFoundItem.ObjectReference.WebURL + "?headless=true&title=" + encodeURIComponent(displayText);
                            } else {
                                MessageToast.show("No item found with Title '" + displayText + "' and Type 'NavTab'.");
                            }
                            oView.setBusy(false);
                        }.bind(this),
                        error: function (oError) {
                            MessageToast.show("Error fetching NavTabs, check console logs for more details");
                            console.log(oError);
                            oView.setBusy(false);
                        }
                    });
            //     }.bind(this),
            //     error: function (oError) {
            //         MessageToast.show("Error fetching Group ID, check console logs for more details");
            //         console.log(oError);
            //         oView.setBusy(false);
            //     }
            // });
        },
    });
});
