

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
  price: ProductPrice;
}

type ProductCardProps = Product;


const ProductCardComponent = (
  {
    posts,
  }: {
    posts: Promise<Product[]>
  }
) => {

  const PRODUCTS_LIST = use(posts)

  return (
    <section>
      <div className="container">
        <div className="grid place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-1-card-${index}`} {...item} />
          ))}
        </div>
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
  const { regular, sale, currency } = price;

  return (
    <a
      href={'/'} // homepage
      className="block h-full w-full max-w-md transition-opacity hover:opacity-80"
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <Image
              width={500}
              height={500}
              src={images[0]}
              alt={title}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>

        </CardHeader>
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-auto">
            <Price onSale={sale != null} className="text-lg font-semibold">
              <PriceValue price={sale} currency={currency} variant="sale" />
              <PriceValue
                price={regular}
                currency={currency}
                variant="regular"
              />
            </Price>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductCardComponent };
