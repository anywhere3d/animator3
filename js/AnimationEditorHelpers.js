//  AnimationEditorHelpers.js

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
        posOutputX.value = currentBone.position.x.toFixed(0);   // string
        posOutputY.value = currentBone.position.y.toFixed(0);   // string
        posOutputZ.value = currentBone.position.z.toFixed(0);   // string
        
    //  INITIALAZE ROTATION OUTPUT VALUES.
        var xrad = currentBone.rotation._x;                       // number rad
        var yrad = currentBone.rotation._y;                       // number rad
        var zrad = currentBone.rotation._z;                       // number rad
    //  Always return first rotation y because of quaternion.
        rotOutputY.value = rotSliderY.value = THREE.Math.radToDeg(yrad).toFixed(0);  // string degrees
        rotOutputX.value = rotSliderX.value = THREE.Math.radToDeg(xrad).toFixed(0);  // string degrees
        rotOutputZ.value = rotSliderZ.value = THREE.Math.radToDeg(zrad).toFixed(0);  // string degrees
    //  Always return first rotation y because of quaternion.
    //  rotSliderY.value = Number( rotOutputY.value );           // number degrees
    //  rotSliderX.value = Number( rotOutputX.value );           // number degrees
    //  rotSliderZ.value = Number( rotOutputZ.value );           // number degrees
        
    //  INITIALAZE SCALE OUTPUT VALUES.
        sx = currentBone.scale.x * 100;      // number
        sy = currentBone.scale.y * 100;      // number
        sz = currentBone.scale.z * 100;      // number
        sclOutputX.value = sx.toFixed(1);    // string
        sclOutputY.value = sclUniformOutput.value = sy.toFixed(1);    // string
        sclOutputZ.value = sz.toFixed(1);    // string
    //  sclUniformOutput.value = sclOutputY.value;
    //
    //  document.getElementById("animator-container-controls").style.display = "block";
    }

    function staticSliderPressed(identifier, status){ 
    //  debugMode && console.log("staticSliderPressed:", status);
        currentSlider = $( "#slider-" + identifier )[0];
        currentOutput = $( "#output-" + identifier )[0];
        currentSliderStatus = status;
    }

    function outputSliderPressed(identifier, status){ 
    //  debugMode && console.log("staticSliderPressed:", status);
        currentOutput = $( "#slider-" + identifier )[0];
        currentSlider = $( "#output-" + identifier )[0];
        currentSliderStatus = status;
    }

    function dynamicSliderPressed(identifier, status, restore){ 
    //  debugMode && console.log("dynamicSliderPressed:", status);
        currentSlider = $( "#slider-" + identifier )[0];
        currentOutput = $( "#output-" + identifier )[0];
        currentSliderStatus = status;
        if (restore == null) 
            currentSlider.value = 0;
        else 
            currentSlider.value = restore;
    }

