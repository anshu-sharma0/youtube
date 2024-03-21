import Link from "next/link";
export default function notFound() {
  return (
    <div>
      <h1>This page is not available</h1>
      <Link href="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
