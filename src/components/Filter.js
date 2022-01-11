const FilterAllProducts = ({ products, title }) => {
  return (
    <div>
      {console.log({ products, title })}
      <div>
        {products
          .filter((item) => item.type === "Breakfast")
          .map((product) => (
            <div class="menus d-flex align-items-center">
              {/* <Link to={`/products/${product.id}`}> */}
              <div class="menu-img rounded-circle">
                <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
              </div>
              <div class="text-wrap">
                <div class="row align-items-start">
                  <div class="col-8">
                    <h4>{product.title}</h4>
                  </div>
                  <div class="col-4">
                    <h4 class="text-muted menu-price">${product.price}</h4>
                    <p class="text-muted menu-price">{product.weight}g</p>
                  </div>
                </div>
                <p>
                  {product.body} / {product.alergens}
                </p>
              </div>
              {/* </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilterAllProducts;
