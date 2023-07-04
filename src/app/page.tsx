import { fetchAPI } from "@/lib/api";
import Cards from "@/lib/components/Cards";
import Image from "next/image";

async function getData() {
    const res = await fetchAPI("/posts");

    return { props: { posts: res.data } };
}

export default async function Page() {
    const {
        props: { posts },
    } = await getData();

    return (
        <div>
            <Cards></Cards>
        </div>
    );
}
