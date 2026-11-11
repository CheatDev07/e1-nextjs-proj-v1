
import { Price, PriceValue } from "@/components/products/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { use } from "react";

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

interface Product {
  title: string;
  images: string[];
  description: string;
  price: number;
}

type ProductCardProps = Product;


const ProductDetailComponent = (
  {
    posts,
  }: {
    posts: Promise<Product>
  }
) => {

  const PRODUCTS_LIST = use(posts)

  return (
    <section>
      <div className="container">
        <ProductCard {...PRODUCTS_LIST} />
      </div>
    </section>
  );
};

const ProductCard = ({
  title,
  description,
  // link,
  images,
  // badge,
  price,
}: ProductCardProps) => {

  return (
    <a
      href={'/'} // homepage
    >
      <Card className="container grid grid-cols-2 gap-6 p-5">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <Image
              width={500}
              height={500}
              src={images[0]}
              alt={title}
              className="block size-full object-contain object-center"
            />
          </AspectRatio>

        </CardHeader>
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <PriceValue price={price} variant="sale" className="text-xl font-bold text-red-500" />
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductDetailComponent };
