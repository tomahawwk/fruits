import styled from 'styled-components'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import imagesSrc from '../../particle-images.json'

const StyledParticles = styled.div`
    outline: 1px solid white;
    width: 100%;
    height: 100%;

    #images {
        display: none;
    }
`

const StyledParticlesContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
`

const Particles = ({ index, menuOpened }) => {
    let body = document.querySelector('body'),
    mainContainer = document.querySelector('#main'),
    images = document.querySelector("#images"),
    scene,
    renderer,
    camera,
    cameraLookAt = new THREE.Vector3(0, 0, 0),
    cameraTarget = new THREE.Vector3(0, 0 ,800),
    windowWidth,
    windowHeight,
    windowHalfWidth,
    windowHalfHeight,
    points,
    mouseX = 0,
    mouseY = 0,
    gui,
    stats,
    contentElement,
    colors = ['#fbe201'],
    graphics,
    currentGraphic = 0,
    graphicCanvas,
    gctx,
    canvasWidth = 240,
    canvasHeight = 240,
    graphicPixels,
    particles = [],
    graphicOffsetX = canvasWidth / 2,
    graphicOffsetY = canvasHeight / 4;
    const onMouseMove = (event) => {
        mouseX = (event.clientX - windowHalfWidth);
        mouseY = (event.clientY - windowHalfHeight);
        cameraTarget.x = (mouseX * .1) / 1;
        cameraTarget.y = (mouseY * .1) / 1;
    }

    const initStage = () => {
        window.addEventListener('mousemove', onMouseMove, false);
    }
    console.log(mainContainer)
    const initScene = () => {
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(windowWidth, windowHeight);
        if(mainContainer)
            mainContainer.appendChild(renderer.domElement);
    }

    const initCanvas = () => {
        graphicCanvas = document.createElement('canvas');
        graphicCanvas.width = canvasWidth;
        graphicCanvas.height = canvasHeight;
        gctx = graphicCanvas.getContext('2d');
        graphics = document.querySelectorAll('#images img');
    }

    function randomPos(vector, outFrame = false) {
        const radius = outFrame ? 700 : 700;
        const centerX = 0;
        const centerY = 0;
        const r = 700 + radius * Math.random();
        const angle = Math.random() * Math.PI * 2;
        vector.x = centerX + r * Math.cos(angle);
        vector.y = centerY + r * Math.sin(angle);
        vector.z = Math.random() * 700;
    }

    const initCamera = () => {
        const fieldOfView = 75;
        const aspectRatio = windowWidth / windowHeight;
        const nearPlane = 1;
        const farPlane = 3000;
        camera = new THREE.PerspectiveCamera(
          fieldOfView,
          aspectRatio,
          nearPlane,
          farPlane);
        camera.position.z = 800;
      }

    function Particle() {
        this.vx = Math.random() * 0.05;
        this.vy = Math.random() * 0.05;
      }
    
    Particle.prototype.init = function(i) {
        const particle = new THREE.Object3D();
        const geometryCore = new THREE.SphereGeometry(1, 4, 4);
        const materialCore = new THREE.MeshBasicMaterial({
          color: colors[i % colors.length]
        });
    
        const box = new THREE.Mesh(geometryCore, materialCore);
        box.geometry.__dirtyVertices = true;
        box.geometry.dynamic = true;
    
        const pos = getGraphicPos(graphicPixels[i]);
        particle.targetPosition = new THREE.Vector3(pos.x, pos.y, pos.z);
    
        particle.position.set(windowWidth/2 * 0.5, windowHeight/2 * 0.5, -10 * Math.random() + 20);
        randomPos(particle.position);
        for (var i = 0; i < box.geometry.vertices.length; i++) {
            box.geometry.vertices[i].x += -2 + Math.random() * 4;
            box.geometry.vertices[i].y += -2 + Math.random() * 4;
            box.geometry.vertices[i].z += -2 + Math.random() * 4;
        }
        particle.add(box);
        this.particle = particle;
    }
    
    Particle.prototype.updateRotation = function() {
        this.particle.rotation.x += this.vx;
        this.particle.rotation.y += this.vy;
    }
    
    Particle.prototype.updatePosition = function() {
        this.particle.position.lerp(this.particle.targetPosition, 0.1);
    }
    
    function updateParticles() {
        for (var i = 0, l = particles.length; i < l; i++) {
          particles[i].updateRotation();
          particles[i].updatePosition();
        }
      }
    
      const getGraphicPos = (pixel) => {
        const posX = (pixel.x - graphicOffsetX - Math.random() * 4 - 2) * 3;
        const posY = (pixel.y - graphicOffsetY - Math.random() * 4 - 2) * 3;
        const posZ = -20 * Math.random() + 40;
    
        return {x:posX, y:posY, z:posZ};
      }
    
      const setParticles = () => {
        for (let i = 0; i < graphicPixels.length; i++) {
          if (particles[i]) {
            const pos = getGraphicPos(graphicPixels[i]);
            particles[i].particle.targetPosition.x = pos.x;
            particles[i].particle.targetPosition.y = pos.y;
            particles[i].particle.targetPosition.z = pos.z;
          } else {
            const p = new Particle();
            p.init(i);
            scene.add(p.particle);
            particles[i] = p;
          }
        }
    
        for (let i = graphicPixels.length; i < particles.length; i++) {
          randomPos(particles[i].particle.targetPosition, true);
        }
    
        console.log('Total Particles: ' + particles.length);
    }
    const updateGraphic = () => {
        const img = graphics[currentGraphic];
        if(img)
          gctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    
        const gData = gctx.getImageData(0, 0, canvasWidth, canvasHeight).data;
        graphicPixels = [];
    
        for (let i = gData.length; i >= 0; i -= 1) {
          if(gData[i] == 0) {
            const x = (i / 4) % canvasWidth;
            const y = canvasHeight - Math.floor(Math.floor(i / canvasWidth) / 4);
    
            if((x && x % 2 == 0) && (y && y % 2 == 0)) {
              graphicPixels.push({
                x: x,
                y: y
              });
            }
          }
        }
    
        for (let i = 0; i < particles.length; i++) {
          randomPos(particles[i].particle.targetPosition);
        }
    
        setTimeout(() => {
          setParticles();
        }, 100);
    }

    const animate = () => {
        requestAnimationFrame(animate);
        updateParticles();
        camera.position.lerp(cameraTarget, 0.2);
        camera.lookAt(cameraLookAt);
        render();
      }
    
    const render = () => {
        renderer.render(scene, camera);
    }
    
    
    const init = () => {
        initStage();
        initScene();
        initCanvas();
        initCamera();
        updateGraphic();
        animate();
    }

    useEffect(() => {
        console.log(index)
        console.log(THREE)
    }, [index])

    useEffect(() => {
        
            
    }, [menuOpened])

    init()
    
    return (
        <StyledParticles id="main">
            <StyledParticlesContainer></StyledParticlesContainer>
            <div id="images">{ imagesSrc.map((item, index) => (<img src={item} key={index} />)) }</div>
        </StyledParticles>
    )
}

export default Particles;
