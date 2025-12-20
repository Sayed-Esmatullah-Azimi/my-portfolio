"use client"

import * as React from "react"

export function CursorEffect() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [gl, setGl] = React.useState<WebGLRenderingContext | null>(null)
  const [program, setProgram] = React.useState<WebGLProgram | null>(null)
  const [buffer, setBuffer] = React.useState<WebGLBuffer | null>(null)
  const [positionLocation, setPositionLocation] = React.useState<GLint | null>(null)
  const [resolutionLocation, setResolutionLocation] = React.useState<WebGLUniformLocation | null>(null)
  const [mouseLocation, setMouseLocation] = React.useState<WebGLUniformLocation | null>(null)
  const [timeLocation, setTimeLocation] = React.useState<WebGLUniformLocation | null>(null)
  const [intensityLocation, setIntensityLocation] = React.useState<WebGLUniformLocation | null>(null)
  const [velocityLocation, setVelocityLocation] = React.useState<WebGLUniformLocation | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const glContext = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
    })

    if (!glContext) {
      // Fallback for browsers without WebGL
      console.warn("WebGL not supported, cursor effect disabled")
      return
    }

    setGl(glContext)

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    // Fragment shader - liquid ripple effect
    const fragmentShaderSource = `
      precision highp float;
      
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_intensity;
      uniform vec2 u_velocity;
      
      varying vec2 v_uv;
      
      #define PI 3.14159265359
      
      float ripple(vec2 uv, vec2 center, float time, float speed, float frequency, float decay) {
        float dist = distance(uv, center);
        float wave = sin(dist * frequency - time * speed) * 0.5 + 0.5;
        float falloff = exp(-dist * decay);
        return wave * falloff;
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 mouse = u_mouse / u_resolution;
        
        // Flip Y coordinate
        uv.y = 1.0 - uv.y;
        mouse.y = 1.0 - mouse.y;
        
        float dist = distance(uv, mouse);
        
        // Calculate velocity magnitude for dispersion effect
        float velocityMag = length(u_velocity) * 0.001;
        
        // Multiple ripple layers for liquid effect
        float ripple1 = ripple(uv, mouse, u_time * 2.0, 3.0, 40.0, 8.0 + velocityMag * 2.0);
        float ripple2 = ripple(uv, mouse, u_time * 2.5 + 0.5, 2.5, 30.0, 10.0 + velocityMag);
        float ripple3 = ripple(uv, mouse, u_time * 1.8 + 1.0, 2.0, 50.0, 12.0);
        
        // Combine ripples with different weights
        float combined = ripple1 * 0.4 + ripple2 * 0.35 + ripple3 * 0.25;
        
        // Soft circular gradient around cursor
        float glow = smoothstep(0.3, 0.0, dist) * 0.6;
        
        // Ring effect tangent to cursor
        float ring = smoothstep(0.02, 0.025, dist) * smoothstep(0.06, 0.04, dist);
        float ring2 = smoothstep(0.04, 0.05, dist) * smoothstep(0.1, 0.07, dist);
        
        // Pulsing ring animation
        float pulseRing = smoothstep(0.01, 0.015, dist) * smoothstep(0.03 + sin(u_time * 3.0) * 0.01, 0.02, dist);
        
        // Color palette - indigo/purple/blue gradient
        vec3 color1 = vec3(0.388, 0.361, 0.965); // Indigo
        vec3 color2 = vec3(0.545, 0.361, 0.965); // Purple  
        vec3 color3 = vec3(0.231, 0.510, 0.965); // Blue
        
        // Mix colors based on ripple pattern
        vec3 rippleColor = mix(color1, color2, ripple1);
        rippleColor = mix(rippleColor, color3, ripple2 * 0.5);
        
        // Final color with glow, ripples and rings
        float alpha = (combined * 0.15 + glow * 0.2 + ring * 0.4 + ring2 * 0.25 + pulseRing * 0.3) * u_intensity;
        
        // Add velocity-based dispersion glow
        alpha += velocityMag * glow * 0.5;
        
        vec3 finalColor = rippleColor;
        
        gl_FragColor = vec4(finalColor, alpha * 0.7);
      }
    `

    // Compile shader
    function compileShader(source: string, type: number) {
      const shader = glContext.createShader(type)!
      glContext.shaderSource(shader, source)
      glContext.compileShader(shader)
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader compile error:", glContext.getShaderInfoLog(shader))
        glContext.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = compileShader(vertexShaderSource, glContext.VERTEX_SHADER)
    const fragmentShader = compileShader(fragmentShaderSource, glContext.FRAGMENT_SHADER)

    if (!vertexShader || !fragmentShader) return

    // Create program
    const programContext = glContext.createProgram()!
    glContext.attachShader(programContext, vertexShader)
    glContext.attachShader(programContext, fragmentShader)
    glContext.linkProgram(programContext)

    if (!glContext.getProgramParameter(programContext, glContext.LINK_STATUS)) {
      console.error("Program link error:", glContext.getProgramInfoLog(programContext))
      return
    }

    setProgram(programContext)

    // Setup geometry (fullscreen quad)
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const bufferContext = glContext.createBuffer()
    glContext.bindBuffer(glContext.ARRAY_BUFFER, bufferContext)
    glContext.bufferData(glContext.ARRAY_BUFFER, positions, glContext.STATIC_DRAW)

    const positionLocationContext = glContext.getAttribLocation(programContext, "a_position")
    glContext.enableVertexAttribArray(positionLocationContext)
    glContext.vertexAttribPointer(positionLocationContext, 2, glContext.FLOAT, false, 0, 0)

    setPositionLocation(positionLocationContext)

    // Get uniform locations
    const resolutionLocationContext = glContext.getUniformLocation(programContext, "u_resolution")
    const mouseLocationContext = glContext.getUniformLocation(programContext, "u_mouse")
    const timeLocationContext = glContext.getUniformLocation(programContext, "u_time")
    const intensityLocationContext = glContext.getUniformLocation(programContext, "u_intensity")
    const velocityLocationContext = glContext.getUniformLocation(programContext, "u_velocity")

    setResolutionLocation(resolutionLocationContext)
    setMouseLocation(mouseLocationContext)
    setTimeLocation(timeLocationContext)
    setIntensityLocation(intensityLocationContext)
    setVelocityLocation(velocityLocationContext)

    // Mouse state with easing
    let mouseX = -1000
    let mouseY = -1000
    let targetMouseX = -1000
    let targetMouseY = -1000
    let prevMouseX = -1000
    let prevMouseY = -1000
    let velocityX = 0
    let velocityY = 0
    let intensity = 0
    let targetIntensity = 0

    const handleMouseMove = (e: MouseEvent) => {
      prevMouseX = targetMouseX
      prevMouseY = targetMouseY
      targetMouseX = e.clientX
      targetMouseY = e.clientY
      targetIntensity = 1

      // Calculate velocity for dispersion effect
      velocityX = targetMouseX - prevMouseX
      velocityY = targetMouseY - prevMouseY
    }

    const handleMouseLeave = () => {
      targetIntensity = 0
    }

    const handleMouseEnter = () => {
      targetIntensity = 1
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      glContext.viewport(0, 0, canvas.width, canvas.height)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Enable blending for transparency
    glContext.enable(glContext.BLEND)
    glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE) // Additive blending

    setBuffer(bufferContext)

    // Animation loop
    let animationId: number
    const startTime = Date.now()

    const render = () => {
      const time = (Date.now() - startTime) / 1000

      // Smooth easing for cursor position (physical motion feel)
      const easing = 0.12
      mouseX += (targetMouseX - mouseX) * easing
      mouseY += (targetMouseY - mouseY) * easing

      // Smooth intensity fade
      intensity += (targetIntensity - intensity) * 0.08

      // Decay velocity
      velocityX *= 0.95
      velocityY *= 0.95

      glContext.clearColor(0, 0, 0, 0)
      glContext.clear(glContext.COLOR_BUFFER_BIT)

      glContext.uniform2f(resolutionLocationContext, canvas.width, canvas.height)
      glContext.uniform2f(mouseLocationContext, mouseX, mouseY)
      glContext.uniform1f(timeLocationContext, time)
      glContext.uniform1f(intensityLocationContext, intensity)
      glContext.uniform2f(velocityLocationContext, velocityX, velocityY)

      glContext.drawArrays(glContext.TRIANGLE_STRIP, 0, 4)

      animationId = requestAnimationFrame(render)
    }

    render()
    setIsVisible(true)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("resize", handleResize)
      if (programContext) glContext.deleteProgram(programContext)
      if (vertexShader) glContext.deleteShader(vertexShader)
      if (fragmentShader) glContext.deleteShader(fragmentShader)
      if (bufferContext) glContext.deleteBuffer(bufferContext)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease",
        mixBlendMode: "screen",
      }}
    />
  )
}
