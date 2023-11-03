interface ItemProps {
  image: string;
  title: string;
  description: string;
}

function Item({ image, title, description }: ItemProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-sm font-bold">{title}</p>
        <div className="flex justify-center items-center pt-4">
          <img className="w-32" src={image} alt="" />
        </div>
        <p className="mt-4 text-sm text-gray-700">{description}</p>
      </div>
    </>
  );
}

function Category({ isCategory }: { isCategory: string }) {
  return (
    <>
      {isCategory === "mac" && (
        <div className="p-2.5">
          <h2 className="mb-8 text-xl font-bold">category - {isCategory}</h2>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-x-2.5 gap-y-5">
            <Item
              image="https://www.apple.com/v/mac/compare/z/images/overview/compare_macbook_air_m2_15_silver__exe34fwsmkq6_large_2x.jpg"
              title="MacBook Air 15-in."
              description="198,800円（税込）"
            />
            <Item
              image="https://www.apple.com/v/mac/compare/z/images/overview/compare_macbook_pro_14_silver__vhx3tykmuluu_large_2x.jpg"
              title="MacBook Pro 14-in."
              description="248,800円（税込）"
            />
            <Item
              image="https://www.apple.com/v/mac/compare/z/images/overview/compare_macbook_pro_16_silver__epdhc1rykpw2_large_2x.jpg"
              title="MacBook Pro 16-in."
              description="398,800円（税込）"
            />
          </div>
        </div>
      )}
      {isCategory === "iphone" && (
        <div className="p-2.5">
          <h2 className="mb-8 text-xl font-bold">category - {isCategory}</h2>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-x-2.5 gap-y-5">
            <Item
              image="https://www.apple.com/v/iphone/compare/ae/images/overview/compare_iphone15_pro_max_black_titanium__f84o6hevii2q_large_2x.jpg"
              title="iPhone 15 Pro Max"
              description="189,800円（税込）"
            />
            <Item
              image="https://www.apple.com/v/iphone/compare/ae/images/overview/compare_iphone15_pro_black_titanium__fqpdna4tvtym_large_2x.jpg"
              title="iPhone 15 Pro"
              description="159,800円（税込）"
            />
            <Item
              image="https://www.apple.com/v/iphone/compare/ae/images/overview/compare_iphone15_black__dctrrofz8vwy_large_2x.jpg"
              title="iPhone 15"
              description="124,800円（税込）"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="max-w-md mx-auto">
      <Category isCategory="mac" />
      <Category isCategory="iphone" />
    </div>
  );
}
