interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

export const Destructuring = ({title, content, commentsQty, tags}: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            <h1>{content}</h1>
            <h1>{commentsQty}</h1>
            <h1>{tags.map(tag => (
                <div>#{tag}</div>
            ))}</h1>
            
        </div>
    )
}