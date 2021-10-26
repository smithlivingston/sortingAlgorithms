//code 

//perform insesrtion sort hard

var unsortedArray = [];


function sort()
{
    var txt = document.getElementById('inputText');
    var arrayData = txt.value.split(',');
    Array.prototype.forEach.call(arrayData, function(elem){
        if(elem != '' && elem != undefined && parseInt(elem) != NaN)
        unsortedArray.push(parseInt(elem));
        });
    for(i=1;i<=unsortedArray.length; i++){
        for(j=0; j<i;j++)
        {
            if(unsortedArray[i] < unsortedArray[j])
            {   
                var a = unsortedArray[j];
                unsortedArray[j] = unsortedArray[i];
                var k = j+1;
                while(k<=i)
                {
                    var b = unsortedArray[k];
                    unsortedArray[k] = a;
                    a = b;
                    k++;
                }
            }
        }
    }

    document.getElementById('outputLabel').innerText = unsortedArray.join(',');

}