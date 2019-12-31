function M (id, parent) {
  this.id = id;
  this.exports = {};
  if (parent && parent.children) {
    parent.children.push(this);
  }
  this.filename = null;
  this.loaded = false;
  this.children = [];
}

exports.M = M
console.log(module.exports)
