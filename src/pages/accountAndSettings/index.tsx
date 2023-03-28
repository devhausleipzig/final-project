import { Tab } from "@headlessui/react";
import { Account, User } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import AccountView from "./account";
import Settings from "./settings";
// import { UserCircleIcon } from "@heroicons/react/24/outline";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const getUserInfo = async (email: string) => {
	const John: User = await axios
		.get(`http://localhost:3000/api/userInfo?email=${email}`)
		.then((res) => res.data);
	return John;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession({ req: context.req });

	const user = session?.user;

	return {
		...(user
			? {
					props: {
						user: session?.user,
					},
			  }
			: {
					redirect: {
						permanent: false,
						destination: "auth/signin",
					},
			  }),
	};
};

type AccountAndSettingsProps = {
	user: User;
};

export default function AccountAndSettings({ user }: AccountAndSettingsProps) {
	// define queries & mutations here
	const queryClient = useQueryClient();
	const { data: player } = useQuery(["useInfo"], () =>
		getUserInfo(user.email as string)
	);

	const { mutate: refresh } = useMutation(getUserInfo, {
		onSuccess: () => {
			queryClient.invalidateQueries(["useInfo"]);
		},
	});

	const options = {
		Account: <AccountView user={player as User} refresh={refresh} />,
		Settings: <Settings />,
	};

	const optionLabels = Object.keys(options) as (keyof typeof options)[];
	const optionComponents = Object.values(
		options
	) as typeof options[keyof typeof options][];

	const initialSelected = optionLabels[0];
	const [selected, setSelected] = useState(
		initialSelected as keyof typeof options
	);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-full">
				<Link href="/home">
					<FiChevronLeft size={28} />
				</Link>
				<Tab.Group
					onChange={(index) => {
						setSelected(optionLabels[index]);
					}}
				>
					<Tab.List className="flex rounded-md bg-secondary-default text-sm ">
						{optionLabels.map((label) => (
							<Tab className="w-full flex" key={label as string}>
								{({ selected }) => (
									<label
										className={clsx(
											"rounded-md w-full",
											selected
												? "bg-primary-default-Solid text-text-white"
												: "bg-secondary-default text-text-typo"
										)}
									>
										{label as string}
									</label>
								)}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels>
						{optionComponents.map((option, idx) => (
							<Tab.Panel key={idx} className={""}>
								{option}
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</div>
		</>
	);
}