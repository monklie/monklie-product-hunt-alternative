'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Sidebar } from "./sidebar";
import './standard.css';
import { ItemCard , ItemCard2} from "./item-card";
import { PersonaGenerator } from "./persona-generator";
import { InterfaceBuilder } from "./interfacebuilder";

export default function Home() {

  const [activeTool, setActiveTool] = useState(0);

  const [code, setCode] = useState("<div style='background: green; width: 100px; height: 100px;' ></div>");

  const setTool = (value) => {
    setActiveTool(value);
  }

  return (
    <>
      <div style={{display: 'flex'}}>
        <Sidebar func={setTool} />
        <div style={{width: 200}}/>
        {activeTool == 0 && 
        <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1, padding: 10}}>

          <p style={{fontSize: 30}}>Try With One Click</p>
          <ItemCard func={setTool} title={'User persona generator'} category={'marketing'}/>
          <ItemCard title={'More handy tools that can be use within the website'} category={'To be announced'}/>
          <p style={{fontSize: 30}}>Top Tools</p>
          <ItemCard2 func={setTool} name={'Webflow'} website={'https://webflow.com'} title={'Build websites visually'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmab2aeRSYdlQ3sVlxIMNqY03iOxWZB6WPA&s'}/>
          <ItemCard2 func={setTool} name={'Heroku'} website={'https://heroku.com'} title={'Easy hosting for Node.js'} image={'https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_400x400.png'}/>
          <ItemCard2 func={setTool} name={'Bunny.net'} website={'https://bunny.net'} title={'Fast and cheap image CDN'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61sBv3Ux7jzzSwMxdzTyoDel_KgF6O93Qqw&s'}/>
          <ItemCard2 func={setTool} name={'Eleven Labs'} website={'https://elevenlabs.io'} title={'Realistic text to speech'} image={'https://radioink.com/wp-content/uploads/2023/10/ElevenLabs.jpeg'}/>
          <ItemCard2 func={setTool} name={'Shopify'} website={'https://shopify.com'} title={'E-commerce platform'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s'}/>
          <ItemCard2 func={setTool} name={'Retool'} website={'https://retool.com'} title={'Built internal tools faster'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1G4uZ5RMO86d5R_ZItsOR-kw_LDlnFSNGw&s'}/>
          
        </div>}
        {activeTool == 1 &&
          <PersonaGenerator func={setTool} />
        }
        {activeTool == 2 &&
          <InterfaceBuilder/>
        }
      </div>
    </>
  );
}
