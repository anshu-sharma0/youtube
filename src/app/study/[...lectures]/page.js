"use client";
export default function Study({ params }) {
  console.log(params);
  return (
    <div>
      <h1>{params.lectures[0]}</h1>
      <h2>{params.lectures[1]}</h2>
    </div>
  );
}
