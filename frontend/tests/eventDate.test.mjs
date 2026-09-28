import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatEventDate } from '../src/components/events/eventDate.ts';

test('calendar dates stay identical in server and visitor time zones', () => {
  const previous = process.env.TZ;
  try {
    for (const zone of ['UTC', 'America/Sao_Paulo', 'America/Los_Angeles', 'Pacific/Kiritimati']) {
      process.env.TZ = zone;
      assert.deepEqual(formatEventDate('2026-01-11'), {
        day: '11', month: 'JAN', full: '11 de janeiro de 2026',
      }, zone);
      assert.equal(formatEventDate('2026-01-01').full, '01 de janeiro de 2026', zone);
      assert.equal(formatEventDate('2024-02-29').full, '29 de fevereiro de 2024', zone);
    }
  } finally {
    if (previous === undefined) delete process.env.TZ;
    else process.env.TZ = previous;
  }
});

test('missing or unparseable dates do not render', () => {
  for (const value of [undefined, '', 'invalid']) assert.equal(formatEventDate(value), null);
});
