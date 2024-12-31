import JSONObject from './dummy.json' with {type:"json"};


const jsObject = {
  id: 44,
  dept: 'IT',
  campus: 'New Delhi',
};

function jsontoJSobject(jsObj) {
  return JSON.parse(jsObj);
}

function jsObjectTojson(jsonObject) {
  return JSON.stringify(jsonObject);
}

console.log(jsontoJSobject(JSONObject));
console.log(jsObjectTojson(jsObject));
