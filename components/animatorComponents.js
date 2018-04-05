// animatorComponents.js


    var bonesHolderSelector = "#bones-holder";
    var selectBoneComponent = "/animator/v/0.3.0/components/select-bone.html";
    $(bonesHolderSelector).load(selectBoneComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("selectBone loaded:", textStatus);
    });


    var positionHolderSelector = "#position-holder";
    var positionControlsComponent = "/animator/v/0.3.0/components/position-controls.html";
    $(positionHolderSelector).load(positionControlsComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("positionControls loaded:", textStatus);
    });


    var rotationHolderSelector = "#rotation-holder";
    var rotationControlsComponent = "/animator/v/0.3.0/components/rotation-controls.html";
    $(rotationHolderSelector).load(rotationControlsComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("rotationControls loaded:", textStatus);
    });


    var scaleHolderSelector = "#scale-holder";
    var scaleControlsComponent = "/animator/v/0.3.0/components/scale-controls.html";
    $(scaleHolderSelector).load(scaleControlsComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("scaleControls loaded:", textStatus);
    });


    var settingsHolderSelector = "#settings-holder";
    var animationSettingsComponent = "/animator/v/0.3.0/components/animation-settings.html";
    $(settingsHolderSelector).load(animationSettingsComponent, function(responseText, textStatus, jqXHR){
        debugMode && console.log("animationSettings loaded:", textStatus);
    });






    function initSlider(slider, min, max, step, value){
        slider.min = min;
        slider.max = max;
        slider.step = step;
        if (value != null) slider.value = value;
    }

    function outputUpdate(selector, value) { 
        $(selector).val( value ); 
    }

    function newCurrentBoneSelected(){ 
        getCurrentBone();           
        initBonesAdjustValues();
    }

    function getCurrentBone(){
    //  var bonesDroplist = document.getElementById("droplist-bones");
        currentBoneIndex = bonesDroplist.selectedIndex;                      // number  //  We can put this line in update().
        currentBone = animation.hierarchy[currentBoneIndex];                 // object  //  We can put this line in update().
        currentDataBone = animation.data.hierarchy[currentBoneIndex];        // object  //  We can put this line in update().
        $(boneLabelSelectedNameSelector).text( currentBone.name );
    }

    function initBonesAdjustValues(){
    
    //  INITIALAZE POSITION OUTPUT VALUES.
        $(posOutputX).val( round(currentBone.position.x, 0) );   // string
        $(posOutputY).val( round(currentBone.position.y, 0) );   // string
        $(posOutputZ).val( round(currentBone.position.z, 0) );   // string
        
    //  INITIALAZE ROTATION OUTPUT VALUES.
        var xrad = currentBone.rotation._x;                       // number rad
        var yrad = currentBone.rotation._y;                       // number rad
        var zrad = currentBone.rotation._z;                       // number rad
    //  Always return first rotation y because of quaternion.
        $(rotOutputY).val( round(THREE.Math.radToDeg(yrad), 0) );  // string degrees
        $(rotOutputX).val( round(THREE.Math.radToDeg(xrad), 0) );  // string degrees
        $(rotOutputZ).val( round(THREE.Math.radToDeg(zrad), 0) );  // string degrees
    //  Always return first rotation y because of quaternion.
        $(rotSliderY).val( round( $(rotOutputY).val(), 0 ) );        // number degrees
        $(rotSliderX).val( round( $(rotOutputX).val(), 0  ) );        // number degrees
        $(rotSliderZ).val( round( $(rotOutputZ).val(), 0  ) );        // number degrees
        
    //  INITIALAZE SCALE OUTPUT VALUES.
        sx = currentBone.scale.x * 100;      // number
        sy = currentBone.scale.y * 100;      // number
        sz = currentBone.scale.z * 100;      // number
        $(sclOutputX).val( round( sx, 1) );    // string
        $(sclOutputY).val( round( sy, 1) );    // string
        $(sclOutputZ).val( round( sz, 1) );    // string
        $(sclUniformOutput).val( $(sclOutputY).val() );
    //
    //  document.getElementById("animator-container-controls").style.display = "block";
    }

    function staticSliderPressed(identifier, status){ 
    //  debugMode && console.log("staticSliderPressed:", status);
        currentSlider = $( "#slider-" + identifier )[0];
        currentOutput = $( "#output-" + identifier )[0];
        currentSliderStatus = status;
    }

    function dynamicSliderPressed(identifier, status, restore){ 
    //  debugMode && console.log("dynamicSliderPressed:", status);
        currentSlider = $( "#slider-" + identifier )[0];
        currentOutput = $( "#output-" + identifier )[0];
        currentSliderStatus = status;
        currentSlider.value = restore;
    }

//  source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round"
    function round(number, precision) {
        var shift = function (number, precision, reverseShift) {
            if (reverseShift) {
                precision = -precision;
            }  
            numArray = ("" + number).split("e");
            return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
        };
        return shift(Math.round(shift(number, precision, false)), precision, true);
    }
