const itemsService = require('../src/itemsService')
const itemsData= require('../src/itemsData')
const sinon = require('sinon')

test("Deve obter os items", async () =>{
  const items = await itemsService.getItems(itemsData)
	expect(items).toHaveLength(3);
})

test("Deve obter os items com stub", async () =>{
  sinon.stub(itemsData, 'getItems').returns([{ id_item: 4}])
  const items = await itemsService.getItems(itemsData)
	expect(items).toHaveLength(1);
  sinon.restore()
})

test("Deve obter os items com spy", async () =>{
  const spy = sinon.spy(itemsData, 'getItems')
  const items = await itemsService.getItems(itemsData)
	expect(items).toHaveLength(3);
  sinon.assert.calledOnce(spy)
  sinon.restore()
})

test("Deve obter os items com mock", async () =>{
  const mock = sinon.mock(itemsService)
  mock.expects("getItems").once().returns([{ id_item: 4}])
  const items = await itemsService.getItems(itemsData)
	expect(items).toHaveLength(1);
  mock.verify()
  sinon.restore()
})

test("Deve obter os items com fake", async () =>{
  const itemsDataFake = {
    getItems() {
      return [
        { id_item: 1 },
        { id_item: 2 },
        { id_item: 3 }
      ]
    }
  }
  const items = await itemsService.getItems(itemsDataFake)
	expect(items).toHaveLength(3);
  sinon.restore()
})