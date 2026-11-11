
import { ProductDetailComponent } from "@/components/products/ProductDetailComponent";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: number }>
}) {
  const { slug } = await params;

  const getSingleProduct = (slug:number) =>
  fetch(`https://dummyjson.com/products/${slug}`)
    .then(data => data.json())//convert from json to js object
    .then(blogs => blogs) //return js object from then above
    .catch(error => error) // promise rejected

  const singleProduct = getSingleProduct(slug);

  return (
    <ProductDetailComponent posts={singleProduct}/>
  )
}