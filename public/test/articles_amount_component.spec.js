describe('component: articlesList', function() {
  var $componentController;
  var $scope;
  
  beforeEach(module('articles'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a articles object', function() {
    // Here we are passing actual bindings to the component
    var bindings = {articles: [1,2,3,4]};
    var ctrl = $componentController('articlesList', null, bindings);

    expect(ctrl.articles).toBeDefined();
    // expect(ctrl.hero.name).toBe('Wolverine');
  });

  // it('should call the `onDelete` binding, when deleting the hero', function() {
  //   var onDeleteSpy = jasmine.createSpy('onDelete');
  //   var bindings = {hero: {}, onDelete: onDeleteSpy};
  //   var ctrl = $componentController('heroDetail', null, bindings);

  //   ctrl.delete();
  //   expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
  // });

  // it('should call the `onUpdate` binding, when updating a property', function() {
  //   var onUpdateSpy = jasmine.createSpy('onUpdate');
  //   var bindings = {hero: {}, onUpdate: onUpdateSpy};
  //   var ctrl = $componentController('heroDetail', null, bindings);

  //   ctrl.update('foo', 'bar');
  //   expect(onUpdateSpy).toHaveBeenCalledWith({
  //     hero: ctrl.hero,
  //     prop: 'foo',
  //     value: 'bar'
  //   });
  // });

});