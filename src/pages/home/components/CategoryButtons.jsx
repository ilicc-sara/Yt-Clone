import { categories } from "@/assets/data";

function CategoryButtons(props) {
  const { id, setId } = props;
  return categories.map((category, index) => (
    <div
      key={index}
      className={`category-item ${category.id === id ? "active" : ""}`}
    >
      <ion-icon
        name={
          category.icon.includes("logo")
            ? `${category.icon}`
            : `${category.icon}-outline`
        }
      ></ion-icon>
      <a key={index} onClick={() => setId(category.id)}>
        {category.name}
      </a>
    </div>
  ));
}

export default CategoryButtons;
