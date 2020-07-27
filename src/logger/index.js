const logger = Java.use("org.slf4j.Logger");

const debug = logger.debug.overload("java.lang.String");

debug.implementation = function(str) {
	console.log(str);
	debug.call(str);
};

