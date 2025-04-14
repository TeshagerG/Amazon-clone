import React from 'react';
import { categoryInfos } from './categoryFullInfo'; // Ensure the file path is correct
import CategoryCard from './CategoryCard';
import classes from "./Category.module.css";

function Category() {
  // Debugging log
  console.log("catagoryInfos data loaded:", categoryInfos);

  return (
    <div>
      <section className={classes.category_container}>
        {categoryInfos.length > 0 ? (
          categoryInfos.map((info, index) => (
            <CategoryCard key={index} data={info} /> // Pass entire object as data prop
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </section>
    </div>
  );
}

export default Category;


