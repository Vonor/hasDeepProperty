module.exports = (object, key) => {
  var values = [];
  const fn = (object) => {
    if (key in object) values.push(object[key]);

    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        if (typeof object[property] == "object") {
         fn(object[property]);
        }
      }
    }
  }
  fn(object);
  return values;
} 

