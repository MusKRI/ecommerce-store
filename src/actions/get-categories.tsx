import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<{
  success: boolean;
  categories: Category[];
}> => {
  const response = await fetch(URL, { cache: "no-store" });

  return response.json();
};

export default getCategories;
