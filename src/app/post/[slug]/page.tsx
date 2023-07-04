export default async function Detail({ params }) {
    return (
        <div className="container">
            <article>
                <header>상세페이지</header>
                <div>{res.title}</div>
                <div>{res.name}</div>
            </article>
        </div>
    );
}
