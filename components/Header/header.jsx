import Image from "next/image";
// import styles from "./page.module.css";

export default function Header() {
  return (
    <header>
      <Image
        src="/logoImg.jpg"
        alt="A form and a pencil"
        width={100}
        height={100}
      />
      <h1>React Forms</h1>
    </header>
  );
}
