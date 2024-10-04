
export function Sidebar({func}) {
    return <div style={{position: 'fixed', width: '200px', padding: 10, height: '100vh', background: '#3A7C78'}}>
         <div style={{display: 'flex', alignItems: 'center'}}>
            <img height={30} src="home.png"></img>
            <p onClick={() => func(0)}  style={{cursor: 'pointer', marginTop: 3, marginLeft: 10, fontWeight: 'bold' , color: 'white'}}>Monklie</p>
         </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 25}}>
            <div style={{marginTop: 45, display: 'flex', alignItems: 'center'}}>
                <img height={30} src="marketing.png"></img>
                <p onClick={() => func(3)} style={{marginTop: 3, marginLeft: 10, color: 'white'}}>Promotion</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img height={30} src="chart.png"></img>
                <p onClick={() => func(4)} style={{marginTop: 3, marginLeft: 10, color: 'white'}}>Research</p>
            </div>
        </div>
    </div>;
}