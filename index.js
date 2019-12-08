window.addEventListener('DOMContentLoaded', function() {
        // All the following code is entered here.
        var canvas = document.getElementById('renderCanvas');
        var engine = new BABYLON.Engine(canvas, true);
        
        var createScene = function() {
		    // Create a basic BJS Scene object.
		   	var scene = new BABYLON.Scene(engine);

		   	// Create a default skybox with an environment.
    // var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("textures/environment.dds", scene);
    // var currentSkybox = scene.createDefaultSkybox(hdrTexture, true);

    //Adding an Arc Rotate Camera
    		var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    		camera.attachControl(canvas, false);
    // Append glTF model to scene.
    BABYLON.SceneLoader.ShowLoadingScreen = false;
    BABYLON.SceneLoader.Append("/", "Darwin.glb", scene, function (scene) {
        // Create a default arc rotate camera and light.
        scene.createDefaultCameraOrLight(true, true, true);

        // The default camera looks at the back of the asset.
        // Rotate the camera by 180 degrees to the front of the asset.
        scene.activeCamera.alpha += Math.PI;
    });
    

		    // Return the created scene.
		    return scene;
		}

		var scene = createScene();
		engine.runRenderLoop(function() {
		    
		    scene.render();
		});

		window.addEventListener('resize', function() {
		    engine.resize();
		});


});