import Head from "next/head";
import Input from "@/components/Input";
import Image from "next/image";
import logo from "public/images/logo.png";
import { PlusButton } from "@/components/PlusButton";

export default function Login() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Image src={logo} alt="" className="w-full" />
			<Input />
		</>
	);
}
