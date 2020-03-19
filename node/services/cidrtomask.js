export const cidrToMaskFunction = (value) => {
//console.log(value);
  
 if(Number.isNaN(value)) {
 return "Invalid" 
          }
           
 if (value>=0 && value<=32) {
    return createNetmaskAddr(value);
   	        }
      	else {
return "Invalid"
		}
}
