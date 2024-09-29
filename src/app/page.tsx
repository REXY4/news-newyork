'use client'

import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Experience } from "./components/Experience";
import { ScrollControls, useScroll } from "@react-three/drei";
import TitleComponent from "./components/htmlComponents/Title";
import HintComponent from "./components/htmlComponents/hintComponent";
import { useEffect, useState } from "react";
import { ArticleAction } from "./actions/article.action";
import { MyProvider, useMyContext } from "@/context";

export default function Home() {
  const {state, setState} = useMyContext();
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const getArticle = async () =>{
    const response = await ArticleAction.getAllArticle()
    setState({...state, nytNews : response});
  }
  useEffect(()=>{
    if (typeof window !== 'undefined' ) {
      setWindowHeight(window.innerHeight)
    }
    getArticle();
  },[])

  return (
    <>
      <Canvas style={{
        height : windowHeight
      }}>
      <color attach="background" args={["#ececec"]} />
      <TitleComponent/>
        <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}
