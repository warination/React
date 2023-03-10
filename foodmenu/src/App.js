import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from './data'

function App() {

  const allCategories = ['all', ...new Set(data.map((item)=> item.category))]

  const [menuItems, setMenuItems] = useState(data);

  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item)=> item.category === category);
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'>

          </div>
        </div>
        <Categories filterItems ={filterItems} categories={categories} />
        <Menu items= {menuItems}/>
      </section>


    </main>
  );
}

export default App;
