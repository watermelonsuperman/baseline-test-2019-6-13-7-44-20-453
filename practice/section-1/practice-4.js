'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
	var k = 0;
	for(var i = 0;i < collectionA.length;i++){
			for(var t = 0;t < collectionB.value.length;t++){
				if(collectionA[i].key == collectionB.value[t]){
					result[k] = collectionA[i].key;
					k++;
				}
			}
		
	}
    return result;
}
