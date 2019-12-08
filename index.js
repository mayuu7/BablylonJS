window.addEventListener('DOMContentLoaded', function() {
        // All the following code is entered here.
        var canvas = document.getElementById('renderCanvas');
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = function() {
		    // Create a basic BJS Scene object.
		   	var scene = new BABYLON.Scene(engine);

		    var assetsManager = new BABYLON.AssetsManager(scene);
			var meshTask = assetsManager.addMeshTask("Darwin task", "", "../", "Darwin.glb");
			
			meshTask.onSuccess = function (task) {
			    task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
			}	

		    
			
			assetsManager.onFinish = function (tasks) {
				engine.runRenderLoop(function () {
					scene.render();
				});
			};
			
			assetsManager.load();

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