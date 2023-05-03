import React, { useState } from 'react'
import * as THREE from 'three';
export default function Computers() {
  const [scene] = useState(new THREE.Scene());
  
  return (
    <div>Computers</div>
  )
}

