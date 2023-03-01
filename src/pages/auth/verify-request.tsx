import Head from "next/head";

export default function VerifyRequest() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-red-600 text-4xl font-bold flex justify-center">
				check your email{" "}
			</h1>
		</>
	);
}
