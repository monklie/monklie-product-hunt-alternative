
export function ItemCard({ func, title, category }) {
    return  <div onClick={() => func(1)} style={{cursor: 'pointer', display: 'flex', gap: 10, padding: 10, paddingBottom: 40, background: '#F4F4F4', borderRadius: 15}}>
        <p>{title} -</p>
        <p style={{fontWeight: 'bold'}}>{category}</p>
    </div>;
}
