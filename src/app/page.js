import Image from "next/image";
import styles from "./page.module.css";
import { Sidebar } from "./sidebar";
import './standard.css';
import { ItemCard } from "./item-card";

export default function Home() {
  return (
    <>
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{display: 'flex',flexDirection: 'column', gap: 10, flex: 1, padding: 10}}>
          <ItemCard/>
          <ItemCard/>
        </div>
      </div>
    </>
  );
}
