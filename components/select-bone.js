// select-bone.js

/* When calling .load() using a URL without a suffixed selector expression, 
 * the content is passed to .html() prior to scripts being removed. 
 * This executes the script blocks before they are discarded. 
 * If .load() is called with a selector expression appended to the URL, however, 
 * the scripts are stripped out prior to the DOM being updated, and thus are not executed. 
 */

    var bonesHolderSelector = "#bones-holder";
    var selectBoneComponent = "/animator/v/0.3.0/components/select-bone.html";

    $(bonesHolderSelector).load(selectBoneComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("selectBone loaded:", jqXHR);
    });

