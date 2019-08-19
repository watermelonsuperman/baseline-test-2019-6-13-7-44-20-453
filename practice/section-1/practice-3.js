'use strict';

function collectSameElements(collectionA, objectB) {
	var result = new Array();
	var k = 0;
	for(var i = 0;i < collectionA.length;i++){
			for(var t = 0;t < objectB.value.length;t++){
				if(collectionA[i] == objectB.value[t]){
					result[k] = collectionA[i];
					k++;
				}
			}
		
	}
    return result;
}
