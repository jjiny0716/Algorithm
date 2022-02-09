function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}


PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex > this.collection.length / this.itemsPerPage) return -1;
  if (pageIndex < Math.floor(this.collection.length / this.itemsPerPage)) return this.itemsPerPage;
  else return this.collection.length % this.itemsPerPage;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
  return Math.floor(itemIndex / this.itemsPerPage);
}


const h = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(h.collection);
console.log(h.itemCount());

console.log(h.pageCount()); //should == 2
console.log(h.itemCount()); //should == 6
console.log(h.pageItemCount(0)); //should == 4
console.log(h.pageItemCount(1)); // last page - should == 2
console.log(h.pageItemCount(2)); // should == -1 since the page is inv
console.log(h.pageIndex(5)); //should == 1 (zero based index)
console.log(h.pageIndex(2)); //should == 0
console.log(h.pageIndex(20)); //should == -1
console.log(h.pageIndex(-10)); //should == -1

