// decode html entity into html text
export const decodeHtmlEntity = (str) => {
  var txt = document.createElement('textarea');
	txt.innerHTML = str;
	return txt.value;
};