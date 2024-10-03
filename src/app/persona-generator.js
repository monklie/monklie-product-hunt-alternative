
'use client';
import React, { useState, useEffect } from "react";
import { ResultView } from "./result-view";

export function PersonaGenerator({func}) {

    const [problem, setProblem] = useState('');
    const [hasHouse, setHasHouse] = useState(false);
    const [hasCar, setHasCar] = useState(false);
    const [isOfficeWorker, setIsOfficeWorker] = useState(false);
    const [saveTime, setSaveTime] = useState(false);
    const [saveMoney, setSaveMoney] = useState(false);
    const [saveStress, setSaveStress] = useState(false);

    const [showResult, setShowResult] = useState(false);
    const [json, setJson] = useState();

    const handleButtonClick = () => {
        setShowResult(false);
        (async () => {
            const data = { problem: problem, hasHouse: hasHouse , hasCar: hasCar, isOfficeWorker: isOfficeWorker, saveTime: saveTime, saveMoney: saveMoney, saveStress: saveStress};
            //http://localhost:1337
            const response = await fetch('https://monkliebackend-1ae4ebd48e7f.herokuapp.com/generatepersona', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            // console.log('client secret ' + tempClientSecret);
            console.log(result.value);
            setJson(result.value);
            setShowResult(true)
          })();
    }



    return <div style={{display: 'flex', flexDirection: 'column', flex: 1, padding: 20}}>
        <p onClick={() => func(0)} style={{cursor: 'pointer', fontSize: 18, marginBottom: 10, textDecoration: 'underline'}}>Back</p>
        <p style={{marginBottom: 10}}>Requirements for persona</p>
        <ToggleWithText title={'Owns house'} val={hasHouse} setfunc={setHasHouse} />
        <ToggleWithText title={'Owns car'} val={hasCar} setfunc={setHasCar}/>
        <ToggleWithText title={'Office worker'} val={isOfficeWorker} setfunc={setIsOfficeWorker}/>
        <p>Wants to: </p>
        <ToggleWithText title={'Save time'} val={saveTime} setfunc={setSaveTime}/>
        <ToggleWithText title={'Save money'} val={saveMoney} setfunc={setSaveMoney}/>
        <ToggleWithText title={'Less stress'} val={saveStress} setfunc={setSaveStress}/>
        <p style={{marginTop: 10, marginBottom: 5}}>Define problem</p>
        <input 
            style={{
                fontSize: '13px', 
                paddingLeft: '10px', 
                borderRadius: '5px', 
                border: '1px solid black',
                height: '35px', 
                width: '600px', 
                boxSizing: 'border-box'
            }} 
            placeholder="Type here..."
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
        />
         <div onClick={handleButtonClick} style={{marginTop: 15, background: '#6D9C5B', width: 150, height: 45, borderRadius: 5, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p style={{color: 'white', marginLeft: 5, fontSize: 14.5, fontWeight: '500'}}>Generate</p>
            </div>
        </div>
        {showResult && json && <ResultView json={json}/>}
    </div>;
}

function ToggleWithText({title, val, setfunc}) {
    const checkHandler = () => {
        setfunc(!val)
      }
    return <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <input onChange={checkHandler} checked={val} type="checkbox"/>
        <p>{title}</p>
    </div>
}

