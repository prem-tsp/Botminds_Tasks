const PaginationTypescript = require('./Pagination-typescript')



var recordsObj = [
    {id: 1, name: 'Jim Halpert'},
    {id: 2, name: 'Dwight K Schrute'},
    {id: 3, name: 'Andy'},
    {id: 4, name: 'Creed Bratton'},
    {id: 5, name: 'Michael Scott'}
]
var obj = new PaginationTypescript(2, recordsObj)

test("Second Page", () => {
     obj.next()
    
    expect(obj.current).toStrictEqual([ { id: 3, name: 'Andy' }, { id: 4, name: 'Creed Bratton' } ]);
   });

   test("First Page", () => {
    
    obj.prev()
    
    expect(obj.isFirst).toStrictEqual(true)
   });

   test("Last Page", () => {
    obj.next()
    obj.next()
    
    expect(obj.isLast).toStrictEqual(true);
   });

   test("Last Page", () => {
    obj.next()
   
   expect(obj.isFirst).toStrictEqual(false);
  });

  test("Last Page", () => {
    obj.next()
   
   expect(obj.isLast).toStrictEqual(true);
  });

  test("Second Page", () => {
    obj.prev()
   
   expect(obj.pageNo).toStrictEqual(2);
  });