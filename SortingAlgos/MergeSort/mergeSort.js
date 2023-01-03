var unsortedArray = [];

function consstructArray() {
  var typoObjects = document.getElementsByClassName("typo");
  unsortedArray = [];

  Array.prototype.forEach.call(typoObjects, function (element) {
    if (element.value != "") {
      unsortedArray.push(parseInt(element.value));
    }
  });
  return unsortedArray;
}

function mergeSort() {
    debugger;
    var unsortedData = consstructArray();
  //using divide and conquer method

  sort(0,unsortedData.length -1,unsortedData);
}

function merge()
{


}

function sort(startpoint, endpoint, arrayToBeSorted) {
    debugger;
    var toTheLeft = [];
    var toTheRight = [];
  //finding the midpoint m
  var m =
    arrayToBeSorted.length % 2 > 0
      ? Math.ceil((arrayToBeSorted.length) / 2)
      : arrayToBeSorted.length / 2;

    if(arrayToBeSorted.length == 2 && arrayToBeSorted[startpoint] > arrayToBeSorted[endpoint])
    {
        var sortedArray = [];
        // temp = arrayToBeSorted[endpoint];
        sortedArray.push(arrayToBeSorted[endpoint]);
        sortedArray.push(arrayToBeSorted[startpoint]);
        return sortedArray;
    }
  while (arrayToBeSorted.length > 1) {
    toTheLeft += sort(0, m -1, arrayToBeSorted.slice(startpoint, m));
    // toTheRight += sort(m,arrayToBeSorted.length -1, arrayToBeSorted.slice(m +1, arrayToBeSorted.length));
    merge();

    }
    
}

function showOutput(sortedArray) {
  var div = document.getElementById("output");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = "";
  labelElement.innerHTML = sortedArray.join(" ,");
  div.innerHTML = labelElement.outerHTML;

  _initial = startTime.getTime();
  _final = endTime.getTime();
  var dif = Math.round((_final - _initial) / (1000 * 60));
  var divStats = document.getElementById("stats");
  var elapsedTimeLabel = dif;
  labelElement.innerHTML = "";
  timeElapsed = labelElement.innerHTML =
    "Time Elapsed: " + elapsedTimeLabel.toString;
  divStats.innerHTML = labelElement.outerHTML;
}
