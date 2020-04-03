// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         function updateLaunchStatus() {
            let faultyItemsDiv = document.getElementById("faultyItems");
            let launchStatusH2 = document.getElementById("launchStatus");
            let pilotStatus = document.getElementById("pilotStatus");
            let copilotStatus = document.getElementById("copilotStatus");
            let fuelStatus = document.getElementById("fuelStatus")
            let cargoStatus = document.getElementById("cargoStatus")
            let hasFaultyItems = false;

            pilotStatus.innerHTML = `Pilot ${pilotName.value} ready for launch.`;
            copilotStatus.innerHTML = `Copilot ${copilotName.value} ready for launch.`;

            if (fuelLevel.value < 10000) {
               fuelStatus.innerHTML = `Fuel level too low for launch.`;
               hasFaultyItems = true;
            } else {
               fuelStatus.innerHTML = `Fuel level high enough for launch`;
            }

            if (cargoMass.value > 10000) {
               cargoStatus.innerHTML = `Cargo mass too high for launch.`;
               hasFaultyItems = true;
            } else {
               cargoStatus.innerHTML = `Cargo mass low enough for launch`;
            }

            if (hasFaultyItems) {
               faultyItemsDiv.style.visibility = "visible";
               launchStatusH2.innerHTML = `Shuttle Not Ready for Launch`;
               launchStatusH2.style.color = "red";
            } else {
               faultyItemsDiv.style.visibility = "hidden";
               launchStatusH2.innerHTML = `Shuttle is Ready for Launch`;
               launchStatusH2.style.color = "green";
            }
         }
         
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required.");
         } else if (typeof(pilotName.value) !== "string" || typeof(copilotName.value) !== "string" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Make sure to enter valid information for each field.");
         } else {
            updateLaunchStatus();
         }

         //Prevents page from resetting after form submission.
         event.preventDefault();
      });
   });