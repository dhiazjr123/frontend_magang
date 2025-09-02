import { TProduct } from "@/app/products/types/product.type";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const endPoint = "https://dummyjson.com/products";

const Page = async ({ searchParams }: Props) => {
  // Ambil dan validasi angka
  const limitNum = Number(
    Array.isArray(searchParams.limit) ? searchParams.limit[0] : searchParams.limit
  );
  const skipNum = Number(
    Array.isArray(searchParams.skip) ? searchParams.skip[0] : searchParams.skip
  );

  const params = new URLSearchParams();
  if (!Number.isNaN(limitNum)) params.set("limit", String(limitNum));
  if (!Number.isNaN(skipNum)) params.set("skip", String(skipNum));

  const res = await fetch(
    `${endPoint}${params.toString() ? `?${params.toString()}` : ""}`,
    { cache: "no-store" } // opsional
  );

  if (!res.ok) {
    return <div>Gagal memuat produk (status {res.status}).</div>;
  }

  const data = await res.json();
  const products: TProduct[] | undefined = data?.products;

  if (!products) {
    return <div>Data produk tidak ditemukan.</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p className="text-2xl">{product.title}</p>
          <p className="text-base">{product.description}</p>
          <Link href={`/products/${product.id}`}>Goto {product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
