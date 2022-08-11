const pdf = require("pdfjs");
const fs = require("fs");

const generatePDF = async (title, date, time, purpose, items) => {
	date = new Date(date).toDateString();
	const fileName = `./minutes${Date.now().toString()}.pdf`;

	const doc = new pdf.Document({
		font: require("pdfjs/font/Helvetica"),
		padding: 36,
	});
	doc.pipe(fs.createWriteStream(fileName));

	// Title
	doc.text(title ?? "Untitled", {
		textAlign: "center",
		lineHeight: 2.0,
		fontSize: 16,
	});
	// Date & Time
	doc.text(`Date: ${date ?? new Date().toDateString()}`, {
		fontSize: 12,
		lineHeight: 1.5,
	});
	doc
		.text(`Time: ${time ?? new Date().toTimeString()}`, {
			fontSize: 12,
		})
		.br();
	// Purpose of the meeting
	doc.text(`Purpose of the meeting`, {
		fontSize: 14,
	});
	doc
		.text(`     ${purpose ?? "Default"}`, {
			fontSize: 12,
			lineHeight: 1.5,
		})
		.br();
	// Items
	for (const item of items) {
		if (item.topic.length < 1 && item.details.length < 1) continue;

		doc.text(`${item.topic}`, {
			fontSize: 14,
		});
		doc
			.text(`     ${item.details}`, {
				fontSize: 12,
				lineHeight: 1.5,
			})
			.br();
	}

	// Finish PDF
	await doc.end();

	return fileName;
};

module.exports = {
	generatePDF
}