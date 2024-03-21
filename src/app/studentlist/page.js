import Link from "next/link";
export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/anil">Anil</Link>
        </li>
        <li>
          <Link href="/studentlist/bhaskar">Bhaskar</Link>
        </li>
        <li>
          <Link href="/studentlist/dev">Dev</Link>
        </li>
        <li>
          <Link href="/studentlist/lok">Lok</Link>
        </li>
      </ul>
    </div>
  );
}
