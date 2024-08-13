// import { useEffect, useState, useRef } from "react";
// import {
//   geoOrthographic,
//   geoPath,
//   geoGraticule,
//   GeoPermissibleObjects,
// } from "d3-geo";
// import { feature } from "topojson-client";

// interface Props {
//   width: number;
// }

// const Globe: React.FC<Props> = ({ width }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [map, setMap] = useState<GeoPermissibleObjects>();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const context = canvas.getContext("2d");
//     if (!context) return;

//     const projection = geoOrthographic();
//     const path = geoPath(projection);
//     const graticule = geoGraticule();

//     projection
//       .fitSize([width, width], { type: "Sphere" })
//       .rotate([Date.now() / 50, -10]); // Use Date.now() instead of t

//     context.strokeStyle = "#ccc";
//     context.beginPath(), path(graticule()), context.stroke();

//     if (map) {
//       context.fillStyle = "#000";
//       context.beginPath(), path(map), context.fill();

//       const chennaiCoordinates: [number, number] = [80.2785, 13.0878]; // Longitude, Latitude
//       const [x, y] = projection(chennaiCoordinates);

//       const canvasWidth = context.canvas.width;
//       const canvasHeight = context.canvas.height;
//       const scale = projection.scale();
//       const rotate = projection.rotate();

//       const chennaiVisible =
//         x >= 0 &&
//         x <= canvasWidth &&
//         y >= 0 &&
//         y <= canvasHeight &&
//         scale > 100 &&
//         rotate[0] > 180 &&
//         rotate[0] < 360;
//       if (chennaiVisible) {
//         context.fillStyle = "red";
//         context.fillText("Chennai", x, y - 10);
//         context.font = "15px Montserrat";
//         context.textAlign = "center";

//         context.fillStyle = "red";
//         context.beginPath();
//         context.arc(x, y, 5, 0, 2 * Math.PI);
//         context.fill();
//       }
//     }
//   }, [map, width]);

//   useEffect(() => {
//     fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json")
//       .then((data) => data.json())
//       .then((data) => setMap(feature(data, "land")));
//   }, []);

//   return (
//     <div style={{ width: "100%", overflow: "hidden" }}>
//       <canvas ref={canvasRef} width={width} height={width}></canvas>
//     </div>
//   );
// };

// export default Globe;
