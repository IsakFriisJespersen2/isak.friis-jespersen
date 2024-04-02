import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
	service: 'gmail', // Use Gmail's service
	auth: {
		user: 'isak.friisjespersen@gmail.com', // Your Gmail address
		pass: 'epky wypi myji cuae' // Your Gmail password or App Password
	}
});

// Set up email data with unicode symbols
let mailOptions = {
	from: 'isak.friisjespersen@gmail.com', // Sender address
	to: 'isak.friisjespersen@gmail.com', // List of receivers
	subject: 'Hello ✔', // Subject line
	text: 'Hello world?', // Plain text body
	html: '<b>Hello world?</b>' // HTML body content
};

export async function GET({ request }: { request: Request }) {
	// const { email, password } = await request.json();

	// ...
	// Insert your real logic here
	// ...

	// An example of a simple response
	// Send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
	});
	return new Response(
		JSON.stringify({
			message: 'Hello world!'
		}),
		{
			status: 200
		}
	);
}
