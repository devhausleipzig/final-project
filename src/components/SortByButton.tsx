import { useState } from "react";
import { Tab } from "@headlessui/react";

type Category = string;
type Post = {
	id: number;
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export function SortByButton() {
	let [categories] = useState<Record<Category, Post[]>>({
		RECENT: [{ id: 1 }],
		CATEGORY: [{ id: 2 }],
		ALPHABETIC: [{ id: 3 }],
	});
	return (
		<div className=" w-96 h-8 px-2 py-16">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-secondary-transparent p-1">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2.5 font-medium leading-5  text-text-white focus:outline-none",
									selected
										? "bg-primary-default-Solid text-text-white"
										: "text-ux-inactive"
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
			</Tab.Group>
		</div>
	);
}
