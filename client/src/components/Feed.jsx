import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { client } from "../client"
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query)
        .then(data => {
          setPins(data);
          setLoading(false);
        })
        .catch(err => console.error(err));
    } else {
      client
        .fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [categoryId]);

  if (loading) return <Spinner message={`We are adding your feeds!`} />

  if (!pins?.length) return <h2 className="w-f flex justify-center items-center text-base text-blue-400">No pins available now ( _ _ )</h2>

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed
