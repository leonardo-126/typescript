interface Props {
    name: string
}

export const FirstComponent = (props: Props) => {
    return (
        <div>
            <p>Meu primeiro component </p>
            <p>o nome dele e {props.name}</p>
        </div>
    )
}