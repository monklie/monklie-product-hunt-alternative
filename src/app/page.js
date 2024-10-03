'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Sidebar } from "./sidebar";
import './standard.css';
import { ItemCard } from "./item-card";
import { PersonaGenerator } from "./persona-generator";


export default function Home() {

  const [activeTool, setActiveTool] = useState(0);

  const setTool = (value) => {
    setActiveTool(value);
  }

  return (
    <>
      <div style={{display: 'flex'}}>
        <Sidebar/>
        <div style={{width: 200}}/>
        {activeTool == 0 && 
        <div style={{display: 'flex', flexDirection: 'column', gap: 10, flex: 1, padding: 10}}>
          <ItemCard func={setTool} title={'User persona generator'} category={'marketing'}/>
          <ItemCard title={'More handy tools that can be use within the website'} category={'To be announced'}/>
        </div>}
        {activeTool == 1 &&
          <PersonaGenerator func={setTool} />
        }
      </div>
    </>
  );
}
