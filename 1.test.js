const { id, compose } = require('./1');

it('works', () => {
	expect(id(1)).toBe(1);
	expect(
		compose(
			id,
			id,
		)(1),
	).toBe(1);
});
