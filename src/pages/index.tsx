import EditModal from "@/components/EditModal";
import Head from "next/head";

import { prisma } from "./api/prisma";

export default function Home() {
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
			<h1 className="text-red-600 text-4xl font-bold flex justify-center">
				Landing Page
			</h1>
			<EditModal />
		</>
	);
}
