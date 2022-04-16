
   
import React from "react";

interface PolygonScanProps {
  size: number;
}

export default function PolygonIcon(props: PolygonScanProps): JSX.Element {
  return (
    <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" fill="white"/>
        <circle cx="16" cy="16" r="16" fill="#22996E"/>
        <path d="M16 23.1284H7.24362C6.05767 23.1284 5.34076 21.8171 5.98088 20.8188L10.9627 13.0489C11.3305 12.4753 11.965 12.1284 12.6464 12.1284H19.3536C20.035 12.1284 20.6695 12.4753 21.0373 13.0489L26.0191 20.8188C26.6592 21.8171 25.9423 23.1284 24.7564 23.1284H16Z" fill="white"/>
        <path d="M16.8949 5.25525L18.9872 8.4524C19.4224 9.11748 18.9453 10 18.1505 10H13.8876C13.0851 10 12.6095 9.10228 13.0602 8.43831L15.2308 5.24116C15.6316 4.65074 16.5041 4.65813 16.8949 5.25525Z" fill="white"/>
    </svg>
  );
}