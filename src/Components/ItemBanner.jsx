function ItemBanner({titles, description}) {
    return (
        <div>
            <h6>{titles}</h6>
            <span>
              {description}
            </span>
        </div>
    )
}

export default ItemBanner;