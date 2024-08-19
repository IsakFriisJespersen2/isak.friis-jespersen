import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD
	}
});

interface Email {
	name: string;
	email: string;
	message: string;
}

export async function POST({ request }: { request: Request }) {
	const body: Email = await request.json();

	let mailOptions = {
		from: body.email, // Sender address
		to: process.env.GMAIL_USER, // List of receivers
		subject: `Contact from Portfolio from ${body.name}`, // Subject line
		text: body.message // Plain text body
	};

	const res = await transporter.sendMail(mailOptions);

	console.log(res);

	if (res.rejected.length > 1) {
		throw Error('Email could not be sent!');
	}

	return new Response(
		JSON.stringify({
			message: 'Message sent!'
		}),
		{
			status: 200
		}
	);
}
