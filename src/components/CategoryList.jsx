import React from 'react';
import './styles/CategoryList.css';

function CategoryList({ categories, onSelect }) {
  return (
    <div className="category-list">
      {categories.map((cat) => (
        <div key={cat.id} className="category-card" onClick={() => onSelect(cat)}>
          <img src={cat.icon} alt={cat.name} className="category-icon" />
          <p className="category-name">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
