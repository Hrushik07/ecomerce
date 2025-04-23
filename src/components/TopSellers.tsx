import { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}
const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));

        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchdata();
  }, []);

  const handleFollowClick=(index :number)=>{
      setAuthors(prevAuthor=> prevAuthor.map((author,i)=>i===index ? {...author,isFollowing : !author.isFollowing}:author))
  }

  return (
    <div className="bg-white p-5 mx-5 mt-[2rem] border-0 w-[23rem] rounded] ">
      <h2 className="text-xl font-bold mb-5">Top sellers</h2>

      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex item-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-25%] justify-center rounded-full"
              />
              <span className="ml-4">{author.name}</span>
            </section>
            <button
              className={`py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-black text-white"
              }`}
              onClick={() => handleFollowClick(index)}
            >
              {author.isFollowing ? "unfollow" : "follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
