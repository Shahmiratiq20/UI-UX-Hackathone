import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/prod8.png", // Ensure this image exists in the public folder
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "/prod7.png", // Ensure this image exists in the public folder
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/prod1.png", // Ensure this image exists in the public folder
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/prod2.png", // Ensure this image exists in the public folder
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/prod6.png", // Ensure this image exists in the public folder
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/prod4.png", // Ensure this image exists in the public folder
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/prod5.png", // Ensure this image exists in the public folder
      description: "A software engineer specializing in backend systems.",
    },
  ];

  return (
    <>
      <div className="product">
        <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
      </div>
      <div className="cardsContainer">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <Image
              src={card.image} // Use Image component for optimization
              alt={card.name}
              width={288} // Set width (adjust as needed)
              height={288} // Set height (adjust as needed)
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mb-12">
        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">
          Show More
        </button>
      </div>
    </>
  );
}
