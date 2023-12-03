// **** ACTIONS ****
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

// **** COMPONENTS ****
import Billboard from "@/components/billboard/billboard";
import ProductList from "@/components/product-list/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function Home() {
  const productsResponse = await getProducts({ isFeatured: true });
  const billboardResponse = await getBillboard("652bd16ef2b99889135d1802");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboardResponse.billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title="Featured Products"
            items={productsResponse.products}
          />
        </div>
      </div>
    </Container>
  );
}
