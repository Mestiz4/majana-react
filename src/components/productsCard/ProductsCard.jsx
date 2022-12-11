

const ProductsCard = ({element}) => {
  return (
    <div>
            <h2>{element.nombre}</h2>
            <img src={element.img} />
            <p>${element.precio}</p>
        </div>
  )
}

export default ProductsCard