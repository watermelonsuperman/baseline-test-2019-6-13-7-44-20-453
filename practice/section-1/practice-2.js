'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = new Array();
	var k = 0;
	for(var i = 0;i < collectionA.length;i++){
		for(var j = 0; j < collectionB.length;j++){
			for(var t = 0;t < collectionB[j].length;t++){
				if(collectionA[i] == collectionB[j][t]){
					result[k] = collectionA[i];
					k++;
				}
			}
		}
	}
    return result;
  
}
