import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Section = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=American`
        );
        const data = await res.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleDogData();
  }, [name]);

  return (
    <section>
      {dog &&
        dog.map((item) => {
          return (
            <Link
                    to={`/${item.name}`}
                    key={item.id}
                    className="linkclass"
                  >
            <div class="card">
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt="Avatar"
              />
              <div class="container">
                <h4>
                  <b>{item.name}</b>
                </h4>
              </div>
            </div>
            </Link>
          );
        })}
    </section>
  );
};

export default Section;
