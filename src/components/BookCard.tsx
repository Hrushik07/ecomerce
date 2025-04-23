import { Link } from "react-router-dom";

interface BookCardProps {
    id: string;
    title: string;
    image: string;
    price: number;
    }

const BookCard : React.FC<BookCardProps> = ({id,title,image,price}) => {
  return (
    <div className="border p-4 rounded">
    <Link to={`/products/${id}`} className="flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />     
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">${price}</p>
    </Link>
    </div>
    );
    
}

export default BookCard