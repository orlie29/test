import { module, test } from 'qunit';
import { setupTest } from 'ohora/tests/helpers';

module('Unit | Route | requests', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:requests');
    assert.ok(route);
  });
});
