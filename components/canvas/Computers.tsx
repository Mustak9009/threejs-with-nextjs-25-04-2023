import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = () => {
  const computer = useGLTF("./public/desktop_pc/scene.gltf");
  return <h1>computers</h1>;
};

export default Computers;
