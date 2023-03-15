import { RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import { clsx } from "clsx";
import { Category, List } from "@/pages/list/[slug]";

export function sortByAlphabet(input: List) {
  const sorted = [...input.item];
  sorted.sort((a, b) => {
    const nameA = a.item.toUpperCase();
    const nameB = b.item.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sorted;
}
export function sortByCategory(input: Category) {
  const sorted = [...input.item];
  sorted.sort((a, b) => {
    const categoryA = a.category.toUpperCase();
    const categoryB = b.category.toUpperCase();

    const nameA = a.item.toUpperCase();
    const nameB = b.item.toUpperCase();

    if (categoryA < categoryB) {
      return -1;
    }
    if (categoryA > categoryB) {
      return 1;
    }

    if (categoryA === categoryB) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return 0;
  });
  return sorted;
}

export function sortByDate() {
  const sorted = [...input];
  sorted.sort((a, b) => {
    const nameA = a.item.toUpperCase();
    const nameB = b.item.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sorted;
}

type SortByProps = {
  sortBy: string;
  setSort: Dispatch<SetStateAction<string>>;
};

export function SortBySwitches(props: SortByProps) {
  return (
    <RadioGroup
      className="font-sans flex flex-row justify-center items-center bg-secondary-transparent text-sm h-7 rounded-listitem"
      value={props.sortBy}
      onChange={props.setSort}
    >
      <RadioGroup.Option className="h-full w-1/3" value="date">
        {({ checked }) => (
          <p
            className={clsx(
              "h-full w-full flex justify-center items-center rounded-listitem",
              checked && "bg-primary-default-background text-text-white"
            )}
          >
            Date
          </p>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option className="h-full w-1/3" value="category">
        {({ checked }) => (
          <p
            className={clsx(
              "h-full w-full  flex justify-center items-center rounded-listitem",
              checked && "bg-primary-default-background text-text-white"
            )}
          >
            Category
          </p>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option className="h-full w-1/3" value="alphabetical">
        {({ checked }) => (
          <p
            className={clsx(
              "h-full w-full flex justify-center items-center rounded-listitem",
              checked && "bg-primary-default-background text-text-white"
            )}
          >
            Alphabetical
          </p>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}
