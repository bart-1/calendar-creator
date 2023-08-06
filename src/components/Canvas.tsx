import React, {
  MouseEvent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface CanvasProps {
    id: string;
}

const Canvas = ({id}:CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mouseStartCoordinates, setMouseStartCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [mouseMoveCoordinates, setMouseMoveCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (canvasRef.current !== null) setCtx(canvasRef.current.getContext("2d"));
  }, []);

  useEffect(() => {
    if (!ctx) return;

    ctx.lineCap = "round";
    ctx.beginPath();
    if (isDrawing) {
      ctx.moveTo(
        mouseStartCoordinates.x - ctx.canvas.offsetLeft,
        mouseStartCoordinates.y - ctx.canvas.offsetTop
      );
      ctx.lineTo(
        mouseMoveCoordinates.x - ctx.canvas.offsetLeft,
        mouseMoveCoordinates.y - ctx.canvas.offsetTop
      );
      setMouseStartCoordinates(mouseMoveCoordinates);
      ctx.stroke();
    }
  }, [isDrawing, mouseMoveCoordinates]);

  const handleMouse = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!ctx) return;

    if (e.type === "mousedown") {
      setMouseStartCoordinates({ x: e.clientX, y: e.clientY });
      setIsDrawing(true);
    }

    if (e.type === "mouseup") {
      setIsDrawing(false);
      setMouseStartCoordinates({ x: 0, y: 0 });
    }

    if (e.type === "mousemove")
      setMouseMoveCoordinates({ x: e.clientX, y: e.clientY });
  };
  const handleTouch = (e: TouchEvent<HTMLCanvasElement>) => {
    if (!ctx) return;

    if (e.type === "touchstart") {
      setMouseStartCoordinates({
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      });
    }

    if (e.type === "touchend") {
      setIsDrawing(false);
      setMouseStartCoordinates({ x: 0, y: 0 });
    }

    if (e.type === "touchmove") setIsDrawing(true);
    setMouseMoveCoordinates({
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    });
  };

  return (
    <>
          <canvas
              id={id}
        className="w-full h-full"
        width={canvasRef.current?.offsetWidth}
        height={canvasRef.current?.offsetHeight}
        ref={canvasRef}
        style={{ border: "1px solid black" }}
        onMouseDown={handleMouse}
        onMouseUp={handleMouse}
        onMouseMove={handleMouse}
        onTouchStart={handleTouch}
        onTouchEnd={handleTouch}
        onTouchMove={handleTouch}
      />

      {/* <button onClick={draw}>draw</button> */}
    </>
  );
};
export default Canvas;
