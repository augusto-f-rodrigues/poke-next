import Link from "next/link";

interface LisTemplateProps {
  title: string;
  link: string;
}

export default function LisTemplate(props: LisTemplateProps) {
  return (
    <li className="pr-2 pl-2">
      <Link href={props.link}>
        <a className="text-lg text-white font-bold hover:text-purple-300 transition"> {props.title} </a>
      </Link>
    </li>
  );
}
