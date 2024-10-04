import Link from 'next/link'

export function ItemCard({ func, title, category }) {
    return  <div onClick={() => func(1)}  style={{cursor: 'pointer', display: 'flex', gap: 10, padding: 10, paddingBottom: 40, background: '#F4F4F4', borderRadius: 15}}>
        <p>{title} -</p>
        <p style={{fontWeight: 'bold'}}>{category}</p>
    </div>;
}



export function ItemCard2({ image, func, title, name, website }) {
    return  <Link href={website} rel="noopener noreferrer" target="_blank"><div style={{cursor: 'pointer', display: 'flex', gap: 10, padding: 10, paddingBottom: 10, background: '#F4F4F4', borderRadius: 15}}>
        <img src={image} height={50}></img>
        <p style={{fontWeight: 'bold'}}>{name}</p>
        <p>{title}</p>
        {/* onClick={() => func(1)}  */}
    </div> </Link>; 
}
