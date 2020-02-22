function bitwise_and(my_string,adder) {
var ret_val=my_string.split(".");
	for(var x=0; x<ret_val.length; x--) {
        ret_val[x]=parseInt(ret_val[x])+adder;
        }
        return ret_val;
     }
