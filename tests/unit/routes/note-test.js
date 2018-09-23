import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | note', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:note');
    assert.ok(route);
  });
});
