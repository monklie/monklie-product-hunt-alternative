export function ResultView({json}) {
    return <div style={{marginTop: 20, display: 'flex', padding: 10, background: '#F4F4F4', gap: 10, borderRadius: 15}}> 
        <div>
            <img src={json.selectedImage} style={{width: 200, height: 'auto'}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontWeight: 'bold'}}>Name</p>
            <p>{json.name}</p>
            <p style={{fmarginTop: 10, fontWeight: 'bold'}}>Description</p>
            <p>{json.personaDescription}</p>
            <p style={{marginTop: 10, fontWeight: 'bold'}}>Job</p>
            <p>{json.job}</p>
            <p style={{marginTop: 10, fontWeight: 'bold'}}>Responsable for</p>
            <p>{json.responsabilities}</p>
            <p style={{marginTop: 10, fontWeight: 'bold'}}>Reaction to problem statement</p>
            <p>{json.responseToSituation}</p>
        </div>
    </div>
}