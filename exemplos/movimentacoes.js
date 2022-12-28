/* 
Esse script é um exemplo de uma heuristica que pode ser usada para transformar as propriedades de uma transação em um array de movimentações.
*/

const run = function (
	total = 100,
	entry = 20,
	fee = 0.05,
	interest = 0.05,
	installmentNum = 2
) {
	let movements = [];

	const feeValue = total * fee;

	const merchantValue = total - feeValue;

	// As três primeiras movimentações são as que vão acontecer "hoje", a entrada, a venda e a taxa de processamento
	movements.push({
		value: -entry,
		accRole: "buyer",
		type: "entry",
		transferDate: "today",
	});

	movements.push({
		value: merchantValue,
		accRole: "merchant",
		type: "sell",
		transferDate: "today",
	});

	movements.push({
		value: feeValue,
		accRole: "processor",
		type: "processing fee",
		transferDate: "today",
	});

	const creditTotal = total - entry;

	const installmentValueBeforeInterest = Number(
		(creditTotal / installmentNum).toFixed(2)
	);

	const installmentInterest = Number(
		(installmentValueBeforeInterest * interest).toFixed(2)
	);

	// Depois disso, colocamos duas entradas para cada parcela, o valor pago pelo cliente e o valor que deve cair na conta do financiador.
	for (let i = 0; i < installmentNum; i++) {
		const paymentDate = `${i + 1} month(s) from today`;

		movements.push({
			value: -(installmentValueBeforeInterest + installmentInterest),
			accRole: "buyer",
			type: "installment pay",
			transferDate: paymentDate,
		});

		movements.push({
			value: installmentInterest,
			accRole: "processor",
			type: "interest",
			transferDate: paymentDate,
		});
	}

	console.log(movements);
};

run();
