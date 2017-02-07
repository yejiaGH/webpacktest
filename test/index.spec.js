describe('hello test', () => {
	it('test example', () => {});
	it('chai example', () => {
		expect('hi').to.equal('hi');
	});
	it('chai test 3', () => {
		throw new Erro('test case failed');
	});
});