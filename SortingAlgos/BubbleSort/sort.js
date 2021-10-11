var unsortedArray = [];
function addATextBox() {
  var divData = document.getElementById("textboxes");
  var element = document.createElement("input");
  element.type = "text";
  element.className = "typo";
  divData.insertAdjacentHTML("beforeend", element.outerHTML);
}

function consstructArray() {
  var typoObjects = document.getElementsByClassName("typo");
  unsortedArray = [];

  Array.prototype.forEach.call(typoObjects, function (element) {
    if (element.value != "") 
    {
        unsortedArray.push(parseInt(element.value))
    };
  });
  return unsortedArray;
}

function bubbleSort(unsortedArray) {
  //step 1
  //check and call sort

  //step 2
  //if ort need do a bubble sort upto the last item

  //step 3
  //after each sort check sort needed until completely sorted
  unsortedArray = consstructArray();
  var i = 0;
  while (i <= unsortedArray.length) {
    if (unsortedArray[i] > unsortedArray[i + 1]) {
      //do a bubble sort
      unsortedArray = sort(unsortedArray);
      i = 0;
    } else {
      i++;
    }
  }
  showOutput(unsortedArray);
}

function sort(unsortedArray) {
  var i = 0;
  while (i <= unsortedArray.length) {
    if (unsortedArray[i] > unsortedArray[i + 1]) {
      var greaterValue = unsortedArray[i];
      unsortedArray[i] = unsortedArray[i + 1];
      unsortedArray[i + 1] = greaterValue;
    }
    i++;
  }
  return unsortedArray;
}

function showOutput(sortedArray)
{
    debugger;
    var div = document.getElementById('output');
   var labelElement =  document.createElement('label');
   labelElement.innerHTML = '';
   labelElement.innerHTML = sortedArray.join(' ,')
   div.innerHTML = labelElement.outerHTML;
}