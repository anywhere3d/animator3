// rotation-controls.js

/* When calling .load() using a URL without a suffixed selector expression, 
 * the content is passed to .html() prior to scripts being removed. 
 * This executes the script blocks before they are discarded. 
 * If .load() is called with a selector expression appended to the URL, however, 
 * the scripts are stripped out prior to the DOM being updated, and thus are not executed. 
 */

    var rotationHolderSelector = "#rotation-holder";
    var rotationControlsComponent = "/animator/v/0.3.0/components/rotation-controls.html";

    $(rotationHolderSelector).load(rotationControlsComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("rotationControls loaded:", jqXHR);
    });

