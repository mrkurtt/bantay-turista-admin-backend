const generateQrCode = async () => {
	const prefix = 'BT';

	const code = (
		await Math.random().toString(36).substring(2, 10)
	).toUpperCase();

	return `${prefix}${code}`;
};

module.exports = generateQrCode;
