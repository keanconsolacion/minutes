const express = require("express");
const { generatePDF } = require("./utils/pdf");
const fs = require("fs");

const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());
app.listen(port, () => console.log(`Server started at port ${port}`));

app.post("/generatePDF", async (req, res) => {
	try {
		let { title, date, time, purpose, items } = req.body;
		const filePath = await generatePDF(title, date, time, purpose, items);

		setTimeout(() => {
			res.attachment(filePath);
			res.download(filePath, (err) => {
				setTimeout(() => {
					fs.unlink(filePath, (err) => console.log("Error on deletion:", err));
				}, 2000);
			});
		}, 2000);
	} catch (e) {
		console.log(e);
		res.status(500).send({ error: "Something went wrong on generating the PDF" });
	}
});
