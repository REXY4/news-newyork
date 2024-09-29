/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import React from "react";
import { Text, Plane } from "@react-three/drei";
import { NYTArticleProps } from "../state-type/news.state";

interface CloudProps {
  newsData :NYTArticleProps | null;
  news: boolean;
  opacity: number;
  [key: string]: any;
}

export function Cloud({ newsData, news, opacity, ...props }: CloudProps) {
  const { nodes, materials }: any = useGLTF("./models/cloud/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          {...materials["lambert2SG.001"]}
          transparent
          opacity={opacity}
        />
      </mesh>
      {news && (
        <group
          position={[0, 0, 1]}
          scale={1}
          onClick={() => {
            if (typeof window !== 'undefined' && newsData?.web_url) {
              window.open(newsData.web_url, '_blank');
            }
          }}
          onPointerOver={(e:any) => {
            e.stopPropagation();
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            document.body.style.cursor = 'auto';
          }}
        >
          <Plane args={[3, 2]} position={[0, 0, -0.01]}>
            <meshBasicMaterial color="black" transparent opacity={0.5} />
          </Plane>
          <Text 
            position={[0, 0.7, 0]} 
            fontSize={0.15} 
            color="white" 
            maxWidth={2.5}
            textAlign="center"
            anchorX="center"
            anchorY="top"
          >
            {newsData?.abstract.substring(0, 50)}
          </Text>
          <Text 
            position={[0, -0.6, 0]} 
            fontSize={0.1} 
            color="white"
            maxWidth={2.5}
            textAlign="center"
            anchorX="center"
            anchorY="bottom"
          >
            {`${newsData?.headline.main} - ${newsData?.source}`}
          </Text>
        </group>
      )}
    </group>
  );
}

useGLTF.preload("./models/cloud/model.glb");
