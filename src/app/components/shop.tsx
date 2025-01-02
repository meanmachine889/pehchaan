import Image from "next/image";

const products = [
  { id: 1, name: "T-Shirts", price: "$29.99", link: "https://i.pinimg.com/736x/d9/d2/8b/d9d28b0d0140ec57ede04a203e53574d.jpg" },
  { id: 2, name: "Hoodies", price: "$59.99", link: "https://i.pinimg.com/736x/e2/97/5a/e2975a642e6b8e878fba1824a64bec5d.jpg" },
  { id: 3, name: "Vinyl Records", price: "$24.99", link: "https://i.pinimg.com/736x/b7/e5/5a/b7e55a02d80df562616f851bd4efeb18.jpg" },
  { id: 4, name: "Posters", price: "$19.99", link: "https://i.pinimg.com/736x/dd/08/a6/dd08a679a84f2e1b979f7ccf123b4247.jpg" },
  { id: 5, name: "Accessories", price: "$14.99", link: "https://i.pinimg.com/736x/ba/6e/a5/ba6ea5c91af6532a18fca701b115786b.jpg" },
];

export default function Shop() {
  return (
    <div className="w-[95%] flex items-center justify-center rounded-xl border-2 border-zinc-800 p-[3vw] py-[4vw]">
      <div className="w-full md:px-0 px-3 flex flex-col gap-9 md:py-0 py-5">
        <h2 className="text-[7vw] md:text-[3vw] text-gray-300 mb-[3vw] md:text-left text-center">Shop Merch</h2>
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-9 md:gap-[3vw]">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  name: string;
  price: string;
  link: string;
}

function ProductCard({ name, price, link }: ProductCardProps) {
  return (
    <div className="rounded-2xl flex flex-col gap-5">
      <div className="aspect-square overflow-hidden rounded-xl">
        <Image
          width={300}
          height={300}
          quality={100}
          src={link}
          alt={`The Weeknd ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[6.5vw] sm:text-[2vw] md:text-[1.2vw] text-gray-300">{name}</p>
        <p className="text-[5.5vw] sm:text-[1.8vw] md:text-[1.2vw] text-gray-400">{price}</p>
      </div>
    </div>
  );
}

