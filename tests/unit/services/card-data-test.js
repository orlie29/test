import { module, test } from 'qunit';
import { setupTest } from 'ohora/tests/helpers';

module('Unit | Service | card-data', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:card-data');
    assert.ok(service);
  });
});
